"use client";
import { C } from "./tokens";

const PARTNERS = [
  { name: "MetaDAO",   src: "/partners/metadao.png",   h: 33 },
  { name: "Superform", src: "/partners/superform.svg", h: 34 },
  { name: "deBridge",  src: "/partners/debridge.svg",  h: 38 },
  { name: "Credible",  src: "/partners/credible.svg",  h: 30 },
  { name: "Artemis",   src: "/partners/artemis.svg",   h: 31 },
  { name: "Bullpen",   src: "/partners/bullpen.png",   h: 43 },
  { name: "Chakra",    src: "/partners/chakra.svg",    h: 28 },
  { name: "Katana",    src: "/partners/katana.svg",    h: 41 },
  { name: "FactMachine", src: "/partners/factmachine.png", h: 38 },
  { name: "Jolly",       src: "/partners/jolly.png",       h: 56 },
];

export default function Marquee() {
  const loop = [...PARTNERS, ...PARTNERS];
  return (
    <section style={{
      background: C.bg,
      padding: "88px 0 96px",
      overflow: "hidden",
      position: "relative",
      borderTop: `0.5px solid ${C.border}`,
      borderBottom: `0.5px solid ${C.border}`,
    }}>
      <style>{`
        @keyframes novora-partner-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .novora-partner-eyebrow {
          text-align: center;
          color: rgba(255,255,255,0.42);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          margin: 0 0 56px;
        }
        .novora-partner-viewport {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0, #000 9%, #000 91%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0, #000 9%, #000 91%, transparent 100%);
        }
        .novora-partner-track {
          display: flex;
          align-items: center;
          gap: 96px;
          width: max-content;
          animation: novora-partner-scroll 50s linear infinite;
          will-change: transform;
        }
        .novora-partner-track:hover { animation-play-state: paused; }
        .novora-partner-logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          opacity: 0.9;
          transition: opacity 0.25s ease;
        }
        .novora-partner-logo:hover { opacity: 1; }
        .novora-partner-logo img { display: block; width: auto; }
      `}</style>
      <p className="novora-partner-eyebrow">Select Partners</p>
      <div className="novora-partner-viewport">
        <div className="novora-partner-track">
          {loop.map((p, i) => (
            <div key={i} className="novora-partner-logo">
              <img src={p.src} alt={p.name} style={{ height: p.h + "px" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
