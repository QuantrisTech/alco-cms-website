import { notFound } from "next/navigation";

const programs = [
  {
    slug: "program-1",
    title: "Program 1",
    description: "This is Program 1 details page",
  },
  {
    slug: "program-2",
    title: "Program 2",
    description: "This is Program 2 details page",
  },
  {
    slug: "program-3",
    title: "Program 3",
    description: "This is Program 3 details page",
  },
  {
    slug: "program-4",
    title: "Program 4",
    description: "This is Program 4 details page",
  },
];

export default async function ProgramDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const program = programs.find((p) => p.slug === slug);

  if (!program) return notFound();

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold mb-4">{program.title}</h1>
      <p>{program.description}</p>
    </div>
  );
}