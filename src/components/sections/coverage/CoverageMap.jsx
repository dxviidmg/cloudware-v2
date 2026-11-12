"use client";

import { useEffect, useRef, useState } from "react";
import coverage from "@/data/coverage.json";
import { PAD, SPAN_X, SPAN_Y, CENTER, project } from "./map-geometry";
import { drawMunicipios, drawSignal, drawPin, drawPopup, drawOtherTag } from "./map-draw";

const COLORS = { fibra: "#c4a8ff", antena: "#f5a623" };
const OTHER = { fibra: "antena", antena: "fibra" };
const TAG = { fibra: "solo fibra", antena: "solo antena" };
export function CoverageMap({ mode }) {
  const canvasRef = useRef(null);
  const modeRef = useRef(mode);
  const [municipios, setMunicipios] = useState(coverage[mode]);

  useEffect(() => {
    modeRef.current = mode;
    setMunicipios(coverage[mode]);
  }, [mode]);

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let size = { w: 0, h: 0 };
    let selected = null;
    let dots = [];
    let pulse = 0;
    let frame;
    let signals = [];

    const initSignals = () => {
      signals = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]].map(([from, to]) => ({
        from, to,
        t: Math.random(),
        speed: 0.004 + Math.random() * 0.003,
        size: 3 + Math.random() * 2,
        opacity: 0.7 + Math.random() * 0.3,
      }));
    };
    initSignals();
    let lastMode = modeRef.current;

    const resize = () => {
      const w = cv.parentElement.clientWidth;
      const h = Math.round(Math.min((w - PAD * 2) * (SPAN_Y / SPAN_X) + PAD * 2, 560));
      const dpr = window.devicePixelRatio || 1;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = { w, h };
    };

    const draw = () => {
      const { w, h } = size;
      if (w < 10) return;
      const current = modeRef.current;
      if (current !== lastMode) {
        lastMode = current;
        selected = null;
        initSignals();
      }
      const color = COLORS[current];
      const muns = coverage[current];
      ctx.clearRect(0, 0, w, h);

      const names = new Set(muns.map((m) => m.name));
      const otherMode = OTHER[current];
      const onlyOther = coverage[otherMode].filter((m) => !names.has(m.name));
      drawMunicipios(ctx, names, color, w, h, new Set(onlyOther.map((m) => m.name)), COLORS[otherMode]);
      onlyOther.forEach((m) =>
        drawOtherTag(ctx, m, project(...CENTER[m.name], w, h), COLORS[otherMode], TAG[otherMode])
      );

      signals.forEach((s) => {
        if (!reduced) {
          s.t += s.speed;
          if (s.t > 1) s.t = 0;
        }
        drawSignal(ctx, s, muns, color, w, h);
      });

      pulse += reduced ? 0 : 0.04;
      dots = muns.map((m) =>
        drawPin(ctx, m, project(...CENTER[m.name], w, h), color, selected?.name === m.name, pulse)
      );
      ctx.textAlign = "left";

      if (selected?.localidades) drawPopup(ctx, selected, color, w, h);
    };

    const loop = () => {
      draw();
      frame = requestAnimationFrame(loop);
    };
    const redraw = () => {
      if (reduced) draw();
    };

    const hit = (mx, my) => {
      let found = null;
      dots.forEach((d) => {
        const b = d.box;
        if (Math.hypot(mx - d.x, my - d.y) < 14 || (mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h)) found = d.mun;
      });
      return found;
    };
    const pos = (e) => {
      const rect = cv.getBoundingClientRect();
      const t = e.touches?.[0] ?? e.changedTouches?.[0] ?? e;
      return [t.clientX - rect.left, t.clientY - rect.top];
    };
    const onMove = (e) => {
      selected = hit(...pos(e));
      cv.style.cursor = selected ? "pointer" : "default";
      redraw();
    };
    const onLeave = () => {
      selected = null;
      redraw();
    };
    const onTouch = (e) => {
      const found = hit(...pos(e));
      if (!found) return;
      e.preventDefault();
      selected = selected?.name === found.name ? null : found;
      redraw();
    };

    resize();
    const observer = new ResizeObserver(() => {
      resize();
      redraw();
    });
    observer.observe(cv.parentElement);
    cv.addEventListener("mousemove", onMove);
    cv.addEventListener("mouseleave", onLeave);
    cv.addEventListener("touchstart", onTouch, { passive: false });
    reduced ? draw() : (frame = requestAnimationFrame(loop));

    const modeWatcher = setInterval(() => {
      if (reduced && modeRef.current !== lastMode) draw();
    }, 100);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(modeWatcher);
      observer.disconnect();
      cv.removeEventListener("mousemove", onMove);
      cv.removeEventListener("mouseleave", onLeave);
      cv.removeEventListener("touchstart", onTouch);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="cov-canvas"
        role="img"
        aria-label={`Mapa de Hidalgo con cobertura de ${mode === "fibra" ? "fibra óptica" : "antena"} en ${municipios
          .map((m) => m.name)
          .join(", ")}. La lista de localidades está debajo del mapa.`}
      />
      <details className="cov-list">
        <summary>Ver localidades con cobertura</summary>
        <ul>
          {municipios.map((m) => (
            <li key={m.name}>
              <strong>{m.name}</strong>
              <span>{m.localidades.join(", ")}</span>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
