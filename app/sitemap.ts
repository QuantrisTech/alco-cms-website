import { MetadataRoute } from "next";
import { getProgramsPublic } from "@/utils/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const lastModified = new Date("2026-06-04");

   // Dynamic programs from DB
  let programEntries: MetadataRoute.Sitemap = [];
  try {
    const res = await getProgramsPublic();
    const programs = res.data.data;
    programEntries = programs.map((p: any) => ({
      url: `https://arslanlarik.com/program/${p.slug}`,
      lastModified: p.updatedAt || lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }));
  } catch {
    // fallback agar API fail ho
    programEntries = [
      { url: "https://arslanlarik.com/program/nlp-practitioner", lastModified, changeFrequency: "monthly", priority: 0.9 },
      { url: "https://arslanlarik.com/program/nlp-master-practitioner", lastModified, changeFrequency: "monthly", priority: 0.9 },
      { url: "https://arslanlarik.com/program/advanced-hypnotherapy-interventionist", lastModified, changeFrequency: "monthly", priority: 0.9 },
      { url: "https://arslanlarik.com/program/nlp-trainers-training-program", lastModified, changeFrequency: "monthly", priority: 0.9 },
      { url: "https://arslanlarik.com/program/hypnosis-trainers-training-program", lastModified, changeFrequency: "monthly", priority: 0.9 },
      { url: "https://arslanlarik.com/program/nlp-master-trainer-program", lastModified, changeFrequency: "monthly", priority: 0.9 },
    ];
  }

  return [
    {
      url: "https://arslanlarik.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://arslanlarik.com/contact",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://arslanlarik.com/blogs",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://arslanlarik.com/one-on-one-coaching-sessions",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

      // ...programEntries,

    // Programs
    {
      url: "https://arslanlarik.com/program/nlp-practitioner",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://arslanlarik.com/program/nlp-master-practitioner",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://arslanlarik.com/program/advanced-hypnotherapy-interventionist",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://arslanlarik.com/program/nlp-trainers-training-program",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://arslanlarik.com/program/hypnosis-trainers-training-program",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://arslanlarik.com/program/nlp-master-trainer-program",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // About Us
    {
      url: "https://arslanlarik.com/our-mission",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://arslanlarik.com/about-us/who-is-arslan-larik",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/about-us/who-is-bismillah-pervez",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/about-us/why-train-with-alco",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/faqs",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://arslanlarik.com/testimonial",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },

    {
      url: "https://arslanlarik.com/blogs/pressure-comes-from-a-lack-of-preparation",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/internal-pressure-awareness-reflection-and-personal-mastery",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/pressure-isnt-supposed-to-break-us-its-designed-to-make-us",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/understanding-the-model-of-the-world-beliefs-and-key-decisions",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/the-moment-you-accept-your-struggles-the-door-to-growth-opens",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/vision-depends-on-perspective-not-just-knowledge",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/push-through-tough-times-and-inspire-others",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/the-science-behind-a-positive-state-of-mind",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/the-weight-of-thoughts",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/everything-is-hard-choose-your-hard",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/the-power-of-language-transform-your-mindset-with-words",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/the-internal-representational-system-designing-your-reality",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/the-power-of-reframing-transforming-setbacks-into-opportunities",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/somatic-coaching-certification-for-nervous-system-depth",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/choose-the-best-online-coach-training-program",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/blogs/enhance-corporate-learning-with-nlp-trainer-training",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Services
    {
      url: "https://arslanlarik.com/services/four-clouds-model",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://arslanlarik.com/services/resources",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Legal
    {
      url: "https://arslanlarik.com/refund-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://arslanlarik.com/service-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://arslanlarik.com/privacy-policy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://arslanlarik.com/terms",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // Course Outline
    {
      url: "https://arslanlarik.com/course-outline/nlp-practitioner",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://arslanlarik.com/course-outline/nlp-master-practitioner",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://arslanlarik.com/course-outline/advanced-hypnotherapy-interventionist",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },

    // Program Details
    {
      url: "https://arslanlarik.com/program-detail/benefits-of-choosing-nlp-training-course",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://arslanlarik.com/program-detail/how-nlp-master-practitioner-training-helps-you-in-your-life",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://arslanlarik.com/program-detail/benefits-of-advanced-hypnotherapy-interventionist-training",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}