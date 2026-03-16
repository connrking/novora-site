import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Novora | Independent Capital Markets Advisory for Crypto",
  description: "Novora is an independent capital markets advisory firm for crypto. We combine capital markets advisory, investor relations infrastructure, and principal investing to serve as the connective tissue between early-stage protocols and institutional capital.",
  openGraph: {
    title: "Novora | Independent Capital Markets Advisory for Crypto",
    description: "The connective tissue between early-stage protocols and institutional capital.",
    url: "https://novora.co",
    siteName: "Novora",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@novora_",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
