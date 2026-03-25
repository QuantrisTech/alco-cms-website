import LevelIntroWithVideo from "@/component/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import { notFound } from "next/navigation";
import { about } from "@/app/about-us/[slug]/data";
import Banner from "@/component/banner";
import LevelBenefitsTable from "@/component/levelBenefitsTable";
import Gallery from "@/component/gallery";
import ContentSection from "@/component/contentSection";
import OurFaqs from "@/component/faqs";

export default async function About({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const About = about.find((p) => p.slug === slug);

  if (!About) return notFound();

  const { BannerData, LevelBenefitsTableData, galleryData, ContentSectionData1, ContentSectionData2, ContentSectionData4, ContentSectionDataFeatureImage , ContentSectionData3, FaqsData} = About;

  return (
    <div>
      <Banner data={BannerData} />
      <ContentSection data={ContentSectionData1}/>
      <LevelBenefitsTable data={LevelBenefitsTableData} />
      <Gallery data={galleryData} />
      <OurFaqs data={FaqsData}/>
      <ContentSection data={ContentSectionData2}/>
      <ContentSection data={ContentSectionData3}/>
      <ContentSection data={ContentSectionData4} />
      <ContentSection data={ContentSectionDataFeatureImage} />
    </div>
  );
}