"use client";
import { useState, useEffect, useRef } from "react";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

function Counter({ end, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const eased = 1 - Math.pow(1 - current / steps, 3);
      setCount(Math.round(eased * end));
      if (current >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [started, end, duration]);
  return <span ref={ref}>{count}</span>;
}

function PillarCard({ pillar, index, maxScore }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setShow(true), index * 120); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [index]);
  return (
    <div ref={ref} className="pillar-card" style={{
      padding: "32px 28px", fontFamily: F.h,
      borderTop: `0.5px solid ${C.border}`,
      borderRight: index < 4 ? `0.5px solid ${C.border}` : "none",
      minHeight: 200,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(24px)",
      transition: "opacity 0.7s ease, transform 0.7s ease, background 0.3s",
    }}>
      <div style={{ fontSize: 36, fontWeight: 200, color: C.gray500, marginBottom: 16 }}>
        <Counter end={maxScore} />
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 500, color: C.white, margin: "0 0 10px" }}>{pillar.name}</h3>
      <p style={{ fontSize: 13, lineHeight: 1.6, color: C.gray200, margin: 0, fontWeight: 400 }}>{pillar.desc}</p>
    </div>
  );
}

export default function IRScorePage() {
  const pillars = [
    { name: "Transparency & Reporting", desc: "Financial disclosures, token supply schedules, treasury visibility, and proactive unlock communication." },
    { name: "Token Holder Communication", desc: "Structured calls, dedicated IR channels, investor Q&A access, and regular reporting cadence." },
    { name: "Data Accessibility", desc: "Presence on institutional platforms like Artemis, Token Terminal, Dune, Nansen, and Blockworks Research." },
    { name: "Narrative & Positioning", desc: "Investment thesis clarity, competitive differentiation, and strategic content that makes a PM's job easier." },
    { name: "Value Accrual & Tokenomics", desc: "Fee switches, buybacks, staking yields, dilution management, and clear token utility." },
  ];

  return (
    <div>
      <style>{`
        .pillar-card:hover { background: rgba(255,255,255,0.03) !important; }
        .ir-row { transition: background 0.2s, padding-left 0.2s; border-radius: 4px; }
        .ir-row:hover { background: rgba(255,255,255,0.04); padding-left: 8px; }
        .ir-row:hover .ir-score { color: #fff !important; }
      `}</style>

      {/* Hero */}
      <section style={{ padding: "140px 80px 100px", background: C.bg, textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Subtle glow */}
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
          }}>Novora IR Score</div>
          <h1 style={{
            fontFamily: F.h, fontSize: 52, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", margin: "0 0 24px", lineHeight: 1.15,
          }}>The independent standard<br />for crypto IR.</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: F.h, fontSize: 17, color: C.gray200, fontWeight: 400,
            maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.65,
          }}>
            Five pillars. 100 points. A concrete diagnostic for how well crypto protocols communicate with their investors.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <a href="https://ir.novora.co" style={{
            fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
            color: C.bg, background: C.white, padding: "14px 32px",
            textDecoration: "none", borderRadius: 2, display: "inline-block",
          }}>VIEW FULL LEADERBOARD →</a>
        </FadeIn>
      </section>

      {/* 5 Pillars */}
      <section style={{ padding: "100px 80px", background: C.bg, borderTop: `0.5px solid ${C.border}` }}>
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
          }}>Methodology</div>
          <h2 style={{
            fontFamily: F.h, fontSize: 32, fontWeight: 300, color: C.white,
            letterSpacing: "-0.01em", margin: "0 0 60px",
          }}>Five pillars, each scored out of 20</h2>
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", gap: 0 }}>
          {pillars.map((p, i) => (
            <PillarCard key={i} pillar={p} index={i} maxScore={(i + 1) * 20} />
          ))}
        </div>
      </section>

      {/* Mini Leaderboard */}
      <section style={{ padding: "100px 80px", background: C.bg, borderTop: `0.5px solid ${C.border}` }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <FadeIn>
            <div style={{ fontFamily: F.h }}>
              <div style={{
                fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
                marginBottom: 16, textTransform: "uppercase",
              }}>Current Rankings</div>
              <h2 style={{
                fontSize: 32, fontWeight: 300, color: C.white,
                letterSpacing: "-0.01em", margin: "0 0 20px",
              }}>11 protocols scored and counting</h2>
              <p style={{
                fontSize: 15, lineHeight: 1.7, color: C.gray200, fontWeight: 400, margin: "0 0 32px",
              }}>
                Each protocol receives a detailed analysis across all five pillars, a comparative benchmark against the scored universe, and a 180-day roadmap to improve their score.
              </p>
              <a href="https://ir.novora.co" style={{
                fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
                color: C.white, padding: "12px 24px",
                textDecoration: "none", borderRadius: 2,
                border: `0.5px solid ${C.border}`, display: "inline-block",
              }}>EXPLORE SCORES →</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{
              background: C.bgCard, borderRadius: 4, padding: "28px 24px", fontFamily: F.h,
              border: `0.5px solid ${C.border}`,
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray400, marginBottom: 20, textTransform: "uppercase" }}>
                Top Scores · Q1 2026
              </div>
              {[
                { name: "Meteora", score: 95, ticker: "MET" },
                { name: "Maple Finance", score: 80, ticker: "SYRUP" },
                { name: "Aave", score: 72, ticker: "AAVE" },
                { name: "Morpho", score: 71, ticker: "MORPHO" },
                { name: "Jito", score: 67, ticker: "JTO" },
                { name: "Sky", score: 60, ticker: "SKY" },
              ].map((p, i) => (
                <div key={i} className="ir-row" style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "11px 0",
                  borderBottom: i < 5 ? `0.5px solid ${C.border}` : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 12, color: C.gray500, width: 20, textAlign: "right" }}>{i + 1}</span>
                    <span style={{ fontSize: 14, color: C.white, fontWeight: 400 }}>{p.name}</span>
                    <span style={{
                      fontSize: 10, color: C.gray400, letterSpacing: "0.05em",
                      background: C.gray700, padding: "2px 6px", borderRadius: 2,
                    }}>{p.ticker}</span>
                  </div>
                  <div className="ir-score" style={{
                    fontSize: 16, fontWeight: 500,
                    color: p.score >= 80 ? C.white : C.gray200,
                    transition: "color 0.2s",
                  }}>{p.score}</div>
                </div>
              ))}
              <div style={{ marginTop: 16, textAlign: "center" }}>
                <a href="https://ir.novora.co" style={{
                  fontSize: 12, color: C.gray300, textDecoration: "none",
                  borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 2,
                }}>View all 11 protocols →</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 80px", borderTop: `0.5px solid ${C.border}`,
        background: C.bg, textAlign: "center",
      }}>
        <FadeIn>
          <h2 style={{
            fontFamily: F.h, fontSize: 32, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", margin: "0 0 16px",
          }}>Want your protocol scored?</h2>
          <p style={{
            fontFamily: F.h, fontSize: 15, color: C.gray200,
            fontWeight: 400, marginBottom: 40,
          }}>Every score includes a detailed analysis and actionable roadmap.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="mailto:contact@novora.co" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
              color: C.bg, background: C.white, padding: "14px 32px",
              textDecoration: "none", borderRadius: 2,
            }}>GET SCORED</a>
            <a href="https://ir.novora.co" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 400,
              color: C.gray200, padding: "14px 32px", textDecoration: "none",
              borderRadius: 2, border: `0.5px solid ${C.border}`,
            }}>VIEW LEADERBOARD →</a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
