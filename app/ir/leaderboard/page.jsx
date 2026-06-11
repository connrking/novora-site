"use client";
import { useState, useEffect } from "react";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

// Top 100 IR Score leaderboard.
const PROTOCOLS = [
  // Source of truth: "NIR Leaderboard" Google Sheet, snapshot 2026-06-11. Served live via /api/leaderboard; this array is the SSR/offline fallback.
  {
    rank: 1, name: "Jito", ticker: "JTO", score: 95, tier: "Institutional",
  },
  {
    rank: 2, name: "Meteora", ticker: "MET", score: 95, tier: "Institutional",
  },
  {
    rank: 3, name: "Raydium", ticker: "RAY", score: 88, tier: "Institutional",
  },
  {
    rank: 4, name: "Jupiter", ticker: "JUP", score: 83, tier: "Strong",
  },
  {
    rank: 5, name: "MetaDAO", ticker: "META", score: 83, tier: "Strong",
  },
  {
    rank: 6, name: "Pyth Network", ticker: "PYTH", score: 81, tier: "Strong",
  },
  {
    rank: 7, name: "Sky", ticker: "SKY", score: 79, tier: "Strong",
  },
  {
    rank: 8, name: "dYdX", ticker: "DYDX", score: 78, tier: "Strong",
  },
  {
    rank: 9, name: "Morpho", ticker: "MORPHO", score: 77, tier: "Strong",
  },
  {
    rank: 10, name: "deBridge", ticker: "DBR", score: 77, tier: "Strong",
  },
  {
    rank: 11, name: "Chainlink", ticker: "LINK", score: 74, tier: "Strong",
  },
  {
    rank: 12, name: "Near Protocol", ticker: "NEAR", score: 74, tier: "Strong",
  },
  {
    rank: 13, name: "Maple Finance", ticker: "SYRUP", score: 74, tier: "Strong",
  },
  {
    rank: 14, name: "Lido", ticker: "LDO", score: 72, tier: "Strong",
  },
  {
    rank: 15, name: "Arbitrum", ticker: "ARB", score: 68, tier: "Developing",
  },
  {
    rank: 16, name: "Ethena", ticker: "ENA", score: 67, tier: "Developing",
  },
  {
    rank: 17, name: "Algorand", ticker: "ALGO", score: 67, tier: "Developing",
  },
  {
    rank: 18, name: "Cardano", ticker: "ADA", score: 66, tier: "Developing",
  },
  {
    rank: 19, name: "EtherFi", ticker: "ETHFI", score: 66, tier: "Developing",
  },
  {
    rank: 20, name: "Aave", ticker: "AAVE", score: 65, tier: "Developing",
  },
  {
    rank: 21, name: "Spark", ticker: "SPK", score: 65, tier: "Developing",
  },
  {
    rank: 22, name: "PancakeSwap", ticker: "CAKE", score: 65, tier: "Developing",
  },
  {
    rank: 23, name: "Render", ticker: "RENDER", score: 63, tier: "Developing",
  },
  {
    rank: 24, name: "Stellar", ticker: "XLM", score: 62, tier: "Developing",
  },
  {
    rank: 25, name: "Hedera", ticker: "HBAR", score: 61, tier: "Developing",
  },
  {
    rank: 26, name: "Marinade", ticker: "MNDE", score: 61, tier: "Developing",
  },
  {
    rank: 27, name: "Solana", ticker: "SOL", score: 60, tier: "Developing",
  },
  {
    rank: 28, name: "Helium", ticker: "HNT", score: 60, tier: "Developing",
  },
  {
    rank: 29, name: "Uniswap", ticker: "UNI", score: 57, tier: "Developing",
  },
  {
    rank: 30, name: "Fluid", ticker: "FLUID", score: 57, tier: "Developing",
  },
  {
    rank: 31, name: "Stacks", ticker: "STX", score: 57, tier: "Developing",
  },
  {
    rank: 32, name: "Optimism", ticker: "OP", score: 57, tier: "Developing",
  },
  {
    rank: 33, name: "Livepeer", ticker: "LPT", score: 57, tier: "Developing",
  },
  {
    rank: 34, name: "Synthetix", ticker: "SNX", score: 56, tier: "Developing",
  },
  {
    rank: 35, name: "zkSync", ticker: "ZK", score: 56, tier: "Developing",
  },
  {
    rank: 36, name: "Gnosis", ticker: "GNO", score: 55, tier: "Developing",
  },
  {
    rank: 37, name: "Akash Network", ticker: "AKT", score: 55, tier: "Developing",
  },
  {
    rank: 38, name: "Orca", ticker: "ORCA", score: 55, tier: "Developing",
  },
  {
    rank: 39, name: "Mantle", ticker: "MNT", score: 53, tier: "Early-Stage",
  },
  {
    rank: 40, name: "ENS", ticker: "ENS", score: 53, tier: "Early-Stage",
  },
  {
    rank: 41, name: "Cosmos Hub", ticker: "ATOM", score: 53, tier: "Early-Stage",
  },
  {
    rank: 42, name: "Starknet", ticker: "STRK", score: 52, tier: "Early-Stage",
  },
  {
    rank: 43, name: "Tezos", ticker: "XTZ", score: 52, tier: "Early-Stage",
  },
  {
    rank: 44, name: "Euler Finance", ticker: "EUL", score: 51, tier: "Early-Stage",
  },
  {
    rank: 45, name: "Hyperliquid", ticker: "HYPE", score: 50, tier: "Early-Stage",
  },
  {
    rank: 46, name: "Pendle", ticker: "PENDLE", score: 50, tier: "Early-Stage",
  },
  {
    rank: 47, name: "GMX", ticker: "GMX", score: 50, tier: "Early-Stage",
  },
  {
    rank: 48, name: "Pump.fun", ticker: "PUMP", score: 49, tier: "Early-Stage",
  },
  {
    rank: 49, name: "Balancer", ticker: "BAL", score: 49, tier: "Early-Stage",
  },
  {
    rank: 50, name: "SushiSwap", ticker: "SUSHI", score: 49, tier: "Early-Stage",
  },
  {
    rank: 51, name: "Ronin", ticker: "RON", score: 49, tier: "Early-Stage",
  },
  {
    rank: 52, name: "Venus Protocol", ticker: "XVS", score: 48, tier: "Early-Stage",
  },
  {
    rank: 53, name: "Frax", ticker: "FRAX", score: 48, tier: "Early-Stage",
  },
  {
    rank: 54, name: "Rocket Pool", ticker: "RPL", score: 48, tier: "Early-Stage",
  },
  {
    rank: 55, name: "Benqi", ticker: "QI", score: 45, tier: "Early-Stage",
  },
  {
    rank: 56, name: "Tron", ticker: "TRX", score: 44, tier: "Early-Stage",
  },
  {
    rank: 57, name: "Avalanche", ticker: "AVAX", score: 44, tier: "Early-Stage",
  },
  {
    rank: 58, name: "Injective", ticker: "INJ", score: 44, tier: "Early-Stage",
  },
  {
    rank: 59, name: "Aerodrome", ticker: "AERO", score: 44, tier: "Early-Stage",
  },
  {
    rank: 60, name: "Curve Finance", ticker: "CRV", score: 44, tier: "Early-Stage",
  },
  {
    rank: 61, name: "Drift", ticker: "DRIFT", score: 44, tier: "Early-Stage",
  },
  {
    rank: 62, name: "Toncoin", ticker: "TON", score: 42, tier: "Early-Stage",
  },
  {
    rank: 63, name: "Sei", ticker: "SEI", score: 42, tier: "Early-Stage",
  },
  {
    rank: 64, name: "The Graph", ticker: "GRT", score: 42, tier: "Early-Stage",
  },
  {
    rank: 65, name: "1inch", ticker: "1INCH", score: 42, tier: "Early-Stage",
  },
  {
    rank: 66, name: "Ethereum", ticker: "ETH", score: 41, tier: "Early-Stage",
  },
  {
    rank: 67, name: "Sui", ticker: "SUI", score: 41, tier: "Early-Stage",
  },
  {
    rank: 68, name: "Aptos", ticker: "APT", score: 41, tier: "Early-Stage",
  },
  {
    rank: 69, name: "Polygon", ticker: "POL", score: 41, tier: "Early-Stage",
  },
  {
    rank: 70, name: "Celestia", ticker: "TIA", score: 41, tier: "Early-Stage",
  },
  {
    rank: 71, name: "Kamino", ticker: "KMNO", score: 41, tier: "Early-Stage",
  },
  {
    rank: 72, name: "Compound", ticker: "COMP", score: 41, tier: "Early-Stage",
  },
  {
    rank: 73, name: "Virtuals Protocol", ticker: "VIRTUAL", score: 41, tier: "Early-Stage",
  },
  {
    rank: 74, name: "Immutable", ticker: "IMX", score: 41, tier: "Early-Stage",
  },
  {
    rank: 75, name: "Across Protocol", ticker: "ACX", score: 41, tier: "Early-Stage",
  },
  {
    rank: 76, name: "Flow", ticker: "FLOW", score: 40, tier: "Early-Stage",
  },
  {
    rank: 77, name: "Polkadot", ticker: "DOT", score: 39, tier: "Early-Stage",
  },
  {
    rank: 78, name: "Filecoin", ticker: "FIL", score: 39, tier: "Early-Stage",
  },
  {
    rank: 79, name: "Convex Finance", ticker: "CVX", score: 39, tier: "Early-Stage",
  },
  {
    rank: 80, name: "XRP", ticker: "XRP", score: 38, tier: "Early-Stage",
  },
  {
    rank: 81, name: "Bittensor", ticker: "TAO", score: 38, tier: "Early-Stage",
  },
  {
    rank: 82, name: "Safe", ticker: "SAFE", score: 38, tier: "Early-Stage",
  },
  {
    rank: 83, name: "Manta Network", ticker: "MANTA", score: 38, tier: "Early-Stage",
  },
  {
    rank: 84, name: "Arweave", ticker: "AR", score: 37, tier: "Early-Stage",
  },
  {
    rank: 85, name: "EigenLayer", ticker: "EIGEN", score: 32, tier: "No IR",
  },
  {
    rank: 86, name: "Ondo Finance", ticker: "ONDO", score: 31, tier: "No IR",
  },
  {
    rank: 87, name: "Wormhole", ticker: "W", score: 31, tier: "No IR",
  },
  {
    rank: 88, name: "Litecoin", ticker: "LTC", score: 28, tier: "No IR",
  },
  {
    rank: 89, name: "Kaspa", ticker: "KAS", score: 28, tier: "No IR",
  },
  {
    rank: 90, name: "Theta Network", ticker: "THETA", score: 27, tier: "No IR",
  },
  {
    rank: 91, name: "Grass", ticker: "GRASS", score: 26, tier: "No IR",
  },
  {
    rank: 92, name: "Bonk", ticker: "BONK", score: 25, tier: "No IR",
  },
  {
    rank: 93, name: "Shiba Inu", ticker: "SHIB", score: 23, tier: "No IR",
  },
  {
    rank: 94, name: "Blur", ticker: "BLUR", score: 23, tier: "No IR",
  },
  {
    rank: 95, name: "Pepe", ticker: "PEPE", score: 22, tier: "No IR",
  },
  {
    rank: 96, name: "Fartcoin", ticker: "FARTCOIN", score: 22, tier: "No IR",
  },
  {
    rank: 97, name: "Jasmy", ticker: "JASMY", score: 22, tier: "No IR",
  },
  {
    rank: 98, name: "Dogecoin", ticker: "DOGE", score: 21, tier: "No IR",
  },
  {
    rank: 99, name: "Monero", ticker: "XMR", score: 21, tier: "No IR",
  },
  {
    rank: 100, name: "aixbt", ticker: "AIXBT", score: 20, tier: "No IR",
  },
];



export default function LeaderboardPage() {
  const [sortBy, setSortBy] = useState("rank");
  // Source of truth = the "NIR Leaderboard" Google Sheet, served via /api/leaderboard.
  // PROTOCOLS below is the SSR seed / offline fallback if the sheet fetch fails.
  const [protocols, setProtocols] = useState(PROTOCOLS);

  useEffect(() => {
    let alive = true;
    fetch("/api/leaderboard")
      .then((r) => r.json())
      .then((d) => { if (alive && d?.protocols?.length) setProtocols(d.protocols); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const sorted = [...protocols].sort((a, b) => {
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
            Crypto protocols ranked by investor relations quality. Every score is independently assessed and benchmarked against the scored universe.
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
