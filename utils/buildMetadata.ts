import type { Metadata } from "next";

export const buildMetadata = (data: any): Metadata => ({
  title: data.title,
  description: data.description,
  keywords: data.keywords,
  alternates: {
    canonical: data.canonical || "https://arslanlarik.com",
  },
  openGraph: {
    title: data.openGraph?.title,
    description: data.openGraph?.description,
    url: data.openGraph?.url || "https://arslanlarik.com",
    siteName: data.openGraph?.siteName || "AL&CO",
    locale: data.openGraph?.locale || "en_US",
    type: (data.openGraph?.type as any) || "website",
    images: data.openGraph?.image ? [{ url: data.openGraph.image }] : [],
  },
  twitter: {
    card: "summary_large_image",
    title: data.twitter?.title,
    description: data.twitter?.description,
    images: data.twitter?.image ? [data.twitter.image] : [],
  },
  robots: {
    index: data.robots?.index ?? true,
    follow: data.robots?.follow ?? true,
  },
});