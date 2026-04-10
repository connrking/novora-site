"use client";
import { useState, useEffect, useRef } from "react";

const RESEARCH = [
  {
    id: "ir-transparency-2026",
    title: "IR & Token Transparency in 2026",
    subtitle: "A quantitative assessment of investor relations practices across 20 DeFi protocols",
    date: "2026-04-10",
    category: "Research",
    tags: ["IR Score", "DeFi", "Transparency"],
    featured: true,
    stats: { protocols: 20, avgScore: 67, topScore: 95 },
    embedUrl: "https://novora.co/research/ir-transparency-2026.html",
    description:
      "We scored 20 of the most prominent DeFi protocols across the five pillars of the Novora IR Score — Data Accessibility, Communications, Transparency & Reporting, Narrative & Positioning, and Value Accrual & Tokenomics. The results reveal a market where even the best operators leave significant gaps, and the median protocol treats IR as an afterthought.",
  },
  {
    id: "value-accrual-models",
    title: "Which Token Value Accrual Model Works?",
    subtitle: "A data-driven analysis of six token value accrual models across 18 protocols",
    date: "2026-04-10",
    category: "Research",
    tags: ["Tokenomics", "Value Accrual", "DeFi"],
    featured: false,
    stats: { models: 6, protocols: 18 },
    embedUrl: "https://novora.co/research/value-accrual-models-2026.html",
    description:
      "We analyzed six distinct token value accrual models across 18 protocols to determine which approaches actually drive returns. The data challenges common assumptions about buybacks, staking rewards, and direct distribution.",
  },
  {
    id: "value-accrual-models",
    title: "Which Token Value Accrual Model Works?",
    subtitle: "A data-driven analysis of six token value accrual models and their relationship to returns",
    date: "2026-04-10",
    category: "Research",
    tags: ["Tokenomics", "Value Accrual", "DeFi"],
    featured: false,
    stats: { models: 6, protocols: 18 },
    embedUrl: "https://novora.co/research/value-accrual-models-2026.html",
    description:
      "We analyzed six distinct token value accrual models across 18 protocols to determine which approaches actually drive returns. The data challenges common assumptions about buybacks, staking rewards, and direct distribution.",
  },
  {
    id: "value-accrual-models",
    title: "Which Token Value Accrual Model Works?",
    subtitle: "A data-driven analysis of six token value accrual models and their relationship to returns",
    date: "2026-04-10",
    category: "Research",
    tags: ["Tokenomics", "Value Accrual", "DeFi"],
    featured: false,
    stats: { models: 6, protocols: 18 },
    embedUrl: "https://novora.co/research/value-accrual-models-2026.html",
    description:
      "We analyzed six distinct token value accrual models across 18 protocols to determine which approaches actually drive returns. The data challenges common assumptions about buybacks, staking rewards, and direct distribution.",
  },
  {
    id: "does-ir-matter",
    title: "Does IR Matter in Crypto?",
    subtitle: "Why the next leg of institutional adoption depends on how protocols communicate, not just what they build",
    date: "2026-03-31",
    category: "Research",
    tags: ["IR", "Institutional", "Capital Markets"],
    featured: false,
    stats: null,
    embedUrl: "/research/does-ir-matter-in-crypto",
    description:
      "The crypto industry has a communication problem. As institutional capital enters digital assets at scale, the gap between how protocols build and how they communicate with capital allocators has become the binding constraint on adoption. This research report examines why investor relations infrastructure is the most underbuilt layer in crypto.",
  },
  {
    id: "meteora-ir-analysis",
    title: "Meteora: The Gold Standard",
    subtitle: "How Meteora built the highest-scoring IR program in DeFi and what every protocol can learn from it",
    date: "2026-03-22",
    category: "IR Report",
    tags: ["Meteora", "Solana", "IR Score"],
    featured: false,
    stats: { score: 95 },
    description:
      "Meteora earned a 95/100 on the Novora IR Score, the highest in our benchmark database. This analysis breaks down exactly what they do right across all five pillars: a dedicated IR hub, segmented revenue reporting, per-token metrics, proactive investor communications, and a clear narrative framework for institutional allocators.",
  },
  {
    id: "kamino-ir-analysis",
    title: "Kamino: Bridging the IR Gap",
    subtitle: "Full IR analysis and 180-day roadmap for Kamino Finance",
    date: "2026-03-01",
    category: "IR Report",
    tags: ["Kamino", "Solana", "IR Score"],
    featured: false,
    stats: { score: 52 },
    description:
      "Kamino scores 52/100 on the Novora IR Score. Strong fundamentals but meaningful gaps in communications infrastructure, transparency practices, and institutional-grade reporting. This report maps a concrete 180-day roadmap to close those gaps.",
  },
];

