// "use client";
import Hero from "@/component/Hero";
import Brand from "@/component/Brand";
import WhatIsNlp from "@/component/whatIsNlp";
import AralanLarikIntro from "@/component/AralanLarikIntro";
import OurProgram from "@/component/OurProgram";
import Benefits from "@/component/Benefits";
import Accredited from "@/component/Accredited";
import WhyTrainWithAL from "@/component/WhyTrainWithAL";
import ALCOCenter from "@/component/ALCOCenter";
import Testimonials from "@/component/testimonial";
import { home } from "./data";
import LiveSessionsSection from "@/component/Livesessionssection";
import { Metadata } from "next";
import { buildMetadata } from "@/utils/buildMetadata";

async function getSeoData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seo/page/home`,
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
  return data ? buildMetadata(data) : { title: "AL&CO | NLP & Hypnotherapy Training" };
}

export default async function Home() {
  const seoData = await getSeoData(); // ✅ Next.js cache karta hai — double fetch nahi hoga

  return (
    <>
      {seoData?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: seoData.structuredData }}
        />
      )}
      <div>
        <Hero data={home.hero} />
        <Brand />
        <WhatIsNlp />
        <AralanLarikIntro />
        <OurProgram />
        <Benefits />
        <Accredited />
        <WhyTrainWithAL />
        <ALCOCenter />
        <LiveSessionsSection />
        <Testimonials />
      </div>
    </>
  );
}