"use client";

import { useEffect, useRef, useState } from "react";

export const Reveal = ({ as: Tag = "div", variant = "up", delay = 0, className = "", children, ...props }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${shown ? "reveal-in" : ""} ${className}`}
      style={settled ? undefined : { transitionDelay: `${delay}ms` }}
      onTransitionEnd={(e) => {
        if (shown && e.target === e.currentTarget && e.propertyName === "opacity") setSettled(true);
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};