const CATEGORIES = ["All", "Research", "IR Report"];

const T = {
  bg: "#0A0A0A",
  surface: "#111111",
  surfaceHover: "#181818",
  white: "#FFFFFF",
  textMuted: "rgba(255,255,255,0.50)",
  textSubtle: "rgba(255,255,255,0.30)",
  border: "rgba(255,255,255,0.08)",
  borderLight: "rgba(255,255,255,0.12)",
};

const F = "'Helvetica Neue', Helvetica, sans-serif";

const fmtDate = (d) => {
  const dt = new Date(d + "T00:00:00");
  return dt.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

const FadeIn = ({ children, delay = 0, style: extra = {} }) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => {
      if (!ref.current) return;
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVis(true); obs.disconnect(); }
      }, { threshold: 0.1 });
      obs.observe(ref.current);
    }, delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease, transform 0.6s ease", ...extra }}>
      {children}
    </div>
  );
};

const ReportCover = ({ item }) => {
  if (item.id === "does-ir-matter") {
    return (
      <div style={{ background: "#0D0D0D", padding: "48px 52px 44px", border: `0.5px solid ${T.border}`, marginBottom: 32, position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.06 }} viewBox="0 0 800 400" preserveAspectRatio="none">
          {Array.from({ length: 12 }).map((_, i) => (<line key={"v"+i} x1={i * 70} y1="0" x2={i * 70} y2="400" stroke="#fff" strokeWidth="0.5" />))}
          {Array.from({ length: 8 }).map((_, i) => (<line key={"h"+i} x1="0" y1={i * 55} x2="800" y2={i * 55} stroke="#fff" strokeWidth="0.5" />))}
        </svg>
        <svg style={{ position: "absolute", right: 60, top: "50%", transform: "translateY(-50%)", opacity: 0.08 }} width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#fff" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#fff" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="#fff" strokeWidth="0.5" />
        </svg>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
            <span style={{ fontFamily: F, fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Novora Research</span>
          </div>
          <div style={{ fontFamily: F, fontSize: 36, fontWeight: 300, color: T.white, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 440 }}>Does IR Matter<br />in Crypto?</div>
          <div style={{ marginTop: 24, fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>March 2026</div>
        </div>
      </div>
    );
  }
  if (item.id === "ir-transparency-2026") {
    return (
      <div style={{ background: "#0D0D0D", padding: "48px 52px 44px", border: `0.5px solid ${T.border}`, marginBottom: 32, position: "relative", overflow: "hidden" }}>
        <svg style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", opacity: 0.05 }} viewBox="0 0 400 400" preserveAspectRatio="none">
          {Array.from({ length: 20 }).map((_, i) => (<rect key={i} x={20 + (i % 5) * 75} y={20 + Math.floor(i / 5) * 95} width="60" height="80" fill="none" stroke="#fff" strokeWidth="0.5" rx="1" />))}
        </svg>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff" }} />
            <span style={{ fontFamily: F, fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Novora Research</span>
          </div>
          <div style={{ fontFamily: F, fontSize: 36, fontWeight: 300, color: T.white, lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 480 }}>IR & Token Transparency<br />in 2026</div>
          <div style={{ marginTop: 24, fontFamily: F, fontSize: 11, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>April 2026</div>
        </div>
      </div>
    );
  }
  return null;
};

const FeaturedCard = ({ item, onClick }) => {
  const [h, setH] = useState(false);
  return (
    <div onClick={() => onClick(item)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: T.surface, border: `0.5px solid ${h ? T.borderLight : T.border}`, cursor: "pointer", transition: "all 0.3s ease", marginBottom: 48 }}>
      <div style={{ padding: "56px 52px 48px", borderBottom: `0.5px solid ${T.border}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
          <span style={{ fontFamily: F, fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: T.textSubtle }}>Featured</span>
          <span style={{ fontFamily: F, fontSize: 10, letterSpacing: "0.12em", color: T.textSubtle, textTransform: "uppercase" }}>{fmtDate(item.date)}</span>
        </div>
        <div style={{ width: 32, height: 1, background: T.textMuted, marginBottom: 20 }} />
        <h2 style={{ fontFamily: F, fontSize: 38, fontWeight: 300, lineHeight: 1.15, color: T.white, letterSpacing: "-0.02em", marginBottom: 14, maxWidth: 600 }}>{item.title}</h2>
        <p style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: T.textMuted, lineHeight: 1.6, maxWidth: 520 }}>{item.subtitle}</p>
      </div>
      {item.stats && (
        <div style={{ display: "flex", gap: 0, borderBottom: `0.5px solid ${T.border}` }}>
          {Object.entries(item.stats).map(([key, val], i, arr) => (
            <div key={key} style={{ flex: 1, padding: "20px 28px", borderRight: i < arr.length - 1 ? `0.5px solid ${T.border}` : "none" }}>
              <div style={{ fontFamily: F, fontSize: 28, fontWeight: 300, color: T.white, letterSpacing: "-0.02em" }}>{typeof val === "number" ? val.toLocaleString() : val}</div>
              <div style={{ fontFamily: F, fontSize: 9, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSubtle, marginTop: 4 }}>{key.replace(/([A-Z])/g, " $1").trim()}</div>
            </div>
          ))}
        </div>
      )}
      <div style={{ padding: "28px 52px 32px" }}>
        <p style={{ fontFamily: F, fontSize: 13, fontWeight: 400, color: T.textMuted, lineHeight: 1.7, maxWidth: 620 }}>{item.description}</p>
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: F, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", color: h ? T.white : T.textMuted, transition: "color 0.2s ease" }}>Read report</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: h ? "translateX(3px)" : "translateX(0)", transition: "transform 0.2s ease" }}>
            <path d="M5.5 3L9.5 7L5.5 11" stroke={h ? T.white : T.textMuted} strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ResearchCard = ({ item, onClick, delay = 0 }) => {
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={delay}>
      <div onClick={() => onClick(item)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{ background: h ? T.surfaceHover : T.surface, border: `0.5px solid ${h ? T.borderLight : T.border}`, cursor: "pointer", transition: "all 0.25s ease", display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ padding: "28px 28px 24px", flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <span style={{ fontFamily: F, fontSize: 9, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSubtle, padding: "3px 8px", border: `0.5px solid ${T.border}` }}>{item.category}</span>
            <span style={{ fontFamily: F, fontSize: 10, color: T.textSubtle, letterSpacing: "0.06em" }}>{fmtDate(item.date)}</span>
          </div>
          <h3 style={{ fontFamily: F, fontSize: 18, fontWeight: 400, color: T.white, lineHeight: 1.3, letterSpacing: "-0.01em", marginBottom: 8 }}>{item.title}</h3>
          <p style={{ fontFamily: F, fontSize: 12, color: T.textMuted, lineHeight: 1.6, marginBottom: 16 }}>{item.subtitle}</p>
          {item.stats && item.stats.score && (
            <div style={{ display: "inline-flex", alignItems: "baseline", gap: 6 }}>
              <span style={{ fontFamily: F, fontSize: 22, fontWeight: 300, color: T.white }}>{item.stats.score}</span>
              <span style={{ fontFamily: F, fontSize: 10, color: T.textSubtle, letterSpacing: "0.06em" }}>/100</span>
            </div>
          )}
        </div>
        <div style={{ padding: "14px 28px", borderTop: `0.5px solid ${T.border}`, display: "flex", gap: 8, flexWrap: "wrap" }}>
          {item.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: F, fontSize: 9, letterSpacing: "0.06em", color: T.textSubtle }}>{tag}</span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

const ReportDetail = ({ item, onBack }) => {
  const mailSubject = encodeURIComponent("Request: " + item.title);
  const mailBody = encodeURIComponent("Hi Connor,\n\nInterested in the full report: " + item.title + ". Would love to learn more.\n\nThanks");
  const mailHref = "mailto:connor@novora.co?subject=" + mailSubject + "&body=" + mailBody;

  return (
    <div>
      <div onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, cursor: "pointer", marginBottom: 40, padding: "6px 0" }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M8.5 3L4.5 7L8.5 11" stroke={T.textMuted} strokeWidth="1.2" /></svg>
        <span style={{ fontFamily: F, fontSize: 11, fontWeight: 500, color: T.textMuted, letterSpacing: "0.06em" }}>All Research</span>
      </div>

      <FadeIn>
        <div style={{ marginBottom: 16, display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontFamily: F, fontSize: 9, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSubtle, padding: "3px 8px", border: `0.5px solid ${T.border}` }}>{item.category}</span>
          <span style={{ fontFamily: F, fontSize: 11, color: T.textSubtle, letterSpacing: "0.06em" }}>{fmtDate(item.date)}</span>
        </div>
        <h1 style={{ fontFamily: F, fontSize: 42, fontWeight: 300, color: T.white, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 14, maxWidth: 650 }}>{item.title}</h1>
        <p style={{ fontFamily: F, fontSize: 15, color: T.textMuted, lineHeight: 1.6, maxWidth: 560, marginBottom: 40 }}>{item.subtitle}</p>
      </FadeIn>

      <FadeIn delay={80}>
        <ReportCover item={item} />
      </FadeIn>

      {item.stats && (
        <FadeIn delay={100}>
          <div style={{ display: "flex", gap: 0, border: `0.5px solid ${T.border}`, marginBottom: 40 }}>
            {Object.entries(item.stats).map(([key, val], i, arr) => (
              <div key={key} style={{ flex: 1, padding: "22px 28px", borderRight: i < arr.length - 1 ? `0.5px solid ${T.border}` : "none" }}>
                <div style={{ fontFamily: F, fontSize: 32, fontWeight: 300, color: T.white }}>{typeof val === "number" ? val.toLocaleString() : val}</div>
                <div style={{ fontFamily: F, fontSize: 9, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSubtle, marginTop: 4 }}>{key.replace(/([A-Z])/g, " $1").trim()}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      <FadeIn delay={200}>
        <div style={{ borderTop: `0.5px solid ${T.border}`, paddingTop: 32 }}>
          <p style={{ fontFamily: F, fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: 620, marginBottom: 32 }}>{item.description}</p>
          <div style={{ border: `0.5px solid ${T.border}`, padding: "60px 40px", textAlign: "center" }}>
            <div style={{ fontFamily: F, fontSize: 11, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: T.textSubtle, marginBottom: 12 }}>Full Report</div>
            {item.embedUrl ? (
              <div>
                <p style={{ fontFamily: F, fontSize: 13, color: T.textMuted, lineHeight: 1.6, maxWidth: 400, margin: "0 auto 24px" }}>Read the full interactive research report.</p>
                <a href={item.embedUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", border: `0.5px solid ${T.borderLight}`, fontFamily: F, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", color: T.white, textDecoration: "none" }}>
                  READ FULL REPORT
                </a>
              </div>
            ) : (
              <div>
                <p style={{ fontFamily: F, fontSize: 13, color: T.textMuted, lineHeight: 1.6, maxWidth: 400, margin: "0 auto 24px" }}>Interested in the full analysis? Reach out to learn more about our IR research and advisory services.</p>
                <a href={mailHref}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 24px", border: `0.5px solid ${T.borderLight}`, fontFamily: F, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", color: T.white, textDecoration: "none" }}>
                  REQUEST FULL REPORT
                </a>
              </div>
            )}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div style={{ marginTop: 40, paddingTop: 20, borderTop: `0.5px solid ${T.border}`, display: "flex", gap: 10 }}>
          {item.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: F, fontSize: 10, letterSpacing: "0.08em", color: T.textSubtle, padding: "4px 10px", border: `0.5px solid ${T.border}` }}>{tag}</span>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};

export default function NovoraResearch() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const featured = RESEARCH.find((r) => r.featured);

  const handleSelect = (item) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goHome = () => {
    setSelectedItem(null);
    setActiveCategory("All");
  };

  if (selectedItem) {
    return (
      <div style={{ background: T.bg, minHeight: "100vh", color: T.white }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 32px 80px" }}>
          <ReportDetail item={selectedItem} onBack={goHome} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: T.bg, minHeight: "100vh", color: T.white }}>
      <FadeIn>
        <div style={{ padding: "64px 48px 0", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ width: 32, height: 1, background: T.textSubtle, marginBottom: 20 }} />
          <h1 style={{ fontFamily: F, fontSize: 48, fontWeight: 300, color: T.white, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 16 }}>Research</h1>
          <p style={{ fontFamily: F, fontSize: 14, fontWeight: 400, color: T.textMuted, lineHeight: 1.65, maxWidth: 480 }}>
            Independent research and analysis on crypto capital markets, investor relations and token transparency.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div style={{ padding: "32px 48px 0", maxWidth: 900, margin: "0 auto", display: "flex", gap: 0, borderBottom: `0.5px solid ${T.border}` }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: F, fontSize: 11, fontWeight: 500, letterSpacing: "0.08em",
                color: activeCategory === cat ? T.white : T.textSubtle,
                background: "none", border: "none",
                borderBottom: activeCategory === cat ? "1px solid #fff" : "1px solid transparent",
                padding: "10px 20px 14px", cursor: "pointer", transition: "all 0.2s ease", marginBottom: -0.5,
              }}>
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 48px 80px" }}>
        {activeCategory === "All" && featured && (
          <FadeIn delay={150}>
            <FeaturedCard item={featured} onClick={handleSelect} />
          </FadeIn>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {(activeCategory === "All"
            ? RESEARCH.filter((r) => !r.featured)
            : RESEARCH.filter((r) => r.category === activeCategory)
          ).map((item, i) => (
            <ResearchCard key={item.id} item={item} onClick={handleSelect} delay={200 + i * 80} />
          ))}
        </div>
        {activeCategory !== "All" && RESEARCH.filter((r) => r.category === activeCategory).length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontFamily: F, fontSize: 13, color: T.textSubtle }}>No research published in this category yet.</p>
          </div>
        )}
      </div>

      <FadeIn>
        <div style={{ borderTop: `0.5px solid ${T.border}`, padding: "56px 48px", textAlign: "center" }}>
          <p style={{ fontFamily: F, fontSize: 13, color: T.textMuted, marginBottom: 20 }}>Want a custom IR analysis for your protocol?</p>
          <a href="https://ir.novora.co/apply"
            style={{ fontFamily: F, fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: T.white, textDecoration: "none", padding: "12px 32px", border: `0.5px solid ${T.borderLight}` }}>
            GET IN TOUCH
          </a>
        </div>
      </FadeIn>
    </div>
  );
}
