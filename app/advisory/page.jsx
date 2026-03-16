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
    <h1 style={{
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

function ServiceSection({ num, title, subtitle, body, index }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShow(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={ref} className="advisory-section" style={{
      padding: "80px 80px",
      borderTop: `0.5px solid ${C.border}`,
      background: index % 2 === 1 ? C.surface : C.bg,
      cursor: "default",
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 }}>
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
        <div style={{ fontFamily: F.h }}>
          <h2 className="advisory-title" style={{
            fontSize: 28, fontWeight: 400, color: C.white, margin: "0 0 8px", letterSpacing: "-0.01em",
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s, color 0.3s",
          }}>{title}</h2>
          <p style={{
            fontSize: 15, color: C.gray100, margin: "0 0 20px", fontWeight: 400,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}>{subtitle}</p>
          <p style={{
            fontSize: 15, lineHeight: 1.75, color: C.gray200, margin: 0, fontWeight: 400,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s",
          }}>{body}</p>
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
      <section style={{ padding: "120px 80px 80px", background: C.bg, position: "relative", overflow: "hidden" }}>
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
          <p style={{
            fontFamily: F.h, fontSize: 17, color: C.gray200,
            fontWeight: 400, lineHeight: 1.65, maxWidth: 560, marginTop: 24,
          }}>
            We serve as the connective tissue between early-stage protocols and institutional capital, with a buy-side lens no other advisor can offer.
          </p>
        </FadeIn>
      </section>

      {[
        {
          num: "I",
          title: "Capital Markets Advisory",
          subtitle: "End-to-end support to design, launch, and sustain efficient token markets",
          body: "Novora guides crypto protocols through the full lifecycle of capital raising and token launch, from tokenomics architecture and exchange listing strategy through roadshow execution, investor identification, and capital introductions. We combine institutional fundraising experience with a deep understanding of crypto capital markets to position our partners with the right investors, valuation frameworks, and go-to-market strategies.",
        },
        {
          num: "II",
          title: "Investor Relations Infrastructure",
          subtitle: "Building long-term credibility and tokenholder alignment",
          body: "Most crypto protocols have no structured investor relations. The Novora IR Score identifies exactly where they fall short and what to fix. We build the full spectrum of IR infrastructure: public dashboards, regular reporting cycles, tokenholder communications, narrative development, and strategic content creation to ensure strong alignment between protocols and their stakeholders.",
        },
        {
          num: "III",
          title: "Principal Investing",
          subtitle: "Long-term alignment with the teams we believe in",
          body: "We invest alongside the teams we advise, ensuring long-term alignment between Novora and our partners. Our investment thesis is informed by the same buy-side framework we built managing institutional capital at Social Capital and Arca.",
        },
      ].map((s, i) => (
        <ServiceSection key={i} num={s.num} title={s.title} subtitle={s.subtitle} body={s.body} index={i} />
      ))}

      <section style={{ padding: "100px 80px", background: C.cream, textAlign: "center" }}>
        <FadeIn>
          <h2 style={{
            fontFamily: F.h, fontSize: 36, fontWeight: 300,
            color: C.creamText, letterSpacing: "-0.02em", margin: "0 0 16px",
          }}>Explore an engagement with Novora.</h2>
          <p style={{
            fontFamily: F.h, fontSize: 15, color: C.creamSub,
            fontWeight: 400, marginBottom: 40,
          }}>We work with a select number of protocols at any given time. Conversations are confidential and commitment-free.</p>
          <a href="https://calendly.com/connor_king" style={{
            fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
            color: C.cream, background: C.creamText, padding: "14px 32px",
            textDecoration: "none", borderRadius: 2,
          }}>SCHEDULE A CALL</a>
        </FadeIn>
      </section>
    </div>
  );
}
