// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blogs | ALCO CMS",
//   description: "Read latest blogs on NLP, Hypnotherapy and Personal Development by AL&CO.",
//   keywords: ["NLP blogs", "hypnotherapy articles", "self development", "ALCO blogs"],
//   openGraph: {
//     title: "Blogs | ALCO CMS",
//     description: "Explore expert blogs on NLP and personal growth.",
//     url: "https://arslanlarik.com/blogs",
//     siteName: "ALCO CMS",
//     type: "website",
//   },
// };

// export default function BlogLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return <>{children}</>;
// }

import { ReactNode } from "react";
import { buildMetadata } from "@/utils/buildMetadata";
import type { Metadata } from "next";

async function getSeoData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/seo/page/blogs`,
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

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await getSeoData();

  return seoData
    ? buildMetadata(seoData)
    : {
        title: "Blogs | AL&CO",
        description: "NLP & Hypnotherapy insights blog",
      };
}

export default async function BlogsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const seoData = await getSeoData();

  return (
    <>
      {/* ✅ JSON-LD Schema */}
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