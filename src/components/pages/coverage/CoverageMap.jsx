"use client";

import { useEffect, useRef, useState } from "react";
import coverage from "../../../data/coverage.json";

const PAD = 28;
const LONS = coverage.state.map((p) => p[0]);
const LATS = coverage.state.map((p) => p[1]);
const BOUNDS = {
  minLon: Math.min(...LONS),
  maxLon: Math.max(...LONS),
  minLat: Math.min(...LATS),
  maxLat: Math.max(...LATS),
};
// a degree of longitude is shorter than one of latitude: cos(lat) keeps real proportions
const LON_K = Math.cos((((BOUNDS.minLat + BOUNDS.maxLat) / 2) * Math.PI) / 180);
const SPAN_X = (BOUNDS.maxLon - BOUNDS.minLon) * LON_K;
const SPAN_Y = BOUNDS.maxLat - BOUNDS.minLat;
const COLORS = { fibra: "#c4a8ff", antena: "#f5a623" };
const MIN_DIST = 34;
const FONT = "Poppins, sans-serif";

function project(lon, lat, w, h) {
  const sc = Math.min((w - PAD * 2) / SPAN_X, (h - PAD * 2) / SPAN_Y);
  const offX = PAD + (w - PAD * 2 - SPAN_X * sc) / 2;
  const offY = PAD + (h - PAD * 2 - SPAN_Y * sc) / 2;
  return [offX + (lon - BOUNDS.minLon) * LON_K * sc, h - (offY + (lat - BOUNDS.minLat) * sc)];
}

function pill(ctx, x, y, w, h, r) {
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
  else ctx.rect(x, y, w, h);
}

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

      ctx.beginPath();
      coverage.state.forEach(([lon, lat], i) => {
        const [x, y] = project(lon, lat, w, h);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.fillStyle = "rgba(108, 63, 160, 0.28)";
      ctx.fill();
      ctx.strokeStyle = "#a58cbf";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      signals.forEach((s) => {
        if (!reduced) {
          s.t += s.speed;
          if (s.t > 1) s.t = 0;
        }
        const from = muns[s.from % muns.length];
        const to = muns[s.to % muns.length];
        if (!from || !to) return;
        const [fx, fy] = project(from.cx, from.cy, w, h);
        const [tx, ty] = project(to.cx, to.cy, w, h);
        const x = fx + (tx - fx) * s.t;
        const y = fy + (ty - fy) * s.t;
        const grd = ctx.createRadialGradient(x, y, 0, x, y, s.size * 3);
        grd.addColorStop(0, `${color}${Math.round(s.opacity * 255).toString(16).padStart(2, "0")}`);
        grd.addColorStop(1, `${color}00`);
        ctx.beginPath();
        ctx.arc(x, y, s.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      pulse += reduced ? 0 : 0.04;
      const pts = muns.map((m) => ({ m, p: project(m.cx, m.cy, w, h) }));
      for (let iter = 0; iter < 6; iter++) {
        for (let a = 0; a < pts.length; a++) {
          for (let b = a + 1; b < pts.length; b++) {
            const dx = pts[b].p[0] - pts[a].p[0];
            const dy = pts[b].p[1] - pts[a].p[1];
            const d = Math.hypot(dx, dy);
            if (d > 0 && d < MIN_DIST) {
              const push = (MIN_DIST - d) / 2;
              pts[a].p[0] -= (dx / d) * push;
              pts[a].p[1] -= (dy / d) * push;
              pts[b].p[0] += (dx / d) * push;
              pts[b].p[1] += (dy / d) * push;
            }
          }
        }
      }

      dots = [];
      pts.forEach(({ m, p: [x, y] }) => {
        const isSel = selected && selected.name === m.name;
        for (let r = 0; r < 3; r++) {
          const pr = (isSel ? 26 : 16) + r * 14 + Math.sin(pulse - r * 0.8) * 3;
          ctx.beginPath();
          ctx.arc(x, y, pr, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${Math.round((0.15 - r * 0.04) * (isSel ? 1.5 : 1) * 255).toString(16).padStart(2, "0")}`;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(x, y, isSel ? 11 : 8, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = "#14101f";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, isSel ? 4.5 : 3, 0, Math.PI * 2);
        ctx.fillStyle = "#14101f";
        ctx.fill();

        ctx.font = `${isSel ? "bold " : ""}11px ${FONT}`;
        const lw = ctx.measureText(m.name).width;
        const ly = y - (m.labelOffset || 22);
        ctx.fillStyle = isSel ? color : "rgba(20, 16, 31, 0.92)";
        pill(ctx, x - lw / 2 - 5, ly - 12, lw + 10, 17, 4);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.18)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = isSel ? "#14101f" : "#f4f1fb";
        ctx.textAlign = "center";
        ctx.fillText(m.name, x, ly);
        dots.push({ x, y, mun: m, box: { x: x - lw / 2 - 5, y: ly - 12, w: lw + 10, h: 17 } });
      });
      ctx.textAlign = "left";

      if (selected?.localidades) {
        const [sx, sy] = project(selected.cx, selected.cy, w, h);
        const locs = selected.localidades;
        let cols = locs.length > 10 ? 2 : 1;
        let popW = cols === 2 ? 240 : 175;
        if (popW > w - 16) {
          cols = 1;
          popW = Math.min(175, w - 16);
        }
        const perCol = Math.ceil(locs.length / cols);
        const popH = perCol * 17 + 44;
        let px = sx + 16;
        let py = sy - popH / 2;
        if (px + popW > w - 10) px = sx - popW - 16;
        px = Math.max(8, Math.min(px, w - popW - 8));
        py = Math.max(8, Math.min(py, h - popH - 8));

        ctx.shadowColor = "rgba(0,0,0,0.4)";
        ctx.shadowBlur = 14;
        ctx.fillStyle = "#2a2142";
        pill(ctx, px, py, popW, popH, 10);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = `bold 13px ${FONT}`;
        ctx.fillText(selected.name, px + 12, py + 22);
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px + 10, py + 29);
        ctx.lineTo(px + popW - 10, py + 29);
        ctx.stroke();
        ctx.font = `11px ${FONT}`;
        locs.forEach((loc, i) => {
          const col = Math.floor(i / perCol);
          const row = i % perCol;
          const tx = px + 12 + col * (popW / cols);
          const ty = py + 44 + row * 17;
          ctx.fillStyle = color;
          ctx.fillText("•", tx, ty);
          ctx.fillStyle = "#f4f1fb";
          ctx.fillText(loc, tx + 10, ty);
        });
      }
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
        if (Math.hypot(mx - d.x, my - d.y) < 22 || (mx >= b.x && mx <= b.x + b.w && my >= b.y && my <= b.y + b.h)) found = d.mun;
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
