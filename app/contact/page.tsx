import { Metadata } from "next";
import { buildMetadata } from "@/utils/buildMetadata";
import Banner from "@/component/banner";
import ContentSection from "@/component/contentSection";
import { ContentSectionType } from "@/type/contentSection";
import programLevel1 from "@/assets/background/program-level-1.webp";
import ContactUS from "@/component/contact";

type ContactFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  query: string;
  source?: string;
  turnstileToken?: string;
};

const bannerData = {
  title: {
    line1: "Contact Us",
    align: "text-center mx-auto"
  },
  image: programLevel1.src
}

const ContentSectionData: ContentSectionType = {
  title: "Get in Touch",
  description: (
    <>
      <p className="text-gray-600 mb-4">
        To help you achieve your unique aims, goals, and aspirations, our NLP trainers take a holistic approach to a person’s physical, mental, emotional, and social aspects. Get in touch with us today to learn more about how we can help you live an extraordinary life.
      </p>
    </>
  ),
  underline: false,
  miniTitle: "The Gold Standard for NLP Training Globally",
  detailContent: (
    <>
      <ul className="list-disc pl-5 space-y-1 text-gray-600 my-4">
        <li>Best-in-Class Coaching</li>
        <li>Most Practical NLP Program</li>
        <li>Multiple Repetitions and Revisions</li>
        <li>Knowledge Center & Community</li>
      </ul>
      <p className="text-gray-600">
        Trusted by 250,000 individuals and the world’s leading companies.
      </p>
    </>
  ),
  textAlign: "text-start",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 "
}

async function getSeoData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seo/page/contact`,
      { next: { revalidate: 3600 } }
    );
    const { data } = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSeoData();
  return data ? buildMetadata(data) : { title: "Contact | AL&CO" };
}

export default async function Contact() {
  const seoData = await getSeoData();
  return (
    <>
      {seoData?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: seoData.structuredData }}
        />
      )}
      <Banner data={bannerData} />
      <ContentSection data={ContentSectionData} />
      <ContactUS />

    </>
  );
};
