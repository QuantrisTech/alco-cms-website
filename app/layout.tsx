import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import ConditionalLayout from "./conditional-layout/conditionalLayout";
import { Lexend } from "next/font/google";
import FacebookPixel from "@/component/FacebookPixel";
import "@/styles/globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // title: "Arslan Larik Company | NLP & Hypnotherapy Training",
  // description:
  //   "SEO Friendly CMS Website built with Next.js. Learn NLP & Hypnotherapy with AL&CO certified trainers.",

  // ✅ Favicon
  icons: {
    icon: [{ url: "/mini-logo.svg", type: "image/svg+xml" }],
  },

  // ✅ Canonical
  // alternates: {
  //   canonical: "https://arslanlarik.com",
  // },

  // ✅ Open Graph (Facebook, WhatsApp, LinkedIn)
  // openGraph: {
  //   title: "ALCO CMS Website | NLP Training",
  //   description:
  //     "Learn NLP & Hypnotherapy with certified trainers at AL&CO.",
  //   url: "https://arslanlarik.com",
  //   siteName: "ALCO",
  //   locale: "en_US",
  //   type: "website",
  // },

  // ✅ Robots (HOME PAGE MUST BE INDEXED)
  // robots: {
  //   index: true,
  //   follow: true,
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <FacebookPixel />
        <ConditionalLayout>
          <main className="pt-[72px]">{children}</main>
        </ConditionalLayout>
      </body>
      <GoogleAnalytics gaId="G-G4W2XBWFX5" />
    </html>
  );
}