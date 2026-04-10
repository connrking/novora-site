"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C, F } from "./tokens";
import NovoraLogo from "./NovoraLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Advisory", href: "/advisory" },
  { label: "IR Score", href: "/ir-score" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-links-desktop { display: flex; gap: 36px; align-items: center; }
        .nav-hamburger { display: none; }
        .nav-mobile-menu { display: none; }

        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-menu.is-open {
            display: flex !important;
            position: fixed; top: 64px; left: 0; right: 0; bottom: 0;
            background: rgba(10,10,10,0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 32px 24px;
            z-index: 99;
            gap: 8px;
            overflow-y: auto;
          }
        }
      `}</style>

      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `0.5px solid ${C.border}`,
        padding: "0 48px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        fontFamily: F.h,
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <NovoraLogo />
        </Link>

        {/* Desktop links */}
        <div className="nav-links-desktop">
          {links.map(l => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link key={l.href} href={l.href} style={{
                fontSize: 13, letterSpacing: "0.02em",
                color: active ? C.white : C.gray300,
                textDecoration: "none", transition: "color 0.2s",
                borderBottom: active ? "1px solid rgba(255,255,255,0.4)" : "1px solid transparent",
                paddingBottom: 2,
              }}>{l.label}</Link>
            );
          })}
          <a href="mailto:contact@novora.co" style={{
            fontSize: 12, letterSpacing: "0.06em", color: C.bg,
            background: C.white, padding: "8px 20px", borderRadius: 2,
            textDecoration: "none", fontWeight: 500, transition: "opacity 0.2s",
          }}>GET IN TOUCH</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            alignItems: "center", justifyContent: "center",
            background: "none", border: "none", cursor: "pointer",
            padding: 8, WebkitTapHighlightColor: "transparent",
          }}
        >
          <div style={{ width: 20, height: 14, position: "relative" }}>
            <span style={{
              position: "absolute", left: 0, width: 20, height: 1.5,
              background: C.white, borderRadius: 1,
              top: open ? 6 : 0,
              transform: open ? "rotate(45deg)" : "rotate(0)",
              transition: "all 0.25s ease",
            }} />
            <span style={{
              position: "absolute", left: 0, top: 6, width: 20, height: 1.5,
              background: C.white, borderRadius: 1,
              opacity: open ? 0 : 1,
              transition: "opacity 0.2s ease",
            }} />
            <span style={{
              position: "absolute", left: 0, width: 20, height: 1.5,
              background: C.white, borderRadius: 1,
              top: open ? 6 : 12,
              transform: open ? "rotate(-45deg)" : "rotate(0)",
              transition: "all 0.25s ease",
            }} />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile-menu${open ? " is-open" : ""}`}>
        {links.map(l => {
          const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: F.h, fontSize: 18, letterSpacing: "0.02em",
              color: active ? C.white : C.gray300,
              textDecoration: "none", padding: "14px 0",
              borderBottom: `0.5px solid ${C.border}`,
              transition: "color 0.2s",
            }}>{l.label}</Link>
          );
        })}
        <a href="mailto:contact@novora.co" onClick={() => setOpen(false)} style={{
          fontFamily: F.h, fontSize: 13, letterSpacing: "0.06em",
          fontWeight: 500, color: C.bg, background: C.white,
          padding: "14px 24px", borderRadius: 2,
          textDecoration: "none", textAlign: "center",
          marginTop: 16,
        }}>GET IN TOUCH</a>
      </div>
    </>
  );
}
