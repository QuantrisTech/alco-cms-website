import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  const lastModified = new Date("2026-06-04");

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