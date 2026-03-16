import LevelIntroWithVideo from "@/component/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import { notFound } from "next/navigation";
import { programs } from "@/app/program/[slug]/data";
import Banner from "@/component/banner";

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
      {/* <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
      <p>{program.description}</p> */}
      <Banner data={program.BannerData} />
      <LevelIntroWithVideo data={program.LevelIntroWithVideoData} />
    </div>
  );
}