import { BannerData } from "@/type/bannerType";
import { LevelIntroWithVideoType } from "@/type/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import programLevel1 from "@/assets/background/program-level-1.webp"
import { LevelCertificationType } from "@/type/levelCertification";
import AccreditedBrand1 from "@/assets/accredited/accredited-1.webp"
import AccreditedBrand2 from "@/assets/accredited/accredited-2.webp"
import AccreditedBrand3 from "@/assets/accredited/accredited-3.webp"
import Certificate1 from "@/assets/level-certificate/certificate-1.webp"
import Certificate2 from "@/assets/level-certificate/certificate-2.webp"
import Certificate3 from "@/assets/level-certificate/certificate-3.webp"
import LevelProgram1 from "@/assets/level-program-included/program-1.webp"
import LevelProgram2 from "@/assets/level-program-included/program-2.webp"
import LevelProgram3 from "@/assets/level-program-included/program-3.webp"
import LevelProgram4 from "@/assets/level-program-included/program-4.webp"
import LevelProgram5 from "@/assets/level-program-included/program-5.webp"
import LevelProgram6 from "@/assets/level-program-included/program-6.webp"
import LevetContent1 from "@/assets/level-content/level-content-1.webp"
import LevetContent2 from "@/assets/level-content/level-content-2.webp"
import LevetContent3 from "@/assets/level-content/level-content-3.webp"
import { LevelBenefitsTableType } from "@/type/levelBenefitsTable";
import { LevelProgramIncludesType } from "@/type/levelProgramIncludes";
import { LevelContentType } from "@/type/levelContent";
import { LevelGraduatesExperienceType } from "@/type/levelGraduatesExperience";

const bannerData: BannerData = {
  level: "level 1",
  title: {
    line1: "NLP Practitioner"
  },
  description: "Triple Certification Training Program",
  image: programLevel1.src
};

const LevelIntroWithVideoData: LevelIntroWithVideoType = {
  title: {
    line1: "Three Certifications.",
    line2: "One Transformational Experience."
  },
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
  description:
    `<p>Do you feel stuck in a cycle of self-doubt and limiting beliefs? What if you could take complete control of your thoughts, emotions, and actions, starting now? At AL&CO, we don’t just teach NLP—we guide you through a transformative journey that unlocks your potential and reshapes your reality.</p> 
    <p>In this 10-day online NLP Practitioner Training Program, you’ll gain three prestigious certifications and master practical tools to achieve breakthrough results—not only for yourself but for those you coach, lead, and inspire.</p> 
    <p>If you’ve been searching for real change, this program is your answer. Over the course of 10 immersive days, you’ll discover how to turn challenges into opportunities and create the life you deserve; all from the comfort of your home.</p>`,
}

const LevelCertificationData: LevelCertificationType = {
  title: {
    line1: "Three Certifications.",
    line2: "One Transformational Experience."
  },
  points: [
    {
      title: "Certified Practitioner of NLP via the American Board of NLP (ABNLP)",
      description: "ABNLP is the world’s most considerable NLP authority, making this certification internationally recognized and enabling you to practice NLP techniques in coaching, training and corporate or personal development environments. This certification will provide you with a ‘tool kit’ for leadership techniques, advanced communication, and soft skills.",
      imageBrand: {
        src: AccreditedBrand1.src,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1.src,
        alt: "Certificate One"
      },
    },
    {
      title: "Certified Practitioner of Time Line Therapy™ Techniques via Time Line Therapy™ Association (TLTA)",
      description: "The Time Line Therapy™ Association (TLTA) is the world’s largest Time Line Therapy™ organization, making this certification internationally recognized. Timeline Line Therapy™ is acknowledged as the world’s best technique for removing negative emotions and limiting beliefs. The change created through these techniques is long-lasting, as it occurs at a neurological and unconscious level.",
      imageBrand: {
        src: AccreditedBrand2.src,
        alt: "Accredited Brand Two"
      },
      imageCerficate: {
        src: Certificate2.src,
        alt: "Certificate Two"
      },
    },
    {
      title: "Certified Practitioner of NLP Coaching via the Coaching Division of ABNLP",
      description: "Coaching is one of the fastest-growing and most rewarding industries on the planet. This certification, certified by the coaching division of the most significant NLP authority, ABNLP, will allow you to kick-start your career as a coach. This is where you will learn how to implement all your new NLP tools in a coaching, mentoring, or leadership environment.",
      imageBrand: {
        src: AccreditedBrand3.src,
        alt: "Accredited Brand Three"
      },
      imageCerficate: {
        src: Certificate3.src,
        alt: "Accredited Three"
      },
    }
  ]
}

