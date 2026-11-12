"use client";

import { useEffect, useRef } from "react";
import "./ScrollText.css";

// Words fade in one by one as the paragraph scrolls into view (scroll-scrubbed).
// Without JS or with reduced motion the text is fully visible (--p defaults to 1).
export const ScrollText = ({ as: Tag = "p", children, ...props }) => {
  const ref = useRef(null);
  const words = String(children).split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the paragraph enters the bottom of the viewport, 1 once it reaches ~35% from the top
      const start = vh * 0.92;
      const end = vh * 0.35 - height * 0.4;
      const p = Math.min(1, Math.max(0, (start - top) / (start - end)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    el.classList.add("is-live");
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <Tag ref={ref} className="scroll-text" style={{ "--n": words.length }} {...props}>
      {words.map((word, i) => (
        <span key={i} style={{ "--i": i }}>
          {word}{" "}
        </span>
      ))}
    </Tag>
  );
};
