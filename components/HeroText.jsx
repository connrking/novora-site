"use client";
import { useState, useEffect } from "react";
import { C, F } from "./tokens";

export default function HeroText({ text }) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const lines = text.split("\n");
  const allWords = lines.flatMap(line => line.split(" "));

  useEffect(() => {
    if (!started) return;
    if (visibleCount >= allWords.length) return;
    const t = setTimeout(() => setVisibleCount(c => c + 1), 100);
    return () => clearTimeout(t);
  }, [started, visibleCount, allWords.length]);

  let wordIndex = 0;
  return (
    <h1 className="hero-title" style={{
      fontSize: 64, fontWeight: 300, lineHeight: 1.1,
      letterSpacing: "-0.02em", margin: 0, maxWidth: 780,
      fontFamily: F.h, color: C.white,
    }}>
      {lines.map((line, li) => (
        <span key={li}>
          {line.split(" ").map((word, wi) => {
            const idx = wordIndex++;
            const isVisible = idx < visibleCount;
            return (
              <span key={wi} style={{
                display: "inline-block",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.98)",
                filter: isVisible ? "blur(0px)" : "blur(8px)",
                transition: "opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1), transform 0.7s cubic-bezier(0.23, 1, 0.32, 1), filter 0.7s cubic-bezier(0.23, 1, 0.32, 1)",
              }}>
                {word}{wi < line.split(" ").length - 1 ? "\u00A0" : ""}
              </span>
            );
          })}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </h1>
  );
}
