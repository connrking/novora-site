"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        minHeight: "92vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px",
        background: `linear-gradient(180deg, ${C.bg} 0%, #0D0D0D 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, right: 0, width: "50%", height: "100%",
          background: "radial-gradient(ellipse at 80% 40%, rgba(255,255,255,0.015) 0%, transparent 70%)",
        }} />
        <FadeIn>
          <h1 style={{
            fontFamily: F.h, fontSize: 64, fontWeight: 300, lineHeight: 1.1,
            color: C.white, maxWidth: 780, letterSpacing: "-0.02em",
            margin: 0,
          }}>
            Independent capital<br />markets advisory<br />for crypto.
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p style={{
            fontFamily: F.h, fontSize: 18, lineHeight: 1.65, color: C.gray300,
            maxWidth: 520, marginTop: 32, fontWeight: 300,
          }}>
            We combine capital markets advisory, investor relations infrastructure, and principal investing to serve as the connective tissue between early-stage protocols and institutional capital.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
            <a href="mailto:contact@novora.co" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
              color: C.bg, background: C.white, padding: "14px 32px",
              textDecoration: "none", borderRadius: 2,
            }}>CONTACT US</a>
            <a href="https://ir.novora.co" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 400,
              color: C.gray200, background: "transparent",
              padding: "14px 32px", textDecoration: "none", borderRadius: 2,
              border: `0.5px solid ${C.border}`,
            }}>VIEW IR SCORES →</a>
          </div>
        </FadeIn>
        <div style={{
          position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.2))" }} />
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: "120px 80px", background: C.bg }}>
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
          }}>What We Do</div>
          <div style={{ width: 40, height: 0.5, background: C.gray500, marginBottom: 60 }} />
        </FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          {[
            {
              num: "01",
              title: "Capital Markets Advisory",
              desc: "End-to-end support to design, launch, and sustain efficient token markets — from tokenomics architecture and exchange strategy through roadshow execution, fundraising, and capital introductions to institutional allocators.",
            },
            {
              num: "02",
              title: "Investor Relations",
              desc: "Building long-term credibility and tokenholder alignment through transparent, professional communication. The Novora IR Score diagnoses where protocols fall short — and what to fix.",
            },
            {
              num: "03",
              title: "Principal Investing",
              desc: "We invest alongside the teams we advise — ensuring long-term alignment between Novora and our partners.",
            },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{
                padding: "48px 40px",
                borderTop: `0.5px solid ${C.border}`,
                borderRight: i < 2 ? `0.5px solid ${C.border}` : "none",
                fontFamily: F.h, minHeight: 240,
                transition: "background 0.3s", cursor: "default",
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.bgHover}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <div style={{ fontSize: 12, color: C.gray500, letterSpacing: "0.1em", marginBottom: 20 }}>{s.num}</div>
                <h3 style={{ fontSize: 22, fontWeight: 400, color: C.white, margin: "0 0 16px", letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: C.gray300, margin: 0, fontWeight: 300 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Partners strip */}
      <section style={{
        padding: "80px 80px",
        borderTop: `0.5px solid ${C.border}`,
        background: C.bg,
      }}>
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 48, fontFamily: F.h, textTransform: "uppercase",
            textAlign: "center",
          }}>Select Partners</div>
          <div style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            gap: 56, flexWrap: "wrap",
          }}>
            {["Artemis", "MetaDAO", "deBridge", "Bullpen", "Katana", "Chakra"].map(name => (
              <span key={name} style={{
                fontFamily: F.h, fontSize: 17, fontWeight: 300,
                color: C.gray300, letterSpacing: "0.01em",
                transition: "color 0.2s", cursor: "default",
              }}>{name}</span>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* IR Score Feature */}
      <section style={{ padding: "120px 80px", background: C.cream }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn>
            <div style={{ fontFamily: F.h }}>
              <div style={{
                fontSize: 11, letterSpacing: "0.2em", color: C.creamSub,
                marginBottom: 16, textTransform: "uppercase", opacity: 0.6,
              }}>Featured Product</div>
              <h2 style={{
                fontSize: 42, fontWeight: 300, color: C.creamText,
                letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 24px",
              }}>Novora IR Score</h2>
              <p style={{
                fontSize: 16, lineHeight: 1.7, color: C.creamSub,
                fontWeight: 300, margin: "0 0 32px",
              }}>
                The independent standard for crypto investor relations. Five pillars, 100 points. Protocols are scored, benchmarked, and given a concrete roadmap to institutional-grade IR.
              </p>
              <a href="https://ir.novora.co" style={{
                fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em",
                fontWeight: 500, color: C.creamText,
                padding: "14px 28px", textDecoration: "none", borderRadius: 2,
                border: "1px solid rgba(0,0,0,0.15)", display: "inline-block",
              }}>EXPLORE IR SCORES →</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{
              background: C.bg, borderRadius: 4, padding: "32px 28px", fontFamily: F.h,
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray400, marginBottom: 24, textTransform: "uppercase" }}>
                Leaderboard · Q1 2026
              </div>
              {[
                { name: "Meteora", score: 95, chain: "MET" },
                { name: "Aave", score: 72, chain: "AAVE" },
                { name: "Hyperliquid", score: 65, chain: "HYPE" },
                { name: "MetaDAO", score: 63, chain: "META" },
                { name: "Jupiter", score: 60, chain: "JUP" },
              ].map((p, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "12px 0",
                  borderBottom: i < 4 ? `0.5px solid ${C.border}` : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 12, color: C.gray500, width: 20, textAlign: "right" }}>{i + 1}</span>
                    <span style={{ fontSize: 14, color: C.white, fontWeight: 400 }}>{p.name}</span>
                    <span style={{
                      fontSize: 10, color: C.gray400, letterSpacing: "0.05em",
                      background: C.gray700, padding: "2px 6px", borderRadius: 2,
                    }}>{p.chain}</span>
                  </div>
                  <div style={{
                    fontSize: 16, fontWeight: 500,
                    color: p.score >= 80 ? C.white : C.gray200,
                  }}>{p.score}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Thesis */}
      <section style={{ padding: "120px 80px", background: C.bg }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{
              fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
              marginBottom: 40, fontFamily: F.h, textTransform: "uppercase",
            }}>Our Thesis</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote style={{
              fontFamily: F.h, fontSize: 28, fontWeight: 300, lineHeight: 1.5,
              color: C.gray100, margin: 0, letterSpacing: "-0.01em",
            }}>
              &ldquo;Crypto protocols generate billions in revenue. Almost none of them talk to their investors.&rdquo;
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{
              fontFamily: F.h, fontSize: 15, lineHeight: 1.7, color: C.gray400,
              marginTop: 32, fontWeight: 300,
            }}>
              The gap between fundamentals and market perception is the opportunity. Novora diagnoses it, fixes it, and invests alongside the teams that take it seriously.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: "100px 80px",
        borderTop: `0.5px solid ${C.border}`,
        background: C.bg, textAlign: "center",
      }}>
        <FadeIn>
          <h2 style={{
            fontFamily: F.h, fontSize: 36, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", margin: "0 0 16px",
          }}>Ready to work together?</h2>
          <p style={{
            fontFamily: F.h, fontSize: 15, color: C.gray300,
            fontWeight: 300, marginBottom: 40,
          }}>We partner with protocols serious about institutional capital markets.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="mailto:contact@novora.co" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
              color: C.bg, background: C.white, padding: "14px 32px",
              textDecoration: "none", borderRadius: 2,
            }}>CONTACT US</a>
            <a href="https://calendly.com/connor_king" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 400,
              color: C.gray200, padding: "14px 32px", textDecoration: "none",
              borderRadius: 2, border: `0.5px solid ${C.border}`,
            }}>SCHEDULE A CALL</a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
