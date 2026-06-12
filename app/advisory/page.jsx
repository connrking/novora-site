"use client";
import { useState, useEffect, useRef } from "react";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

function HeroWords({ text }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 200); }, []);
  const lines = text.split("\n");
  let wordIndex = 0;
  return (
    <h1 className="page-h1" style={{
      fontFamily: F.h, fontSize: 52, fontWeight: 300,
      color: C.white, letterSpacing: "-0.02em", lineHeight: 1.15,
      maxWidth: 640, margin: 0,
    }}>
      {lines.map((line, li) => (
        <span key={li}>
          {line.split(" ").map((word, wi) => {
            const idx = wordIndex++;
            return (
              <span key={wi} style={{
                display: "inline-block",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(35px)",
                transition: `opacity 0.6s ease ${idx * 0.07}s, transform 0.6s ease ${idx * 0.07}s`,
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

function ServiceSection({ num, title, desc, capabilities, cream = false, disclaimer }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className={`advisory-section section-pad ${cream ? "adv-cream" : ""}`} style={{
      padding: "80px 80px",
      borderTop: `0.5px solid ${C.border}`,
      background: cream ? C.cream : C.bg,
      cursor: "default",
    }}>
      <div className="advisory-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 }}>
        <div style={{ fontFamily: F.h }}>
          <div className="advisory-num" style={{
            fontSize: 56, fontWeight: 200, color: cream ? "rgba(0,0,0,0.35)" : C.gray400, letterSpacing: "-0.02em",
            opacity: show ? 1 : 0,
            transform: show ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease, color 0.3s",
          }}>{num}</div>
          <div className="advisory-bar" style={{
            width: 32, height: 1, background: cream ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.15)", marginTop: 16,
            transition: "width 0.3s ease",
          }} />
        </div>
        <div style={{ fontFamily: F.h, maxWidth: 640 }}>
          <h2 className="advisory-title page-h2" style={{
            fontSize: 28, fontWeight: 400, color: cream ? C.creamText : C.white, margin: "0 0 20px", letterSpacing: "-0.01em",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s, color 0.3s",
          }}>{title}</h2>
          <p style={{
            fontSize: 15, lineHeight: 1.8, color: cream ? C.creamSub : C.gray200, margin: "0 0 32px", fontWeight: 400,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}>{desc}</p>
          <div style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: cream ? C.creamSub : C.gray400, marginBottom: 16, textTransform: "uppercase" }}>Capabilities</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
              {capabilities.map((cap, i) => (
                <span key={i} style={{
                  fontSize: 13, color: cream ? C.creamSub : C.gray300, fontWeight: 400, lineHeight: 2,
                }}>{cap}</span>
              ))}
            </div>
          </div>
          {disclaimer && (
            <p style={{
              fontSize: 12, lineHeight: 1.7, color: cream ? "rgba(0,0,0,0.45)" : C.gray400, margin: "28px 0 0",
              fontStyle: "italic", maxWidth: 600,
              opacity: show ? 1 : 0,
              transform: show ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.45s, transform 0.7s ease 0.45s",
            }}>{disclaimer}</p>
          )}
        </div>
      </div>
    </section>
  );
}

function BuiltFromBuySide() {
  return (
    <section className="section-pad adv-cream" style={{
      padding: "96px 80px", borderTop: `0.5px solid ${C.border}`, background: C.cream, textAlign: "center",
    }}>
      <FadeIn>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "rgba(0,0,0,0.4)", marginBottom: 20, fontFamily: F.h, textTransform: "uppercase" }}>Why Novora</div>
          <h2 className="section-h2" style={{ fontFamily: F.h, fontSize: 32, fontWeight: 300, color: C.creamText, letterSpacing: "-0.02em", margin: "0 0 28px" }}>Built from the buy side.</h2>
          <p style={{ fontFamily: F.h, fontSize: 16, lineHeight: 1.8, color: "#444444", fontWeight: 400, margin: 0 }}>
            Before founding Novora, Connor King spent nine years building and investing across crypto. He built and ran the first liquid crypto investment strategy at Chamath Palihapitiya&rsquo;s Social Capital, led business development and investor relations at asset manager Arca, personally raising $35M+, was the first growth hire at MoonPay, and led GTM and BD at data protocol Irys. That combination gives Novora a rare lens: buy-side investor, institutional capital raiser, and crypto operator. We understand how allocators evaluate crypto assets because we have sat on both sides of the table.
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

export default function AdvisoryPage() {
  return (
    <div>
      <style>{`
        .adv-cream {
          position: relative;
          overflow: hidden;
        }
        .adv-cream::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle at 2px 2px, rgba(0,0,0,0.11) 1px, transparent 1px);
          background-size: 24px 24px;
          -webkit-mask-image: radial-gradient(ellipse 75% 70% at center, #000 35%, transparent 95%);
          mask-image: radial-gradient(ellipse 75% 70% at center, #000 35%, transparent 95%);
          pointer-events: none;
          z-index: 0;
        }
        .adv-cream > * {
          position: relative;
          z-index: 1;
        }
        .advisory-section { transition: background 0.3s; }
        .advisory-section:hover:not(.adv-cream) { background: rgba(255,255,255,0.02) !important; }
        .advisory-section.adv-cream:hover { background: #F9F8F5 !important; }
        .advisory-section:hover:not(.adv-cream) .advisory-num { color: rgba(255,255,255,0.5) !important; }
        .advisory-section.adv-cream:hover .advisory-num { color: rgba(0,0,0,0.5) !important; }
        .advisory-section:hover:not(.adv-cream) .advisory-title { color: #fff !important; }
        .advisory-section.adv-cream:hover .advisory-title { color: #0A0A0A !important; }
        .advisory-section:hover .advisory-bar { width: 60px !important; }
      `}</style>

      {/* Hero */}
      <section className="section-pad hero-v-pad" style={{ padding: "120px 80px 80px", background: C.bg, position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "0%", right: "10%", width: "40%", height: "60%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
          }}>Capital Markets &amp; IR Advisory</div>
        </FadeIn>
        <HeroWords text={"Institutional credibility,\nbuilt for crypto."} />
        <FadeIn delay={0.5}>
          <p className="hero-sub" style={{
            fontFamily: F.h, fontSize: 17, color: C.gray200,
            fontWeight: 400, lineHeight: 1.65, maxWidth: 620, marginTop: 24,
          }}>
            Novora measures how institutional capital sees your protocol, fixes the gaps in your investor-relations and capital-markets infrastructure, and executes alongside your team, with a buy-side lens no other advisor can offer.
          </p>
        </FadeIn>
      </section>

      {/* Service Lines */}
      <ServiceSection
        cream
        num="I"
        title={"The Novora IR Score™"}
        desc="Every engagement starts with a measurement. The Novora IR Score is a proprietary diagnostic that evaluates how institutional capital sees your protocol across five pillars: transparency & reporting, tokenholder communications, data accessibility, narrative & positioning, and value accrual. It benchmarks you against the scored universe and turns the gaps into a prioritized roadmap. It is the clearest picture a team can get of its institutional readiness, before a single investor conversation."
        capabilities={[
          "Novora IR Score diagnostic",
          "Full IR Analysis & benchmarking",
          "Five-pillar scoring framework",
          "Competitive benchmarking vs. the scored universe",
          "Prioritized IR roadmap",
          "30/60/90-day action plan",
        ]}
      />
      <ServiceSection
        num="II"
        title="Investor Relations & Capital Markets Positioning"
        desc="Novora builds the credibility and communication infrastructure institutional capital expects. It is the layer most protocols never build. We translate product, traction, and token design into an institutional-grade narrative, then stand up the reporting, materials, and cadences that keep allocators informed long after the first meeting."
        capabilities={[
          "Narrative development & positioning",
          "Investor materials & data rooms",
          "Reporting cadences & tokenholder letters",
          "Quarterly & annual tokenholder reports",
          "Data dashboards & analytics",
          "Tokenomics & value-accrual review",
        ]}
      />
      <ServiceSection
        cream
        num="III"
        title="Institutional GTM & Roadshow Strategy"
        desc="When a protocol is ready to engage the market, Novora designs and supports a structured institutional engagement process: mapping the right investor universe, preparing founders and materials, sequencing outreach, and converting market feedback into strategy. We draw on ongoing dialogue with a network of 200+ institutional funds, trading firms, and allocators to sharpen positioning and benchmark sentiment."
        capabilities={[
          "Investor universe mapping",
          "Roadshow preparation & sequencing",
          "Founder & team meeting prep",
          "Market feedback capture & synthesis",
          "Market intelligence & sentiment",
          "90-day GTM roadmap",
        ]}
        disclaimer="Novora does not act as a broker-dealer, placement agent, or finder, and does not accept investment commitments on behalf of clients. Our work is strategic advisory and investor-readiness execution."
      />
      <ServiceSection
        num="IV"
        title="Token Capital Markets Advisory"
        desc="Novora advises crypto protocols on the full spectrum of token capital markets strategy, built on independent counsel and deep familiarity with how institutional allocators evaluate liquid crypto assets. For pre-TGE teams we advise on launch and structure; for post-TGE protocols, on token design, special situations, and onchain strategy."
        capabilities={[
          "Tokenomics design & optimization",
          "TGE planning & go-to-market",
          "Exchange listing strategy",
          "Liquidity & market-structure strategy",
          "Market maker & custodian evaluation",
          "Token design & special situations",
        ]}
      />

      {/* Built from the buy side */}
      <BuiltFromBuySide />

      {/* Intake Form */}
      <section className="section-pad section-v-pad" style={{ padding: "100px 80px 120px", background: C.bg, textAlign: "center" }}>
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
          }}>Get Started</div>
          <h2 className="section-h2" style={{
            fontFamily: F.h, fontSize: 32, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", margin: "0 0 16px",
          }}>Start with your IR Score.</h2>
          <p style={{
            fontFamily: F.h, fontSize: 15, color: C.gray300, lineHeight: 1.65,
            maxWidth: 520, margin: "0 auto 48px",
          }}>Tell us where your protocol stands today. We&rsquo;ll review fit across investor readiness, positioning, and institutional GTM.</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{ maxWidth: 720, margin: "0 auto", borderRadius: 4, overflow: "hidden" }}>
            <iframe
              src="https://tally.so/embed/ZjJP50?alignLeft=1&hideTitle=1"
              style={{
                width: "100%", height: 700, border: "none",
                borderRadius: 4,
              }}
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
