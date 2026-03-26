
import { notFound } from "next/navigation";
import { services } from "./data";
import Banner from "@/component/banner";
import ContentSection from "@/component/contentSection";
import ContactInfo from "@/component/contactInfo";
import LevelProgramIncludes from "@/component/levelProgramIncludes";

export default async function Services({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const Services = services.find((p) => p.slug === slug);

  if (!Services) return notFound();

  const { BannerData, ContentSectionData1, ContentSectionImgContentListData, ContentSectionData2, ContentSectionContentListData, LevelProgramIncludesData } = Services;


  return (
    <div>
      <Banner data={BannerData} />
      <ContentSection data={ContentSectionData1} />
      <ContentSection data={ContentSectionImgContentListData} />
      <ContentSection data={ContentSectionData2} />
      <ContentSection data={ContentSectionContentListData} />
      <LevelProgramIncludes data={LevelProgramIncludesData} />
      <ContactInfo />
    </div>
  );
}