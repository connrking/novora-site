"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { C, F } from "./tokens";
import NovoraLogo from "./NovoraLogo";

const links = [
  { label: "Home", href: "/" },
  { label: "Advisory", href: "/advisory" },
  { label: "IR Score", href: "/ir-score" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)",
      borderBottom: `0.5px solid ${C.border}`,
      padding: "0 48px", height: 64,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      fontFamily: F.h,
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
        <NovoraLogo />
      </Link>
      <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
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
    </nav>
  );
}
