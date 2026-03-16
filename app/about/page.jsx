"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div>
      {/* Hero + Team side by side */}
      <section style={{ padding: "120px 80px 100px", background: C.bg }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 80, alignItems: "start" }}>
          {/* Left: About thesis */}
          <FadeIn>
            <div style={{ fontFamily: F.h }}>
              <div style={{
                fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
                marginBottom: 16, textTransform: "uppercase",
              }}>About Novora</div>
              <h1 style={{
                fontSize: 44, fontWeight: 300, color: C.white,
                letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 24px",
              }}>
                Built on the thesis that crypto deserves better.
              </h1>
              <p style={{
                fontSize: 16, lineHeight: 1.7, color: C.gray200, fontWeight: 400, margin: 0,
              }}>
                Crypto protocols systematically underinvest in their capital markets infrastructure. The gap between what exists and what should exist is the opportunity Novora was built to address.
              </p>
            </div>
          </FadeIn>

          {/* Right: Team */}
          <FadeIn delay={0.15}>
            <div style={{ fontFamily: F.h }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray500, marginBottom: 20, textTransform: "uppercase" }}>Team</div>
              <img
                src="/connor-king.jpg"
                alt="Connor King"
                style={{ width: "100%", maxWidth: 360, borderRadius: 4, display: "block", marginBottom: 24 }}
              />
              <h3 style={{ fontSize: 24, fontWeight: 400, color: C.white, margin: "0 0 4px", letterSpacing: "-0.01em" }}>Connor King</h3>
              <p style={{ fontSize: 13, color: C.gray400, margin: "0 0 16px" }}>Founder & CEO</p>
              <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                <a href="https://x.com/connorking" style={{ fontSize: 12, color: C.gray300, textDecoration: "none", borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 2 }}>X</a>
                <a href="https://www.linkedin.com/in/connorking1/" style={{ fontSize: 12, color: C.gray300, textDecoration: "none", borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 2 }}>LinkedIn</a>
              </div>
              <p style={{
                fontSize: 14, lineHeight: 1.75, color: C.gray200, fontWeight: 400, margin: 0,
                maxWidth: 440,
              }}>
                Prior to founding Novora, Connor spent 9 years actively building and investing in crypto. He was the first growth hire at MoonPay, led BD and IR at Arca raising $35M+ personally, built and ran the first liquid crypto investment strategy for Chamath at Social Capital, and led GTM at data protocol Irys.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Novora */}
      <section style={{
        padding: "100px 80px", borderTop: `0.5px solid ${C.border}`, background: C.bg,
      }}>
        <FadeIn>
          <div style={{ maxWidth: 640, fontFamily: F.h }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
              marginBottom: 16, textTransform: "uppercase",
            }}>Why Novora</div>
            <h2 style={{
              fontSize: 28, fontWeight: 300,
              color: C.white, letterSpacing: "-0.01em", lineHeight: 1.4, margin: "0 0 24px",
            }}>
              Crypto protocols systematically underinvest in IR and capital markets infrastructure. That creates a measurable gap between fundamentals and market perception.
            </h2>
            <p style={{
              fontSize: 15, lineHeight: 1.75, color: C.gray200, fontWeight: 400,
            }}>
              Novora diagnoses the gap, fixes it, and executes alongside the teams we believe in. As crypto-natives who have been actively investing and building since 2017, we partner with exceptional companies across the entire lifecycle, from seed stage to liquid capital markets.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
