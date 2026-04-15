import type { Metadata } from "next";

type SEOData = {
  title: string;
  description: string;
};

const aboutSEO: Record<string, SEOData> = {
  "who-is-arslan-larik": {
    title: "Arslan Larik | Master NLP Trainer in Pakistan | AL&CO",
    description:
      "Meet Arslan Larik, Pakistan’s first board-certified Master Trainer of NLP & Hypnosis via ABH-ABNLP.",
  },
  "who-is-bismillah-pervez": {
    title: "Bismillah Pervez | Psychologist & CEO | AL&CO",
    description:
      "Learn about Bismillah Pervez, psychologist, trainer and empowerment advocate at AL&CO.",
  },
  "why-train-with-alco": {
    title: "Why Train With AL&CO | NLP & Hypnosis Training",
    description:
      "Discover why AL&CO is a leading institute for NLP and Hypnotherapy training.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

  const seo = aboutSEO[slug];

  return {
    title: seo?.title ||"About Us | AL&CO",
    description: seo?.description || "Learn more about AL&CO and our mission.",

    // ✅ Canonical URL (important for SEO)
    alternates: {
      canonical: `https://arslanlarik.com/about-us/${slug}`,
    },

    // ✅ Open Graph (social sharing)
    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: `https://arslanlarik.com/about-us/${slug}`,
      siteName: "AL&CO",
      type: "website",
    },

    // ✅ Robots (index allow)
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Layout({ children }: any) {
  return children;
}