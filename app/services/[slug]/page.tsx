
import { notFound } from "next/navigation";
import { services } from "./data";

export default async function Services({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const Services = services.find((p) => p.slug === slug);

  if (!Services) return notFound();

  const {} = Services;

  return (
    <div>
    
    </div>
  );
}