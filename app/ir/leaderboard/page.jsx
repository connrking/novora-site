"use client";
import { useState } from "react";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

// Hardcoded leaderboard data — seeded with the 6 published scores.
// Add additional protocols as they're scored. Pillar order:
// [Transparency, Communication, Data, Narrative, Value Accrual]
const PROTOCOLS = [
  // Source: Notion IR Benchmark DB (200f3d6e-1197-4aeb-9d37-90e90e37ad59), May 2026
  // Pillar order: [Transparency, Communication, Data, Narrative, Value Accrual] — all on /20 scale
  // Pillars=null means score available but pillar breakdown not yet populated in Notion.
  {
    rank: 1, name: "Meteora", ticker: "MET", score: 95, tier: "A+",
    pillars: [18, 19, 20, 20, 18],
  },
  {
    rank: 2, name: "Maple Finance", ticker: "SYRUP", score: 80, tier: "A−",
    pillars: null,
  },
  {
    rank: 3, name: "Sky", ticker: "SKY", score: 72, tier: "B+",
    pillars: [16, 13, 16, 12, 15],
  },
  {
    rank: 4, name: "Aave", ticker: "AAVE", score: 72, tier: "B+",
    pillars: null,
  },
  {
    rank: 5, name: "Morpho", ticker: "MORPHO", score: 71, tier: "B+",
    pillars: [14, 15, 18, 16, 8],
  },
  {
    rank: 6, name: "MetaDAO", ticker: "META", score: 71, tier: "B+",
    pillars: [20, 12, 15, 15, 9],
  },
  {
    rank: 7, name: "Jito", ticker: "JTO", score: 67, tier: "B",
    pillars: null,
  },
  {
    rank: 8, name: "Hyperliquid", ticker: "HYPE", score: 65, tier: "B",
    pillars: [9, 7, 14, 18, 17],
  },
  {
    rank: 9, name: "Compound", ticker: "COMP", score: 45, tier: "C",
    pillars: [10, 7, 14, 6, 8],
  },
  {
    rank: 10, name: "dYdX", ticker: "DYDX", score: 31, tier: "D",
    pillars: [8, 6, 5, 8, 4],
  },
];

const PILLAR_LABELS = ["T&R", "THC", "DA", "N&P", "VA&T"];
const PILLAR_NAMES = [
  "Transparency & Reporting",
  "Token Holder Communication",
  "Data Accessibility",
  "Narrative & Positioning",
  "Value Accrual & Tokenomics",
];

function PillarBars({ pillars }) {
  if (!pillars) {
    return (
      <div style={{
        display: "flex", alignItems: "center", height: 24,
        fontSize: 13, color: "rgba(255,255,255,0.25)", fontFamily: "inherit",
      }}>—</div>
    );
  }
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 24 }}>
      {pillars.map((val, i) => {
        const pct = (val / 20) * 100;
        return (
          <div
            key={i}
            title={`${PILLAR_NAMES[i]}: ${val}/20`}
            style={{
              width: 14,
              height: "100%",
              background: "rgba(255,255,255,0.05)",
              borderRadius: 1,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: `${pct}%`,
              background: pct >= 90 ? C.white : pct >= 70 ? C.gray200 : C.gray400,
              transition: "height 0.6s ease",
            }} />
          </div>
        );
      })}
    </div>
  );
}

