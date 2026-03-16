"use client";
import { useState, useEffect, useRef } from "react";
import { C, F } from "./tokens";

export default function ServiceCard({ num, title, desc, index }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setShow(true), index * 150);
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);
  return (
    <div ref={ref} style={{
      padding: "48px 40px",
      borderTop: `0.5px solid ${C.border}`,
      borderRight: index < 2 ? `0.5px solid ${C.border}` : "none",
      fontFamily: F.h, minHeight: 240, cursor: "default",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.7s ease, transform 0.7s ease, background 0.3s",
    }}
    className="service-card"
    >
      <div style={{ fontSize: 12, color: C.gray500, letterSpacing: "0.1em", marginBottom: 20 }}>{num}</div>
      <h3 style={{ fontSize: 22, fontWeight: 400, color: C.white, margin: "0 0 16px", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.7, color: C.gray200, margin: 0, fontWeight: 400 }}>{desc}</p>
    </div>
  );
}
