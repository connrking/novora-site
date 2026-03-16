"use client";
import { useState, useEffect } from "react";
import { C, F } from "./tokens";

export default function HeroText({ text }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 200); }, []);
  const lines = text.split("\n");
  let wordIndex = 0;
  return (
    <h1 style={{
      fontSize: 64, fontWeight: 300, lineHeight: 1.1,
      letterSpacing: "-0.02em", margin: 0, maxWidth: 780,
      fontFamily: F.h, color: C.white,
    }}>
      {lines.map((line, li) => (
        <span key={li}>
          {line.split(" ").map((word, wi) => {
            const idx = wordIndex++;
            return (
              <span key={wi} style={{
                display: "inline-block",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(40px)",
                transition: `opacity 0.6s ease ${idx * 0.08}s, transform 0.6s ease ${idx * 0.08}s`,
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
