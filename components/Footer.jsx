import Link from "next/link";
import { C, F } from "./tokens";
import NovoraLogo from "./NovoraLogo";

export default function Footer() {
  return (
    <footer style={{
      padding: "32px 80px",
      borderTop: `0.5px solid ${C.border}`,
      background: C.bg,
      fontFamily: F.h,
      display: "flex", justifyContent: "space-between", alignItems: "center",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <NovoraLogo width={90} height={18} fill="rgba(255,255,255,0.5)" />
        <span style={{ fontSize: 12, color: C.gray500 }}>© 2026 Novora Holdings LLC</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        {[
          { label: "Legal", href: "/legal" },
          { label: "X", href: "https://x.com/novora_" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/novora-co" },
          { label: "contact@novora.co", href: "mailto:contact@novora.co" },
        ].map(l => (
          l.href.startsWith("/") ? (
            <Link key={l.label} href={l.href} style={{ fontSize: 12, color: C.gray400, textDecoration: "none" }}>{l.label}</Link>
          ) : (
            <a key={l.label} href={l.href} style={{ fontSize: 12, color: C.gray400, textDecoration: "none" }}>{l.label}</a>
          )
        ))}
      </div>
    </footer>
  );
}
