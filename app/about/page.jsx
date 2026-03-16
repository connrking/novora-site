"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: "120px 80px 80px", background: C.bg }}>
        <FadeIn>
          <div style={{ maxWidth: 640, fontFamily: F.h }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
              marginBottom: 16, textTransform: "uppercase",
            }}>About Novora</div>
            <h1 style={{
              fontSize: 48, fontWeight: 300, color: C.white,
              letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 24px",
            }}>
              Built on the thesis that crypto deserves better.
            </h1>
            <p style={{
              fontSize: 16, lineHeight: 1.7, color: C.gray200, fontWeight: 300, margin: 0,
            }}>
              Crypto protocols systematically underinvest in their capital markets infrastructure. The gap between what exists and what should exist is the opportunity Novora was built to address.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Team */}
      <section style={{
        padding: "80px 80px", background: C.bg,
        borderTop: `0.5px solid ${C.border}`,
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "320px 1fr", gap: 60, alignItems: "start" }}>
          <FadeIn>
            <div>
              <img
                src="/connor-king.jpg"
                alt="Connor King"
                style={{
                  width: "100%", borderRadius: 4, display: "block",
                }}
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div style={{ fontFamily: F.h, paddingTop: 8 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray500, marginBottom: 20, textTransform: "uppercase" }}>Team</div>
              <h3 style={{ fontSize: 28, fontWeight: 400, color: C.white, margin: "0 0 4px", letterSpacing: "-0.01em" }}>Connor King</h3>
              <p style={{ fontSize: 14, color: C.gray400, margin: "0 0 24px" }}>Founder & CEO</p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: C.gray200, fontWeight: 300, margin: 0 }}>
                Connor is Founder & CEO of Novora. Prior to starting Novora, Connor spent 9 years actively building and investing in the industry. He was the first growth hire at MoonPay, led business development and investor relations efforts at asset management firm Arca raising $35M+ personally, built and ran the first liquid crypto investment strategy for Chamath at Social Capital, and led GTM and business development at data protocol Irys.
              </p>
              <div style={{ display: "flex", gap: 20, marginTop: 24 }}>
                <a href="https://x.com/connorking" style={{ fontSize: 13, color: C.gray300, textDecoration: "none", borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 2 }}>X</a>
                <a href="https://www.linkedin.com/in/connorking1/" style={{ fontSize: 13, color: C.gray300, textDecoration: "none", borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 2 }}>LinkedIn</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Novora */}
      <section style={{
        padding: "100px 80px", borderTop: `0.5px solid ${C.border}`, background: C.bg,
      }}>
        <FadeIn>
          <div style={{ maxWidth: 700 }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
              marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
            }}>Why Novora</div>
            <h2 style={{
              fontFamily: F.h, fontSize: 28, fontWeight: 300,
              color: C.white, letterSpacing: "-0.01em", lineHeight: 1.4, margin: "0 0 24px",
            }}>
              Crypto protocols systematically underinvest in IR and capital markets infrastructure. That creates a measurable gap between fundamentals and market perception.
            </h2>
            <p style={{
              fontFamily: F.h, fontSize: 15, lineHeight: 1.75, color: C.gray200, fontWeight: 300,
            }}>
              Novora diagnoses the gap, fixes it, and executes alongside the teams we believe in. As crypto-natives who&apos;ve been actively investing and building since 2017, we partner with exceptional companies across the entire lifecycle — from seed stage to liquid capital markets.
            </p>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
