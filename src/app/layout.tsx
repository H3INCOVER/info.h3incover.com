import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: { template: `%s | ${SITE_NAME}`, default: SITE_TITLE },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: { types: { 'application/rss+xml': `${SITE_URL}/feed.xml` } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-black">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Initial page_view comes from config; route changes use GA4 enhanced measurement.
            Keep browser-history page views enabled in GA4; do not send page_view manually. */}
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SQV9NE1WJS');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SQV9NE1WJS"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