const LevelBenefitsTableData: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "NLP Practitioner Training"
  },
  points: [
    {
      content: "Definition of NLP",
      personal:
        "Understand how your mind works, allowing you to break free from limiting beliefs.",
      coaches:
        "Equip yourself with foundational NLP knowledge to guide clients confidently.",
    },
    {
      content: "Themes of NLP",
      personal:
        "Develop clarity and alignment in thoughts and emotions.",
      coaches:
        "Create structured coaching sessions that drive sustainable change.",
    },
    {
      content: "Ecology",
      personal:
        "Make decisions aligned with your values.",
      coaches:
        "Help clients evaluate impact for ethical and sustainable growth.",
    },
    {
      content: "NLP Communication Model",
      personal:
        "Improve communication and build stronger relationships.",
      coaches:
        "Teach effective communication and rapport building.",
    },
    {
      content: "Presuppositions of NLP",
      personal:
        "Reframe mindset to embrace empowering beliefs.",
      coaches:
        "Help clients dissolve limiting beliefs and grow.",
    },
  ],
}

const LevelProgramIncludesData: LevelProgramIncludesType = {
  title: {
    line1: "This Program Includes",
    line2: "NLP Practitioner Training"
  },
  points: [
    {
      title: "10 Days of Immersive, Online Learning",
      description: (
        <p>
          Step into a life-changing journey with our dynamic, 10-day live NLP Practitioner (Triple Certification) Training. Experience world-class NLP concepts in an interactive, engaging environment where learning is fun, practical, and immediately actionable. Each session is designed to give you proven tools to create breakthroughs, whether for yourself or others. Imagine the impact of transforming your mindset and mastering techniques to reshape emotions, behaviors, and goals, all from the comfort of your home.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1.src,
        alt: "10 Days of Immersive, Online Learning",
      },
    },
    {
      title: "Comprehensive Home Study Manual",
      description: (
        <p>
          Dive deeper into the transformative world of NLP with a 450+ page home study manual meticulously designed to complement your learning journey. It covers every concept in detail, providing clarity, structure, and practical exercises you can revisit anytime.This isn’t just a manual; it’s your ongoing roadmap to success, ensuring you confidently apply what you learn, even after the training.
        </p>
      ),
      theme: "light",
      image: {
        src: LevelProgram2.src,
        alt: "Comprehensive Home Study Manual",
      },
    },
    {
      title: "Exclusive Audio Resources",
      description: (
        <p>
          Access over 220 audio files recorded by Dr. Tad James, a pioneer and global leader in NLP. These expertly crafted lessons align with your manual, allowing you to absorb knowledge at your own pace.
Imagine having the wisdom of a global authority at your fingertips, guiding you to master the art and science of NLP.
        </p>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3.src,
        alt: "Exclusive Audio Resources",
      },
    },
    {
      title: "Triple International Certification",
      description: (
        <>
          <p className="mb-2">
            Earn three prestigious certifications:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Certified Practitioner of Neuro-Linguistic Programming (ABNLP-USA) to master NLP techniques for leadership, communication, and personal transformation. </li>
            <li> Certified Practitioner of NLP Coaching (ABNLP-USA) to launch your career as a transformational coach. </li>
            <li> Certified Practitioner of Time Line Therapy Techniques (TLTA-USA) for eliminating negative emotions and limiting beliefs at an unconscious level.</li>
          </ul>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram4.src,
        alt: "Triple Certification",
      },
    },
    {
      title: "Five Years Access to Training",
      description: (
        <p>
          True mastery comes with practice, and we ensure you never stop growing with a 5-year opportunity to revise and revisit our NLP Practitioner Training Program. This means you’re not just investing in 10 days—you’re investing in a lifetime of continuous learning and transformation.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram5.src,
        alt: "Five Years Access",
      },
    },
    {
      title: "A Global Support Network",
      description: (
        <>
          <p className="mb-2">
            Join a vibrant, global community of AL&CO graduates—a space where learning thrives beyond the training room. You’ll:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Practice interventions with peers to sharpen your skills.</li>
            <li> Gain access to expert mentorship and guidance whenever you need it.</li>
            <li>Stay motivated and inspired through shared experiences and collaborative growth.</li>
          </ul>
        </>
      ),
      theme: "light",
      image: {
        src: LevelProgram6.src,
        alt: "Global Network",
      },
    },
  ],
};

