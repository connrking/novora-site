"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function IRScorePage() {
  return (
    <div style={{ padding: "120px 80px", background: C.bg, textAlign: "center" }}>
      <FadeIn>
        <div style={{
          fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
          marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
        }}>Novora IR Score</div>
        <h1 style={{
          fontFamily: F.h, fontSize: 48, fontWeight: 300,
          color: C.white, letterSpacing: "-0.02em", margin: "0 0 24px",
        }}>The standard for crypto IR.</h1>
        <p style={{
          fontFamily: F.h, fontSize: 16, color: C.gray300, fontWeight: 300, maxWidth: 480, margin: "0 auto 48px",
        }}>
          Explore the full leaderboard, methodology, and protocol scores on our dedicated IR platform.
        </p>
        <a href="https://ir.novora.co" style={{
          fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
          color: C.bg, background: C.white, padding: "14px 32px",
          textDecoration: "none", borderRadius: 2,
        }}>VISIT IR.NOVORA.CO →</a>
      </FadeIn>
    </div>
  );
}
