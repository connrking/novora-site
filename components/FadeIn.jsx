"use client";
import { useState, useEffect, useRef } from "react";

export default function FadeIn({ children, delay = 0 }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setTimeout(() => setShow(true), delay * 1000);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
    }}>
      {children}
    </div>
  );
}
