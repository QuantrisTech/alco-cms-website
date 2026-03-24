import LevelIntroWithVideo from "@/component/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import { notFound } from "next/navigation";
import { about } from "@/app/about-us/[slug]/data";
import Banner from "@/component/banner";
import LevelBenefitsTable from "@/component/levelBenefitsTable";
import Gallery from "@/component/gallery";
import ContentSection from "@/component/contentSection";

export default async function About({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const About = about.find((p) => p.slug === slug);

  if (!About) return notFound();

  const { BannerData, LevelBenefitsTableData, galleryData, ContentSectionData1, ContentSectionData2 } = About;

  return (
    <div>
      <Banner data={BannerData} />
      <LevelBenefitsTable data={LevelBenefitsTableData} />
      <Gallery data={galleryData} />
      <ContentSection data={ContentSectionData1}/>
      <ContentSection data={ContentSectionData2}/>
    </div>
  );
}