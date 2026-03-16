"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div>
      <section style={{ padding: "120px 80px 80px", background: C.bg }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <FadeIn>
            <div style={{ fontFamily: F.h, paddingTop: 20 }}>
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
                fontSize: 16, lineHeight: 1.7, color: C.gray200, fontWeight: 300,
                margin: "0 0 48px",
              }}>
                Crypto protocols systematically underinvest in their capital markets infrastructure. The gap between what exists and what should exist is the opportunity Novora was built to address.
              </p>

              <div style={{
                fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
                marginBottom: 16, textTransform: "uppercase",
              }}>Why Novora</div>
              <p style={{
                fontSize: 15, lineHeight: 1.75, color: C.gray200, fontWeight: 300,
              }}>
                Novora diagnoses the gap, fixes it, and executes alongside the teams we believe in. As crypto-natives who&apos;ve been actively investing and building since 2017, we partner with exceptional companies across the entire lifecycle — from seed stage to liquid capital markets.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div style={{ fontFamily: F.h }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray500, marginBottom: 20, textTransform: "uppercase" }}>Team</div>
              <img
                src="/connor-king.jpg"
                alt="Connor King"
                style={{
                  width: "100%", borderRadius: 4, marginBottom: 24,
                  display: "block",
                }}
              />
              <h3 style={{ fontSize: 22, fontWeight: 400, color: C.white, margin: "0 0 4px" }}>Connor King</h3>
              <p style={{ fontSize: 13, color: C.gray400, margin: "0 0 20px" }}>Founder & CEO</p>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.gray200, fontWeight: 300, margin: 0 }}>
                Connor is Founder & CEO of Novora. Prior to starting Novora, Connor spent 9 years actively building and investing in the industry. He was the first growth hire at MoonPay, led business development and investor relations efforts at asset management firm Arca raising $35M+ personally, built and ran the first liquid crypto investment strategy for Chamath at Social Capital, and led GTM and business development at data protocol Irys.
              </p>
              <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
                <a href="https://x.com/connorking" style={{ fontSize: 13, color: C.gray300, textDecoration: "none", borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 1 }}>X</a>
                <a href="https://www.linkedin.com/in/connorking1/" style={{ fontSize: 13, color: C.gray300, textDecoration: "none", borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 1 }}>LinkedIn</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
