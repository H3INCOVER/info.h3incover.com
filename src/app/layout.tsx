import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | H3 Incover Info",
    default: "H3 Incover Info | 情報を、届く形に整えるための記録。",
  },
  description: "AI、介護、Web、営業、情報設計について、実践しながら学んだことを整理した知識庫・研究ノートメディアです。",
  metadataBase: new URL("https://info.h3incover.com"),
  alternates: {
    types: {
      "application/rss+xml": "https://info.h3incover.com/feed.xml",
    },
  },
  openGraph: {
    title: "H3 Incover Info",
    description: "情報を、届く形に整えるための記録。",
    url: "https://info.h3incover.com",
    siteName: "H3 Incover Info",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H3 Incover Info",
    description: "情報を、届く形に整えるための記録。",
  },
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
