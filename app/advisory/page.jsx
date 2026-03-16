"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function AdvisoryPage() {
  return (
    <div>
      <section style={{ padding: "120px 80px 80px", background: C.bg }}>
        <FadeIn>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
            marginBottom: 16, fontFamily: F.h, textTransform: "uppercase",
          }}>Advisory Services</div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 style={{
            fontFamily: F.h, fontSize: 52, fontWeight: 300,
            color: C.white, letterSpacing: "-0.02em", lineHeight: 1.15,
            maxWidth: 640, margin: 0,
          }}>
            Bespoke capital markets<br />advisory for crypto.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p style={{
            fontFamily: F.h, fontSize: 17, color: C.gray200,
            fontWeight: 400, lineHeight: 1.65, maxWidth: 560, marginTop: 24,
          }}>
            We serve as the connective tissue between early-stage protocols and institutional capital — with a buy-side lens no other advisor can offer.
          </p>
        </FadeIn>
      </section>

      {[
        {
          num: "I",
          title: "Capital Markets Advisory",
          subtitle: "End-to-end support to design, launch, and sustain efficient token markets",
          body: "Novora guides crypto protocols through the full lifecycle of capital raising and token launch — from tokenomics architecture and exchange listing strategy through roadshow execution, investor identification, and capital introductions. We combine institutional fundraising experience with a deep understanding of crypto capital markets to position our partners with the right investors, valuation frameworks, and go-to-market strategies.",
        },
        {
          num: "II",
          title: "Investor Relations Infrastructure",
          subtitle: "Building long-term credibility and tokenholder alignment",
          body: "Most crypto protocols have no structured investor relations. The Novora IR Score identifies exactly where they fall short — and what to fix. We build the full spectrum of IR infrastructure: public dashboards, regular reporting cycles, tokenholder communications, narrative development, and strategic content creation — ensuring strong alignment between protocols and their stakeholders.",
        },
        {
          num: "III",
          title: "Principal Investing",
          subtitle: "Long-term alignment with the teams we believe in",
          body: "We invest alongside the teams we advise — ensuring long-term alignment between Novora and our partners. Our investment thesis is informed by the same buy-side framework we built managing institutional capital at Social Capital and Arca.",
        },
      ].map((s, i) => (
        <section key={i} style={{
          padding: "80px 80px",
          borderTop: `0.5px solid ${C.border}`,
          background: i % 2 === 1 ? C.surface : C.bg,
        }}>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 60 }}>
            <FadeIn>
              <div style={{ fontFamily: F.h }}>
                <div style={{ fontSize: 48, fontWeight: 200, color: C.gray500, letterSpacing: "-0.02em" }}>{s.num}</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ fontFamily: F.h }}>
                <h2 style={{ fontSize: 28, fontWeight: 400, color: C.white, margin: "0 0 8px", letterSpacing: "-0.01em" }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: C.gray200, margin: "0 0 20px", fontWeight: 400, fontStyle: "italic" }}>{s.subtitle}</p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: C.gray200, margin: 0, fontWeight: 400 }}>{s.body}</p>
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      <section style={{ padding: "100px 80px", background: C.cream, textAlign: "center" }}>
        <FadeIn>
          <h2 style={{
            fontFamily: F.h, fontSize: 36, fontWeight: 300,
            color: C.creamText, letterSpacing: "-0.02em", margin: "0 0 16px",
          }}>Let&apos;s discuss your protocol.</h2>
          <p style={{
            fontFamily: F.h, fontSize: 15, color: C.creamSub,
            fontWeight: 300, marginBottom: 40,
          }}>Every engagement starts with a conversation. No pitch deck required.</p>
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
