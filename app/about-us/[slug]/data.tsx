// Type
import { BannerType } from "@/type/bannerType";


// Images
import BannerImage2 from "@/assets/about-us/who-is-bismillah-pervez.webp"
import BannerImage1 from "@/assets/about-us/who-is-arsalan-larik.webp"
import { AboutType } from "@/type/aboutType";
import { LevelBenefitsTableType } from "@/type/levelBenefitsTable";
import { GalleryItem } from "@/type/gallery";
import { ContentSectionType } from "@/type/contentSection";

const bannerDataBP: BannerType = {
  title: {
    line1: "Bismillah Pervez",
    line2: `CEO, Psychologist, Trainer,
And Empowerment Advocate`
  },
  description: `The greatest minds are not those who
know everything or are born with
perfection, but those who are always
open to learning and adapting
their mindset.`,
  image: BannerImage2.src,
  height: "min-h-[600px]",
  className: "bg-no-repeat bg-left bg-contain",
  intoBanner: true
};

const LevelBenefitsTableDataBP: LevelBenefitsTableType = {
  introPage: true,
  title: {
    line1: "Experienced project leader and trainer with a proven track record of success at Arslan Larik & Company (AL&CO).",
    line2: "Bismillah Pervez demonstrated proficiency in managing projects and delivering  high-quality training sessions.",
  },

  headers: [
    // "Experienced project leader and trainer with a proven track record of success at Arslan Larik & Company (AL&CO).",
    // "Bismillah Pervez demonstrated proficiency in managing projects and delivering  high-quality training sessions.",
    // "Benefits for Coaches",
  ],

  points: [
    {
      content: "Certified Trainer of Neuro Linguistic Programming via The American Board of Neuro Linguistic Programming (USA)",
      values: [
        "Certified Trainer of Hypnosis via The American Board of Neuro Linguistic Programming (USA)",
      ],
    },
    {
      content: "Certified NLP Master Practitioner via The American Board of Neuro Linguistic Programming (USA)",
      values: [
        "Certified Time Line Therapy™ Master Practitioner via Time Line Therapy™ Association (USA)",
      ],
    },
    {
      content: "Certified NLP Master Coach via Coaching Division of ABNLP (USA)",
      values: [
        "Certified Master Practitioner of Hypnotherapy via The American Board of Hypnotherapy (USA)",
      ],
    },
    {
      content: "Certified Master Hypnotherapist via National Guild of Hypnotist-NGH (USA)",
      values: [
        "Certified Master Educationist by Punjab University",
      ],
    },
    {
      content: "Certified Trainer by Carnelian Pvt Ltd (Train The Trainer)",
      values: [
        "Certified Trainer by Funverks Pvt Ltd (Train The Trainer)",
      ],
    },

  ],

  videoTitle: "Collaborations",

  videos: [
    {
      video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
      title: "Emaar Pakistan"
    },
    {
      video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
      title: "Hamdard Pakistan"
    },
    {
      video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
      title: "AlRahim Textile Mills"
    },
  ]


};

const galleryDataBP: GalleryItem = {
  title: "A Proven Leader with a Personal Touch",
  description: (
    <>
      <p className="mb-4">
        Bismillah’s career is built on the belief that true leadership comes from empowering others. Whether she’s mentoring a team, facilitating workshops, or working one-on-one with clients, her focus is always on creating meaningful and measurable change.
      </p>
      <p>
        Her work with Pakistan’s leading organizations has equipped teams to embrace innovation, collaboration, and emotional intelligence. Her ability to connect with diverse audiences, simplify complex ideas, and inspire action makes her an in-demand trainer in the corporate world.      </p>
    </>
  ),
  image: [
    { src: BannerImage2.src, alt: "", title: "Session 1" },
    { src: BannerImage2.src, alt: "", title: "Training" },
    { src: BannerImage2.src, alt: "", title: "Workshop" },
    { src: BannerImage2.src, alt: "", title: "Session 1" },
    { src: BannerImage2.src, alt: "", title: "Training" },
    { src: BannerImage2.src, alt: "", title: "Workshop" },
    { src: BannerImage2.src, alt: "", title: "Session 1" },
    { src: BannerImage2.src, alt: "", title: "Training" },
    { src: BannerImage2.src, alt: "", title: "Workshop" },
  ]
}

const ContentSectionData1BP: ContentSectionType = {
  title: "The Philosophy of Empowerment",
  description: (
    <>
      <p className="mb-4">
        At the heart of Bismillah’s work is a deeply held belief: empowerment starts with modeling the best. This philosophy is not just her mantra—it is the foundation of her approach to leadership and coaching. She inspires individuals to harness their strengths, overcome challenges, and take control of their destinies.
      </p>
      <p>
        For Bismillah, success isn’t about following trends; it’s about creating meaningful impact. Her dedication to empowering others has made her a trusted coach, a compassionate mentor, and a dynamic leader.
      </p>
    </>
  ),
}

