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

function ServiceSection({ num, title, desc, capabilities, index }) {
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
    <section ref={ref} className="advisory-section section-pad" style={{
      padding: "80px 80px",
      borderTop: `0.5px solid ${C.border}`,
      background: index % 2 === 1 ? C.surface : C.bg,
      cursor: "default",
    }}>
      <div className="advisory-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 }}>
        <div style={{ fontFamily: F.h }}>
          <div className="advisory-num" style={{
            fontSize: 56, fontWeight: 200, color: C.gray400, letterSpacing: "-0.02em",
            opacity: show ? 1 : 0,
            transform: show ? "translateX(0)" : "translateX(-30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease, color 0.3s",
          }}>{num}</div>
          <div className="advisory-bar" style={{
            width: 32, height: 1, background: "rgba(255,255,255,0.15)", marginTop: 16,
            transition: "width 0.3s ease",
          }} />
        </div>
        <div style={{ fontFamily: F.h, maxWidth: 640 }}>
          <h2 className="advisory-title page-h2" style={{
            fontSize: 28, fontWeight: 400, color: C.white, margin: "0 0 20px", letterSpacing: "-0.01em",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s, color 0.3s",
          }}>{title}</h2>
          <p style={{
            fontSize: 15, lineHeight: 1.8, color: C.gray200, margin: "0 0 32px", fontWeight: 400,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}>{desc}</p>
          <div style={{
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray400, marginBottom: 16, textTransform: "uppercase" }}>Capabilities</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
              {capabilities.map((cap, i) => (
                <span key={i} style={{
                  fontSize: 13, color: C.gray300, fontWeight: 400, lineHeight: 2,
                }}>{cap}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AdvisoryPage() {
  return (
    <div>
      <style>{`
        .advisory-section { transition: background 0.3s; }
        .advisory-section:hover { background: rgba(255,255,255,0.02) !important; }
        .advisory-section:hover .advisory-num { color: rgba(255,255,255,0.5) !important; }
        .advisory-section:hover .advisory-title { color: #fff !important; }
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
          }}>Advisory Services</div>
        </FadeIn>
        <HeroWords text={"Bespoke capital markets\nadvisory for crypto."} />
        <FadeIn delay={0.5}>
          <p className="hero-sub" style={{
            fontFamily: F.h, fontSize: 17, color: C.gray200,
            fontWeight: 400, lineHeight: 1.65, maxWidth: 560, marginTop: 24,
          }}>
            We serve as the connective tissue between protocols and the institutional investor base, with a buy-side lens no other advisor can offer.
          </p>
        </FadeIn>
      </section>

      {/* Service Lines */}
      <ServiceSection
        index={0}
        num="I"
        title="Token Capital Markets Advisory"
        desc="Novora advises crypto protocols on the full spectrum of token capital markets strategy. Our approach is built on independent counsel, a buy-side perspective most advisory firms cannot offer, and deep familiarity with how institutional allocators evaluate liquid crypto assets. For post-TGE protocols, we advise on token design, special situations, and onchain strategies."
        capabilities={[
          "Tokenomics design & optimization",
          "TGE planning & go-to-market",
          "Token design",
          "Liquidity strategy",
          "Secondary market structure",
        ]}
      />
      <ServiceSection
        index={1}
        num="II"
        title="Investor Relations & Capital Markets Positioning"
        desc="Novora advises protocols on how to build the credibility and communication infrastructure that institutional capital requires. Through the Novora IR Score, we provide a quantitative diagnostic across five pillars, benchmarking each protocol against the scored universe and identifying where to focus effort. We advise on roadshow preparation, investor materials, and how to structure conversations with allocators at every stage from pre-seed through liquid markets."
        capabilities={[
          "Novora IR Score diagnostic",
          "Full IR Analysis & benchmarking",
          "Reporting cadences & tokenholder communication",
          "Data dashboards & analytics",
          "Narrative development & positioning",
          "Roadshow preparation & materials",
          "Institutional platform coverage",
        ]}
      />
      <ServiceSection
        index={2}
        num="III"
        title="Institutional Access"
        desc="Novora Institutional Access is our program for connecting advisory clients with the institutional investor base. Through a curated network of 170+ funds, trading firms, and allocators, we facilitate relationships, market intelligence, and sustained engagement across events, private meetings, and ongoing dialogue. The program supports credibility-building and long-term positioning, not capital formation."
        capabilities={[
          "Curated 1:1 meetings and roundtables",
          "Flagship and private events programming",
          "Market intelligence and sentiment",
          "Institutional positioning guidance",
          "Sector and competitive analysis",
          "Year-round engagement across the Novora Network",
        ]}
      />

      {/* Intake Form */}
      <section className="section-pad section-v-pad" style={{ padding: "100px 80px 120px", background: C.bg, textAlign: "center" }}>
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
          }}>Get Started</div>
          <h2 className="section-h2" style={{
            fontFamily: F.h, fontSize: 32, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", margin: "0 0 48px",
          }}>Tell us about your protocol.</h2>
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
