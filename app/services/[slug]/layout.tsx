import { Metadata } from "next";
import { buildMetadata } from "@/utils/buildMetadata";

async function getSeoData(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seo/page/${slug}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const { data } = await res.json();
    return data;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const seoData = await getSeoData(slug);

  return seoData
    ? buildMetadata(seoData)
    : {
        title: "Services | AL&CO",
      };
}

export default async function ServicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const seoData = await getSeoData(slug);

  return (
    <>
      {seoData?.structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: seoData.structuredData,
          }}
        />
      )}

      {children}
    </>
  );
}