const ContentSectionData2BP: ContentSectionType = {
  title: "Your Partner in Transformation",
  description: (
    <>
      <p className="mb-4">
        If you’re ready to unlock your potential, elevate your team’s performance, or achieve new heights of personal and professional success, Bismillah Pervez is here to guide you.
      </p>
      <p>
        Her expertise, combined with her unwavering commitment to modeling the best, ensures that every journey she facilitates leads to transformation.
      </p>
    </>
  ),
}

const bannerData: BannerType = {
  title: {
    line1: "Bismillah Pervez",
    line2: `CEO, Psychologist, Trainer,
And Empowerment Advocate`
  },
  description: `The greatest minds are not those who
know everything or are born with
perfection, but those who are always
open to learning and adapting
their mindset.`,
  image: BannerImage2.src,
  height: "min-h-[600px]",
  className: "bg-no-repeat bg-left bg-contain",
  intoBanner: true
};

const LevelBenefitsTableData: LevelBenefitsTableType = {
  introPage: true,
  title: {
    line1: "Experienced project leader and trainer with a proven track record of success at Arslan Larik & Company (AL&CO).",
    line2: "Bismillah Pervez demonstrated proficiency in managing projects and delivering  high-quality training sessions.",
  },

  headers: [
    // "Experienced project leader and trainer with a proven track record of success at Arslan Larik & Company (AL&CO).",
    // "Bismillah Pervez demonstrated proficiency in managing projects and delivering  high-quality training sessions.",
    // "Benefits for Coaches",
  ],

  points: [
    {
      content: "Certified Trainer of Neuro Linguistic Programming via The American Board of Neuro Linguistic Programming (USA)",
      values: [
        "Certified Trainer of Hypnosis via The American Board of Neuro Linguistic Programming (USA)",
      ],
    },
    {
      content: "Certified NLP Master Practitioner via The American Board of Neuro Linguistic Programming (USA)",
      values: [
        "Certified Time Line Therapy™ Master Practitioner via Time Line Therapy™ Association (USA)",
      ],
    },
    {
      content: "Certified NLP Master Coach via Coaching Division of ABNLP (USA)",
      values: [
        "Certified Master Practitioner of Hypnotherapy via The American Board of Hypnotherapy (USA)",
      ],
    },
    {
      content: "Certified Master Hypnotherapist via National Guild of Hypnotist-NGH (USA)",
      values: [
        "Certified Master Educationist by Punjab University",
      ],
    },
    {
      content: "Certified Trainer by Carnelian Pvt Ltd (Train The Trainer)",
      values: [
        "Certified Trainer by Funverks Pvt Ltd (Train The Trainer)",
      ],
    },

  ],

  videoTitle: "Collaborations",

  videos: [
    {
      video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
      title: "Emaar Pakistan"
    },
    {
      video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
      title: "Hamdard Pakistan"
    },
    {
      video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
      title: "AlRahim Textile Mills"
    },
  ]


};

const galleryData: GalleryItem = {
  title: "A Proven Leader with a Personal Touch",
  description: (
    <>
      <p className="mb-4">
        Bismillah’s career is built on the belief that true leadership comes from empowering others. Whether she’s mentoring a team, facilitating workshops, or working one-on-one with clients, her focus is always on creating meaningful and measurable change.
      </p>
      <p>
        Her work with Pakistan’s leading organizations has equipped teams to embrace innovation, collaboration, and emotional intelligence. Her ability to connect with diverse audiences, simplify complex ideas, and inspire action makes her an in-demand trainer in the corporate world.      </p>
    </>
  ),
  image: [
    { src: BannerImage2.src, alt: "", title: "Session 1" },
    { src: BannerImage2.src, alt: "", title: "Training" },
    { src: BannerImage2.src, alt: "", title: "Workshop" },
    { src: BannerImage2.src, alt: "", title: "Session 1" },
    { src: BannerImage2.src, alt: "", title: "Training" },
    { src: BannerImage2.src, alt: "", title: "Workshop" },
    { src: BannerImage2.src, alt: "", title: "Session 1" },
    { src: BannerImage2.src, alt: "", title: "Training" },
    { src: BannerImage2.src, alt: "", title: "Workshop" },
  ]
}


export const about: AboutType[] = [
  {
    slug: "who-is-arslan-larik",
    BannerData: bannerData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    galleryData: galleryData,
    ContentSectionData1: ContentSectionData1BP,
    ContentSectionData2: ContentSectionData2BP
  },
  {
    slug: "who-is-bismillah-pervez",
    BannerData: bannerDataBP,
    LevelBenefitsTableData: LevelBenefitsTableDataBP,
    galleryData: galleryDataBP,
    ContentSectionData1: ContentSectionData1BP,
    ContentSectionData2: ContentSectionData2BP
  },
  {
    slug: "why-train-with-alco",
    BannerData: bannerData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    galleryData: galleryData,
    ContentSectionData1: ContentSectionData1BP,
    ContentSectionData2: ContentSectionData2BP
  },

];