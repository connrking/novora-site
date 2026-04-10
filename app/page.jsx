"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";
import HeroText from "@/components/HeroText";
import Marquee from "@/components/Marquee";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <div>
      <style>{`
        .service-card:hover { background: #1A1A1A !important; }
        .partner-name { color: rgba(255,255,255,0.58); transition: color 0.2s; cursor: default; }
        .partner-name:hover { color: #fff; }
        .lb-row { transition: background 0.2s, padding-left 0.2s; border-radius: 4px; cursor: pointer; }
        .lb-row:hover { background: rgba(255,255,255,0.04); padding-left: 8px; }
        .lb-row:hover .lb-score { color: #fff !important; }
      `}</style>

      {/* Hero */}
      <section className="hero-section hero-pad" style={{
        minHeight: "92vh", display: "flex", flexDirection: "column",
        justifyContent: "center", padding: "0 80px",
        background: C.bg, position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: "80px 80px", maskImage: "radial-gradient(ellipse at 75% 45%, black 15%, transparent 65%)", WebkitMaskImage: "radial-gradient(ellipse at 75% 45%, black 15%, transparent 65%)" }} />
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "55%", height: "70%", background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 65%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "15%", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent 100%)" }} />

        <HeroText text={"Independent capital\nmarkets advisory\nfor crypto."} />

        <FadeIn delay={0.6}>
          <p className="hero-sub" style={{ fontFamily: F.h, fontSize: 18, lineHeight: 1.65, color: C.gray200, maxWidth: 520, marginTop: 32, fontWeight: 400 }}>
            We combine capital markets advisory, investor relations infrastructure, and principal investing to serve as the connective tissue between protocols and institutional capital.
          </p>
        </FadeIn>
        <FadeIn delay={0.8}>
          <div className="cta-row" style={{ display: "flex", gap: 16, marginTop: 48 }}>
            <a href="mailto:contact@novora.co" style={{ fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500, color: C.bg, background: C.white, padding: "14px 32px", textDecoration: "none", borderRadius: 2 }}>CONTACT US</a>
            <a href="https://ir.novora.co" style={{ fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 400, color: C.gray200, background: "transparent", padding: "14px 32px", textDecoration: "none", borderRadius: 2, border: `0.5px solid ${C.border}` }}>VIEW IR SCORES →</a>
          </div>
        </FadeIn>
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)" }}>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.2))" }} />
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad section-v-pad" style={{ padding: "120px 80px", background: C.bg }}>
        <FadeIn>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: C.gray400, marginBottom: 16, fontFamily: F.h, textTransform: "uppercase" }}>What We Do</div>
          <div style={{ width: 40, height: 0.5, background: C.gray500, marginBottom: 60 }} />
        </FadeIn>
        <div className="service-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
          <ServiceCard index={0} num="01" title="Capital Markets Advisory" desc="End-to-end support to design, launch, and sustain efficient token markets. From tokenomics architecture and exchange strategy through roadshow execution, fundraising, and capital introductions to institutional allocators." />
          <ServiceCard index={1} num="02" title="Investor Relations" desc="Building long-term credibility and tokenholder alignment through transparent, professional communication. The Novora IR Score diagnoses where protocols fall short and what to fix." />
          <ServiceCard index={2} num="03" title="Principal Investing" desc="We invest alongside the teams we advise, ensuring long-term alignment between Novora and our partners." />
        </div>
      </section>

      {/* Logo marquee */}
      <Marquee />

      {/* Partners */}
      <section className="section-pad" style={{ padding: "80px 80px", background: C.bg }}>
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 48, fontFamily: F.h, textTransform: "uppercase",
            textAlign: "center",
          }}>Select Partners</div>
          <div className="partners-row" style={{
            display: "flex", justifyContent: "center", alignItems: "center",
            gap: 56, flexWrap: "wrap",
          }}>
            {[
              { name: "Artemis", url: "https://artemis.xyz" },
              { name: "MetaDAO", url: "https://metadao.fi" },
              { name: "deBridge", url: "https://debridge.finance" },
              { name: "Bullpen", url: "https://bullpen.fi" },
              { name: "Katana", url: "https://katana.network" },
              { name: "Chakra", url: "https://chakra.dev" },
              { name: "Jolly", url: "https://jolly.com" },
            ].map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="partner-name" style={{
                fontFamily: F.h, fontSize: 17, fontWeight: 300,
                letterSpacing: "0.01em", textDecoration: "none",
              }}>{p.name}</a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* IR Score Feature */}
      <section className="section-pad section-v-pad" style={{ padding: "120px 80px", background: C.cream }}>
        <div className="two-col-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <FadeIn>
            <div style={{ fontFamily: F.h }}>
              <div style={{ fontSize: 11, letterSpacing: "0.2em", color: C.creamSub, marginBottom: 16, textTransform: "uppercase", opacity: 0.6 }}>Featured Product</div>
              <h2 className="section-h2" style={{ fontSize: 42, fontWeight: 300, color: C.creamText, letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 24px" }}>Novora IR Score</h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: C.creamSub, fontWeight: 400, margin: "0 0 32px" }}>
                The independent standard for crypto investor relations. Five pillars, 100 points. Protocols are scored, benchmarked, and given a concrete roadmap to institutional-grade IR.
              </p>
              <a href="https://ir.novora.co" style={{ fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500, color: C.creamText, padding: "14px 28px", textDecoration: "none", borderRadius: 2, border: "1px solid rgba(0,0,0,0.15)", display: "inline-block" }}>EXPLORE IR SCORES →</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ background: C.bg, borderRadius: 4, padding: "32px 28px", fontFamily: F.h }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray400, marginBottom: 24, textTransform: "uppercase" }}>Leaderboard · Q1 2026</div>
              {[
                { name: "Meteora", score: 95, ticker: "MET" },
                { name: "Maple Finance", score: 80, ticker: "SYRUP" },
                { name: "Aave", score: 72, ticker: "AAVE" },
                { name: "Jito", score: 67, ticker: "JTO" },
                { name: "MetaDAO", score: 53, ticker: "META" },
              ].map((p, i) => (
                <div key={i} className="lb-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 0", borderBottom: i < 4 ? `0.5px solid ${C.border}` : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 12, color: C.gray500, width: 20, textAlign: "right" }}>{i + 1}</span>
                    <span style={{ fontSize: 14, color: C.white, fontWeight: 400 }}>{p.name}</span>
                    <span style={{ fontSize: 10, color: C.gray400, letterSpacing: "0.05em", background: C.gray700, padding: "2px 6px", borderRadius: 2 }}>{p.ticker}</span>
                  </div>
                  <div className="lb-score" style={{ fontSize: 16, fontWeight: 500, color: p.score >= 80 ? C.white : C.gray200, transition: "color 0.2s" }}>{p.score}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Thesis */}
      <section className="section-pad section-v-pad" style={{ padding: "120px 80px", background: C.bg }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: C.gray400, marginBottom: 40, fontFamily: F.h, textTransform: "uppercase" }}>Core Thesis</div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <blockquote className="thesis-quote" style={{ fontFamily: F.h, fontSize: 20, fontWeight: 400, lineHeight: 1.55, color: C.white, margin: 0, letterSpacing: "-0.005em" }}>
              Crypto protocols systematically underinvest in IR and capital markets infrastructure. That creates a measurable gap between fundamentals and market perception. Novora diagnoses the gap and fixes it.
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p style={{ fontFamily: F.h, fontSize: 15, lineHeight: 1.7, color: C.gray400, marginTop: 32, fontWeight: 400 }}>
              Novora is the institutional capital markets infrastructure layer for crypto companies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad section-v-pad" style={{ padding: "100px 80px", borderTop: `0.5px solid ${C.border}`, background: C.bg, textAlign: "center" }}>
        <FadeIn>
          <h2 className="section-h2" style={{ fontFamily: F.h, fontSize: 24, fontWeight: 400, color: C.white, letterSpacing: "-0.01em", margin: "0 0 16px" }}>Ready to work together?</h2>
          <p style={{ fontFamily: F.h, fontSize: 15, color: C.gray200, fontWeight: 400, marginBottom: 40 }}>We partner with protocols serious about institutional capital markets.</p>
          <div className="cta-row" style={{ display: "flex", gap: 16, justifyContent: "center" }}>
            <a href="mailto:contact@novora.co" style={{ fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500, color: C.bg, background: C.white, padding: "14px 32px", textDecoration: "none", borderRadius: 2 }}>CONTACT US</a>
            <a href="https://calendly.com/connor_king" style={{ fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 400, color: C.gray200, padding: "14px 32px", textDecoration: "none", borderRadius: 2, border: `0.5px solid ${C.border}` }}>SCHEDULE A CALL</a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
