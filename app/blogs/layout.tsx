import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | ALCO CMS",
  description: "Read latest blogs on NLP, Hypnotherapy and Personal Development by AL&CO.",
  keywords: ["NLP blogs", "hypnotherapy articles", "self development", "ALCO blogs"],
  openGraph: {
    title: "Blogs | ALCO CMS",
    description: "Explore expert blogs on NLP and personal growth.",
    url: "https://arslanlarik.com/blogs",
    siteName: "ALCO CMS",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}