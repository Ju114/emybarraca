import type { Metadata } from "next";
import { Inter, Lora, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_URL, siteConfig } from "@/data/site";
import "./globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

const bodyFont = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const uiFont = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.name} | Escritora espanola`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  applicationName: siteConfig.name,
  category: "literatura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${uiFont.variable}`}>
        <a className="skipLink" href="#main-content">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="siteMain">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
