import NotFound from "@/app/not-found";
import { programInnerDetail } from "./data";
import Banner from "@/component/banner";
import LevelBenefitsTable from "@/component/levelBenefitsTable";


export default async function ProgramInnerDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const program = programInnerDetail.find((p) => p.slug === slug);

  if (!program) return NotFound();

  return (
    <div>
      <Banner data={program.BannerData} />
      <LevelBenefitsTable data={program.LevelBenefitsTableData1} />
       <LevelBenefitsTable data={program.LevelBenefitsTableData2} />
      <LevelBenefitsTable data={program.LevelBenefitsTableData3} />
    </div>
  );
}