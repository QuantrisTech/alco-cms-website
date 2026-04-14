import type { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params.slug;

  const seoMap: Record<string, any> = {
    "nlp-practitioner": {
      title: "NLP Practitioner | ALCO",
      description: "Become a certified NLP Practitioner.",
    },
    "nlp-master-practitioner": {
      title: "NLP Master Practitioner | ALCO",
      description: "Advanced NLP training program.",
    },
  };

  const seo = seoMap[slug];

  return {
    title: seo?.title || "Program | ALCO",
    description: seo?.description || "Explore ALCO programs",

    alternates: {
      canonical: `https://arslanlarik.com/program/${slug}`,
    },

    openGraph: {
      title: seo?.title,
      description: seo?.description,
      url: `https://arslanlarik.com/program/${slug}`,
      siteName: "ALCO",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Layout({ children }: any) {
  return children;
}