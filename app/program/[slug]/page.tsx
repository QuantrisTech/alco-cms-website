import LevelIntroWithVideo from "@/component/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import { notFound } from "next/navigation";
import { programs } from "@/app/program/[slug]/data";
import Banner from "@/component/banner";
import LevelCertification from "@/component/levelCertification";
import LevelBenefitsTable from "@/component/levelBenefitsTable";
import ContactInfo from "@/component/contactInfo";
import LevelProgramIncludes from "@/component/levelProgramIncludes";
import LevelContent from "@/component/levelContent";
import LevelGraduatesExperience from "@/component/levelGraduatesExperience";

export default async function ProgramDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const program = programs.find((p) => p.slug === slug);

  if (!program) return notFound();

  return (
    <div>
      <Banner data={program.BannerData} />
      <LevelIntroWithVideo data={program.LevelIntroWithVideoData} />
      <LevelCertification data={program.LevelCertificationData} />
      <LevelProgramIncludes data={program.LevelProgramIncludesData} />
      <ContactInfo />
      <LevelBenefitsTable data={program.LevelBenefitsTableData} />
      <LevelContent data={program.LevelContentData} />
      <LevelGraduatesExperience data={program.LevelGraduatesExperienceData} />
    </div>
  );
}