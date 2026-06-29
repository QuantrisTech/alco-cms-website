import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"], // only domain, no https://
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Programs (path structure changed)
      { source: '/services/nlp-practitioner', destination: '/program/nlp-practitioner', permanent: true },
      { source: '/services/nlp-master-practitioner', destination: '/program/nlp-master-practitioner', permanent: true },
      { source: '/services/advanced-hypnotherapy-interventionis', destination: '/program/advanced-hypnotherapy-interventionist', permanent: true },
      { source: '/nlp-trainers-training-program', destination: '/program/nlp-trainers-training-program', permanent: true },
      { source: '/hypnosis-trainers-training-program', destination: '/program/hypnosis-trainers-training-program', permanent: true },
      { source: '/nlp-master-trainer-program', destination: '/program/nlp-master-trainer-program', permanent: true },

      // Course outline
      { source: '/course-outline-of-nlp-practitioner-2', destination: '/course-outline/nlp-practitioner', permanent: true },

      // Blog: /blog/* pattern
      { source: '/blog/:slug', destination: '/blogs/:slug', permanent: true },

      // Blog: root-level old posts -> /blogs/<slug> (confirmed from sitemap)
      { source: '/pressure-comes-from-a-lack-of-preparation', destination: '/blogs/pressure-comes-from-a-lack-of-preparation', permanent: true },
      { source: '/internal-pressure-awareness-reflection-and-personal-mastery', destination: '/blogs/internal-pressure-awareness-reflection-and-personal-mastery', permanent: true },
      { source: '/pressure-isnt-supposed-to-break-us-its-designed-to-make-us', destination: '/blogs/pressure-isnt-supposed-to-break-us-its-designed-to-make-us', permanent: true },
      { source: '/understanding-the-model-of-the-world-beliefs-and-key-decisions', destination: '/blogs/understanding-the-model-of-the-world-beliefs-and-key-decisions', permanent: true },
      { source: '/the-moment-you-accept-your-struggles-the-door-to-growth-opens', destination: '/blogs/the-moment-you-accept-your-struggles-the-door-to-growth-opens', permanent: true },
      { source: '/vision-depends-on-perspective-not-just-knowledge', destination: '/blogs/vision-depends-on-perspective-not-just-knowledge', permanent: true },
      { source: '/push-through-tough-times-and-inspire-others', destination: '/blogs/push-through-tough-times-and-inspire-others', permanent: true },
      { source: '/the-science-behind-a-positive-state-of-mind', destination: '/blogs/the-science-behind-a-positive-state-of-mind', permanent: true },
      { source: '/the-weight-of-thoughts', destination: '/blogs/the-weight-of-thoughts', permanent: true },
      { source: '/everything-is-hard-choose-your-hard', destination: '/blogs/everything-is-hard-choose-your-hard', permanent: true },
      { source: '/the-power-of-language-transform-your-mindset-with-words', destination: '/blogs/the-power-of-language-transform-your-mindset-with-words', permanent: true },
      { source: '/the-internal-representational-system-designing-your-reality', destination: '/blogs/the-internal-representational-system-designing-your-reality', permanent: true },
      { source: '/the-power-of-reframing-transforming-setbacks-into-opportunities', destination: '/blogs/the-power-of-reframing-transforming-setbacks-into-opportunities', permanent: true },
      { source: '/enroll-now', destination: '/?openEnroll=true', permanent: true },
      { source: '/register', destination: '/?openEnroll=true', permanent: true },
    ];
  }
};

export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     // Allow local images and external URLs if needed
//     domains: [],
//     formats: ['image/avif', 'image/webp'], // add any formats you use
//   },
// };

// module.exports = nextConfig;
