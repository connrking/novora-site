import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Novora | Independent Capital Markets Advisory for Crypto",
  description: "Novora is an independent capital markets advisory firm for crypto. We combine capital markets advisory, investor relations infrastructure, and principal investing to serve as the connective tissue between protocols and the institutional investor base.",
  openGraph: {
    title: "Novora | Independent Capital Markets Advisory for Crypto",
    description: "The connective tissue between protocols and the institutional investor base.",
    url: "https://novora.co",
    siteName: "Novora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@novora_",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          /* ===== MOBILE RESPONSIVE OVERRIDES ===== */
          /* These only fire at smaller breakpoints — desktop is untouched */

          @media (max-width: 1024px) {
            /* Tablet: reduce padding, stack 5-col grids */
            .section-pad { padding-left: 48px !important; padding-right: 48px !important; }
            .pillar-grid { grid-template-columns: repeat(3, 1fr) !important; }
            .service-grid { grid-template-columns: 1fr 1fr !important; }
            .service-grid > *:nth-child(3) { border-right: none !important; }
            .advisory-grid { grid-template-columns: 120px 1fr !important; gap: 32px !important; }
          }

          @media (max-width: 768px) {
            /* Mobile: single column everything */
            .section-pad { padding-left: 24px !important; padding-right: 24px !important; }
            .hero-pad { padding-left: 24px !important; padding-right: 24px !important; }

            /* Hero text */
            .hero-title { font-size: 36px !important; max-width: 100% !important; }
            .hero-sub { font-size: 15px !important; max-width: 100% !important; }
            .hero-section { min-height: 80vh !important; }

            /* Grids → single column */
            .service-grid { grid-template-columns: 1fr !important; }
            .service-grid > * { border-right: none !important; }
            .two-col-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .pillar-grid { grid-template-columns: 1fr 1fr !important; }
            .advisory-grid { grid-template-columns: 1fr !important; gap: 24px !important; }

            /* Typography scaling */
            .page-h1 { font-size: 32px !important; }
            .page-h2 { font-size: 24px !important; }
            .section-h2 { font-size: 28px !important; }

            /* CTA buttons */
            .cta-row { flex-direction: column !important; align-items: stretch !important; }
            .cta-row a { text-align: center !important; }

            /* Footer */
            .footer-inner { flex-direction: column !important; gap: 20px !important; text-align: center !important; }
            .footer-links { flex-wrap: wrap !important; justify-content: center !important; }

            /* Section vertical padding */
            .section-v-pad { padding-top: 64px !important; padding-bottom: 64px !important; }
            .hero-v-pad { padding-top: 80px !important; padding-bottom: 60px !important; }

            /* Marquee scale */
            .novora-marquee-track svg { width: 160px !important; height: 160px !important; }

            /* Partners */
            .partners-row { gap: 24px 32px !important; }

            /* About grid */
            .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }

            /* IR Score page hero */
            .ir-hero-h1 { font-size: 32px !important; }

            /* Blockquote */
            .thesis-quote { font-size: 22px !important; }

            /* Contact page */
            .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
            .contact-h1 { font-size: 36px !important; }

            /* Legal */
            .legal-h1 { font-size: 36px !important; }
          }

          @media (max-width: 480px) {
            .section-pad { padding-left: 16px !important; padding-right: 16px !important; }
            .hero-pad { padding-left: 16px !important; padding-right: 16px !important; }
            .hero-title { font-size: 30px !important; }
            .pillar-grid { grid-template-columns: 1fr !important; }
            .page-h1 { font-size: 28px !important; }
            .ir-hero-h1 { font-size: 28px !important; }
            .thesis-quote { font-size: 20px !important; }
          }
        `}} />
      </head>
      <body style={{
        margin: 0, padding: 0,
        background: "#0A0A0A",
        color: "#FFFFFF",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
