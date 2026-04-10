"use client";
import { C, F } from "@/components/tokens";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <div>
      {/* Hero + Team side by side */}
      <section className="section-pad hero-v-pad" style={{ padding: "120px 80px 100px", background: C.bg }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 80, alignItems: "start" }}>
          {/* Left: About thesis */}
          <FadeIn>
            <div style={{ fontFamily: F.h }}>
              <div style={{
                fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
                marginBottom: 16, textTransform: "uppercase",
              }}>About Novora</div>
              <h1 className="page-h1" style={{
                fontSize: 28, fontWeight: 400, color: C.white,
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
                <a href="https://www.linkedin.com/in/connrking/" style={{ fontSize: 12, color: C.gray300, textDecoration: "none", borderBottom: `0.5px solid ${C.gray500}`, paddingBottom: 2 }}>LinkedIn</a>
              </div>
              <p style={{
                fontSize: 14, lineHeight: 1.75, color: C.gray200, fontWeight: 400, margin: 0,
                maxWidth: 440,
              }}>
                Prior to founding Novora, Connor spent 9 years actively building and investing in crypto. He was the first growth hire at MoonPay, led BD and IR efforts at Arca raising $35M+ personally, built and ran the first liquid crypto investment strategy for Chamath at Social Capital, and led GTM at data protocol Irys.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Novora Difference */}
      <section className="section-pad section-v-pad" style={{
        padding: "120px 80px", borderTop: `0.5px solid ${C.border}`, background: C.bg,
      }}>
        <div style={{ maxWidth: 680, fontFamily: F.h }}>
          <FadeIn>
            <div style={{
              fontSize: 11, letterSpacing: "0.2em", color: C.gray400,
              marginBottom: 24, textTransform: "uppercase",
            }}>The Novora Difference</div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="section-h2" style={{
              fontSize: 24, fontWeight: 400,
              color: C.white, letterSpacing: "-0.015em", lineHeight: 1.35, margin: "0 0 48px",
            }}>
              Most advisory firms in crypto come from one world. We come from three.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p style={{
              fontSize: 16, lineHeight: 1.8, color: C.gray200, fontWeight: 400, margin: "0 0 28px",
            }}>
              Before Novora, Connor built and ran a liquid crypto fund at Social Capital for Chamath Palihapitiya. He sat in the seat that most advisory clients are trying to reach: the allocator reviewing pitch decks, sizing positions, and deciding which tokens deserved institutional capital.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p style={{
              fontSize: 16, lineHeight: 1.8, color: C.gray200, fontWeight: 400, margin: "0 0 28px",
            }}>
              Then he moved to the other side. At Arca, he led business development and investor relations, raising over $35M personally. He learned what it takes to build trust with allocators, structure a narrative that survives diligence, and communicate with discipline in volatile markets.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p style={{
              fontSize: 16, lineHeight: 1.8, color: C.gray200, fontWeight: 400, margin: "0 0 28px",
            }}>
              Then he built. As the first growth hire at MoonPay and head of GTM at Irys, he operated inside the companies that advisory firms typically advise from the outside.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p style={{
              fontSize: 16, lineHeight: 1.8, color: C.gray200, fontWeight: 400, margin: "0 0 48px",
            }}>
              That combination does not exist anywhere else in crypto advisory. Novora is not guessing at what investors want to see. We have been the investor. We have been the operator. And we have raised the capital. That is the lens we bring to every engagement.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div style={{
              borderTop: `0.5px solid ${C.border}`, paddingTop: 40,
            }}>
              <p className="thesis-quote" style={{
                fontSize: 20, lineHeight: 1.5, color: C.white, fontWeight: 400,
                letterSpacing: "-0.01em", margin: 0,
              }}>
                Independent. Conflict-free. Senior-led. Built on the conviction that crypto protocols deserve the same caliber of capital markets infrastructure as the best public companies in the world.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
