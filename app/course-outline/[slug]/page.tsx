import NotFound from "@/app/not-found";
import { courseInnerDetail } from "./data";
import Banner from "@/component/banner";
import LevelBenefitsTable from "@/component/levelBenefitsTable";


export default async function CourseInnerDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const course = courseInnerDetail.find((p) => p.slug === slug);

  if (!course) return NotFound();

  return (
    <div>
      <Banner data={course.BannerData} />
      <LevelBenefitsTable data={course.LevelBenefitsTableData1} />
       <LevelBenefitsTable data={course.LevelBenefitsTableData2} />
      <LevelBenefitsTable data={course.LevelBenefitsTableData3} />
    </div>
  );
}