export default function LeaderboardPage() {
  const [sortBy, setSortBy] = useState("rank");

  const sorted = [...PROTOCOLS].sort((a, b) => {
    if (sortBy === "rank") return a.rank - b.rank;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "score") return b.score - a.score;
    return 0;
  });

  return (
    <div>
      <style>{`
        .lb-row { transition: background 0.2s; }
        .lb-row:hover { background: rgba(255,255,255,0.03); }
        .lb-row:hover .lb-score { color: #fff !important; }
        .sort-btn { transition: color 0.2s, border-color 0.2s; }
        .sort-btn:hover { color: #fff !important; }
        @media (max-width: 900px) {
          .lb-pillars-col { display: none !important; }
          .lb-tier-col { display: none !important; }
        }
        @media (max-width: 600px) {
          .lb-ticker-col { display: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="section-pad section-v-pad" style={{
        padding: "120px 80px 80px", background: C.bg,
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)",
          width: "60%", height: "50%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
          }}>Leaderboard · Q1 2026</div>
          <h1 style={{
            fontFamily: F.h, fontSize: 48, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", margin: "0 0 24px", lineHeight: 1.15,
          }}>The Novora IR Score Leaderboard</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: F.h, fontSize: 16, color: C.gray200, fontWeight: 400,
            maxWidth: 600, margin: "0 auto", lineHeight: 1.65,
          }}>
            Crypto protocols ranked across five pillars of investor relations. Every score is independently assessed and benchmarked against the scored universe.
          </p>
        </FadeIn>
      </section>

      {/* Sort controls */}
      <section className="section-pad" style={{
        padding: "0 80px 24px", background: C.bg,
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: F.h, borderBottom: `0.5px solid ${C.border}`, paddingBottom: 16,
        }}>
          <div style={{
            fontSize: 11, letterSpacing: "0.15em", color: C.gray400, textTransform: "uppercase",
          }}>{sorted.length} protocols</div>
          <div style={{ display: "flex", gap: 24, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span style={{ color: C.gray500 }}>Sort:</span>
            {[
              { key: "rank", label: "Rank" },
              { key: "score", label: "Score" },
              { key: "name", label: "A–Z" },
            ].map(s => (
              <button
                key={s.key}
                className="sort-btn"
                onClick={() => setSortBy(s.key)}
                style={{
                  background: "transparent", border: "none", padding: 0,
                  cursor: "pointer", fontFamily: F.h,
                  fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: sortBy === s.key ? C.white : C.gray400,
                  borderBottom: sortBy === s.key ? `1px solid ${C.white}` : "1px solid transparent",
                  paddingBottom: 2,
                }}
              >{s.label}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="section-pad" style={{ padding: "0 80px 80px", background: C.bg }}>
        {/* Header row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "60px 1fr 100px 80px 60px",
          gap: 16, alignItems: "center",
          padding: "12px 16px",
          fontFamily: F.h, fontSize: 10, letterSpacing: "0.15em",
          color: C.gray500, textTransform: "uppercase",
          borderBottom: `0.5px solid ${C.border}`,
        }}>
          <div>#</div>
          <div>Protocol</div>
          <div className="lb-ticker-col" style={{ textAlign: "center" }}>Ticker</div>
          <div style={{ textAlign: "right" }}>Score</div>
          <div className="lb-tier-col" style={{ textAlign: "center" }}>Tier</div>
        </div>

        {/* Rows */}
        {sorted.map((p, i) => (
          <FadeIn key={p.ticker} delay={i * 0.04}>
            <div className="lb-row" style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr 100px 80px 60px",
              gap: 16, alignItems: "center",
              padding: "20px 16px",
              fontFamily: F.h,
              borderBottom: `0.5px solid ${C.border}`,
            }}>
              <div style={{ fontSize: 13, color: C.gray500, fontWeight: 300 }}>
                {String(p.rank).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 16, color: C.white, fontWeight: 400 }}>
                {p.name}
              </div>
              <div className="lb-ticker-col" style={{ textAlign: "center" }}>
                <span style={{
                  fontSize: 10, color: C.gray400, letterSpacing: "0.05em",
                  background: C.gray700, padding: "3px 8px", borderRadius: 2,
                  fontWeight: 500,
                }}>{p.ticker}</span>
              </div>
              <div className="lb-score" style={{
                fontSize: 22, fontWeight: 300,
                color: p.score >= 80 ? C.white : C.gray200,
                textAlign: "right",
                transition: "color 0.2s",
              }}>{p.score}</div>
              <div className="lb-tier-col" style={{
                fontSize: 12, color: C.gray300, textAlign: "center",
                letterSpacing: "0.05em",
              }}>{p.tier}</div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* CTA */}
      <section className="section-pad section-v-pad" style={{
        padding: "80px 80px 100px", borderTop: `0.5px solid ${C.border}`,
        background: C.bg, textAlign: "center",
      }}>
        <FadeIn>
          <h2 style={{
            fontFamily: F.h, fontSize: 32, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", margin: "0 0 16px",
          }}>Want your protocol on the leaderboard?</h2>
          <p style={{
            fontFamily: F.h, fontSize: 15, color: C.gray200,
            fontWeight: 400, marginBottom: 40,
          }}>Every score includes a full analysis and a 180-day improvement roadmap.</p>
          <div className="cta-row" style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="mailto:contact@novora.co" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
              color: C.bg, background: C.white, padding: "14px 32px",
              textDecoration: "none", borderRadius: 2,
            }}>GET SCORED</a>
            <a href="/ir" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 400,
              color: C.gray200, padding: "14px 32px", textDecoration: "none",
              borderRadius: 2, border: `0.5px solid ${C.border}`,
            }}>← BACK TO IR SCORE</a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
