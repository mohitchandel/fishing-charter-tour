import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter_Tight, Instrument_Serif } from "next/font/google";
import { analytics, site } from "@/lib/site";
import { Providers } from "@/components/site/providers";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import "./globals.css";

const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Key West fishing charter guide`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} | Key West fishing charter guide`,
    description: site.description,
    images: [site.heroImage],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1a20",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} antialiased`}>
      <body className="bg-bone font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[110] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <Providers>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </Providers>
        {/* Umami analytics, loaded after hydration so it never blocks the page. */}
        <Script src={analytics.umamiSrc} data-website-id={analytics.umamiWebsiteId} strategy="afterInteractive" />
      </body>
    </html>
  );
}
