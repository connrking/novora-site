"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div style={{ padding: "120px 80px", background: C.bg }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        <FadeIn>
          <div style={{ fontFamily: F.h }}>
            <div style={{
              fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
              marginBottom: 16, textTransform: "uppercase",
            }}>Contact</div>
            <h1 style={{
              fontSize: 48, fontWeight: 300, color: C.white,
              letterSpacing: "-0.02em", lineHeight: 1.15, margin: "0 0 24px",
            }}>Let&apos;s talk.</h1>
            <p style={{
              fontSize: 16, lineHeight: 1.7, color: C.gray300, fontWeight: 300,
              margin: "0 0 48px",
            }}>
              Whether you&apos;re a protocol exploring advisory, or a fund looking for deal flow — we&apos;d like to hear from you.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                ["Email", "contact@novora.co"],
                ["Schedule", "calendly.com/connor_king"],
                ["Location", "New York City"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontSize: 11, letterSpacing: "0.1em", color: C.gray500, marginBottom: 4, textTransform: "uppercase" }}>{label}</div>
                  <div style={{ fontSize: 16, color: C.white, fontWeight: 300 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div style={{
            fontFamily: F.h, padding: "48px 40px",
            border: `0.5px solid ${C.border}`, borderRadius: 4,
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray500, marginBottom: 32, textTransform: "uppercase" }}>For Protocols</div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: C.gray300, fontWeight: 300, marginBottom: 32 }}>
              Every engagement starts with a conversation. We&apos;ll discuss your protocol&apos;s positioning, capital markets needs, and whether there&apos;s a fit for advisory.
            </p>
            <a href="https://calendly.com/connor_king" style={{
              fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 500,
              color: C.bg, background: C.white, padding: "14px 28px",
              textDecoration: "none", borderRadius: 2, display: "inline-block",
            }}>SCHEDULE A CALL</a>

            <div style={{ borderTop: `0.5px solid ${C.border}`, marginTop: 40, paddingTop: 40 }}>
              <div style={{ fontSize: 11, letterSpacing: "0.15em", color: C.gray500, marginBottom: 16, textTransform: "uppercase" }}>For Funds & Allocators</div>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: C.gray300, fontWeight: 300, marginBottom: 24 }}>
                Access differentiated deal flow, IR-scored protocols, and curated investment opportunities through the Novora Network.
              </p>
              <a href="mailto:contact@novora.co" style={{
                fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em", fontWeight: 400,
                color: C.gray200, padding: "12px 24px", textDecoration: "none",
                borderRadius: 2, border: `0.5px solid ${C.border}`, display: "inline-block",
              }}>JOIN THE NETWORK</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
