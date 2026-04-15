import type { Metadata } from "next";

 const seoMap: Record<string, any> = {
    "nlp-practitioner": {
      title: "NLP Practitioner | ALCO",
      description: "Triple Certification Training Program.",
    },
    "nlp-master-practitioner": {
      title: "NLP Master Practitioner | ALCO",
      description: "Triple Certification Training Program.",
    },
    "advanced-hypnotherapy-interventionis": {
      title: "Advanced Hypnotherapy & Interventionist Training | ALCO",
      description: "Dual Certification Training Program",
    },
    "nlp-trainers-training-program": {
      title: "NLP Trainers’ Training And Evaluation Certification Program | ALCO",
      description: "Dual Certification Training Program",
    },
    "hypnosis-trainers-training-program": {
      title: "Hypnosis Trainer’s Training Certification and Evaluation Program | ALCO",
      description: "Hypnosis Trainer’s Training Certification and Evaluation Program",
    },
    "nlp-master-trainer-program": {
      title: "NLP MASTER TRAINER PROGRAM | ALCO",
      description: "Dual Certification Training Program",
    },
  };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const { slug } = await params;

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