import type { Metadata } from "next";
// import { GoogleAnalytics } from '@next/third-parties/google';
import { GoogleTagManager } from '@next/third-parties/google'
import ConditionalLayout from "./conditional-layout/conditionalLayout";
import { Lexend } from "next/font/google";
import "@/styles/globals.css";
import { Suspense } from "react";
import FacebookPixel from "@/component/FacebookPixel";
import FbclidCookie from "@/component/FbclidCookie";
import Script from "next/script";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Class NLP & Hypnotherapy Certification Trainings",
  description:
    "Have you ever felt held back by thoughts, emotions, or beliefs that seem impossible to escape? <br/> Imagine breaking free from those invisible chains and discovering a version of yourself you never thought possible. At Arslan Larik & Company (AL&CO), this isn't just a promise; it's your new reality. <br/> Your life's transformation starts here!",

  icons: {
    icon: [{ url: "/mini-logo.svg", type: "image/svg+xml" }],
  },

  other: {
    'facebook-domain-verification': 'yi9ep7s1xi6v5r5sn01f1mxwc3cgvu',
  },

  alternates: {
    canonical: "https://arslanlarik.com",
  },

  openGraph: {
    title: "ALCO CMS Website | NLP Training",
    description:
      "Learn NLP & Hypnotherapy with certified trainers at AL&CO.",
    url: "https://arslanlarik.com",
    siteName: "ALCO",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Suspense fallback={null}>
          <FacebookPixel />
          <FbclidCookie />
        </Suspense>
        <ConditionalLayout>
          <main className="pt-[72px]">{children}</main>
        </ConditionalLayout>

        <Script
          src="/widget.js"
          data-api-url={process.env.NEXT_PUBLIC_ALCO_CHATBOT_API_URL}
          data-avatar-url="/sarah-avatar.png"
          strategy="afterInteractive"
        />

      </body>
      {/* <GoogleAnalytics gaId="G-G4W2XBWFX5" /> */}
      <GoogleTagManager gtmId="GTM-5CND486G" />
    </html>
  );
}