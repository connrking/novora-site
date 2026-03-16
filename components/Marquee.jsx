"use client";
import { C } from "./tokens";

export default function Marquee() {
  const logomark = (
    <svg width="80" height="80" viewBox="0 0 300 300" fill="currentColor">
      <path d="M100.46,154.36c1.23-26.33,22.91-47.32,49.54-47.32s48.31,20.99,49.54,47.32h22.58v-76.48H77.87v76.48h22.58Z"/>
      <rect x="77.87" y="163.79" width="144.25" height="58.33"/>
    </svg>
  );
  return (
    <div style={{
      overflow: "hidden", padding: "56px 0",
      borderTop: `0.5px solid ${C.border}`,
      borderBottom: `0.5px solid ${C.border}`,
      background: C.bg,
    }}>
      <style>{`
        @keyframes novora-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .novora-marquee-track { display: flex; align-items: center; animation: novora-marquee 18s linear infinite; width: max-content; }
        .novora-marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="novora-marquee-track">
        {[...Array(14)].map((_, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center",
            marginRight: 80, flexShrink: 0,
            color: "rgba(255,255,255,0.25)",
          }}>
            {logomark}
          </div>
        ))}
      </div>
    </div>
  );
}