const LevelContentData: LevelContentType = {
  title: {
    line1: "Content Of NLP Practitioner",
    line2:""
  },
  points: [
    {
      title: "Neuro Linguistic Programming (NLP)",
      items: [
        "Definition of NLP",
        "Themes of NLP",
        "Ecology",
        "NLP Communication Model",
        "Presuppositions of NLP",
      ],
      image: {
        src: LevetContent1.src,
        alt: "NLP",
      },
    },
    {
      title: "Timeline Therapy Techniques",
      items: [
        "Prime Directives",
        "Elicitation of Timeline",
        "Root Cause",
        "Reframes",
        "Limiting Decisions",
      ],
      image: {
        src: LevetContent2.src,
        alt: "Timeline Therapy",
      },
    },
    {
      title: "NLP Coaching",
      items: [
        "SMART Goals",
        "Coaching Cycle",
        "Success Formula",
        "Coaching Contract",
        "Achievable Outcomes",
      ],
      image: {
        src: LevetContent3.src,
        alt: "NLP Coaching",
      },
    },
  ],
};

const LevelGraduatesExperienceData: LevelGraduatesExperienceType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "NLP Practitioner Training"
  },
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
}


export const programs: ProgramType[] = [
  {
    slug: "nlp-practitioner",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData,
    LevelCertificationData: LevelCertificationData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    LevelProgramIncludesData: LevelProgramIncludesData,
    LevelContentData: LevelContentData,
    LevelGraduatesExperienceData: LevelGraduatesExperienceData,
  },

  {
    slug: "nlp-master-practitioner",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData,
    LevelCertificationData: LevelCertificationData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    LevelProgramIncludesData: LevelProgramIncludesData,
    LevelContentData: LevelContentData,
    LevelGraduatesExperienceData: LevelGraduatesExperienceData,
  },

  {
    slug: "advanced-hypnotherapy-interventionis",
    title: "Advanced Hypnotherapy Training",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData,
    LevelCertificationData: LevelCertificationData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    LevelProgramIncludesData: LevelProgramIncludesData,
    LevelContentData: LevelContentData,
    LevelGraduatesExperienceData: LevelGraduatesExperienceData,
  },

  {
    slug: "nlp-trainers-training-program",
    title: "NLP Trainer’s Training Program",
    description: "Become a Certified NLP Trainer",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData,
    LevelCertificationData: LevelCertificationData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    LevelProgramIncludesData: LevelProgramIncludesData,
    LevelContentData: LevelContentData,
    LevelGraduatesExperienceData: LevelGraduatesExperienceData,
  },

  {
    slug: "hypnosis-trainers-training-program",
    description: "Train Others in Hypnosis",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData,
    LevelCertificationData: LevelCertificationData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    LevelProgramIncludesData: LevelProgramIncludesData,
    LevelContentData: LevelContentData,
    LevelGraduatesExperienceData: LevelGraduatesExperienceData,
  },

  {
    slug: "nlp-master-trainer-program",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData,
    LevelCertificationData: LevelCertificationData,
    LevelBenefitsTableData: LevelBenefitsTableData,
    LevelProgramIncludesData: LevelProgramIncludesData,
    LevelContentData: LevelContentData,
    LevelGraduatesExperienceData: LevelGraduatesExperienceData,
  },
];