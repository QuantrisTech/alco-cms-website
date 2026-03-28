// Type
import { BannerType } from "@/type/bannerType";
import { LevelIntroWithVideoType } from "@/type/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import { LevelBenefitsTableType } from "@/type/levelBenefitsTable";
import { LevelProgramIncludesType } from "@/type/levelProgramIncludes";
import { LevelContentType } from "@/type/levelContent";
import { LevelGraduatesExperienceType } from "@/type/levelGraduatesExperience";
import ThumbnailIntro1 from "@/assets/thumbnail/intro/intro_level1.webp";
import ThumbnailIntro2 from "@/assets/thumbnail/intro/intro_level2.webp";
import ThumbnailIntro3 from "@/assets/thumbnail/intro/intro_level3.webp";
import ThumbnailIntro4 from "@/assets/thumbnail/intro/intro_level4.webp";
import ThumbnailIntro5 from "@/assets/thumbnail/intro/intro_level5.webp";
import ThumbnailIntro6 from "@/assets/thumbnail/intro/intro_level6.webp";
import ThumbnailReview1 from "@/assets/thumbnail/review/review_level1.webp";
import ThumbnailReview2 from "@/assets/thumbnail/review/review_level2.webp";
import ThumbnailReview3 from "@/assets/thumbnail/review/review_level3.webp";
import ThumbnailReview4 from "@/assets/thumbnail/review/review_level4.webp";
import ThumbnailReview5 from "@/assets/thumbnail/review/review_level5.webp";

// Images
import programLevel1 from "@/assets/background/program-level-1.webp"
import programLevel2 from "@/assets/background/program-level-2.webp"
import { LevelCertificationType } from "@/type/levelCertification";
import AccreditedBrand1 from "@/assets/accredited/accredited-1.webp"
import AccreditedBrand2 from "@/assets/accredited/accredited-2.webp"
import AccreditedBrand3 from "@/assets/accredited/accredited-3.webp"
import AccreditedBrand4 from "@/assets/accredited/accredited-4.webp"
import AccreditedBrand5 from "@/assets/accredited/accredited-5.webp"
import AccreditedBrand6 from "@/assets/accredited/accredited-6.webp"
import Certificate1Level1 from "@/assets/level-certificate/certificate-1-level-1.webp"
import Certificate2Level1 from "@/assets/level-certificate/certificate-2-level-1.webp"
import Certificate3Level1 from "@/assets/level-certificate/certificate-3-level-1.webp"
import Certificate1Level2 from "@/assets/level-certificate/certificate-1-level-2.webp"
import Certificate2Level2 from "@/assets/level-certificate/certificate-2-level-2.webp"
import Certificate3Level2 from "@/assets/level-certificate/certificate-3-level-2.webp"
import Certificate1Level3 from "@/assets/level-certificate/certificate-1-level-3.webp"
import Certificate2Level3 from "@/assets/level-certificate/certificate-2-level-3.webp"
import Certificate3Level3 from "@/assets/level-certificate/certificate-3-level-3.webp"
import Certificate4Level3 from "@/assets/level-certificate/certificate-4-level-3.webp"
import Certificate5Level3 from "@/assets/level-certificate/certificate-5-level-3.webp"
import Certificate1Level4 from "@/assets/level-certificate/certificate-1-level-4.webp"
import Certificate1Level5 from "@/assets/level-certificate/certificate-1-level-5.webp"
import Certificate1Level6 from "@/assets/level-certificate/certificate-1-level-6.webp"
import LevelProgram1 from "@/assets/level-program-included/program-1.webp"
import LevelProgram2 from "@/assets/level-program-included/program-2.webp"
import LevelProgram3 from "@/assets/level-program-included/program-3.webp"
import LevelProgram4 from "@/assets/level-program-included/program-4.webp"
import LevelProgram5 from "@/assets/level-program-included/program-5.webp"
import LevelProgram6 from "@/assets/level-program-included/program-6.webp"
import LevetContent1 from "@/assets/level-content/level-content-1.webp"
import LevetContent2 from "@/assets/level-content/level-content-2.webp"
import LevetContent3 from "@/assets/level-content/level-content-3.webp"
import ContentSectionEnroll1 from "@/assets/content-section/level-4-enroll-1.svg"
import ContentSectionEnroll2 from "@/assets/content-section/level-4-enroll-2.svg"
import ContentSectionEnroll3 from "@/assets/content-section/level-4-enroll-3.svg"
import ContentSectionEnroll4 from "@/assets/content-section/level-4-enroll-4.svg"
import ContentSectionEnroll5 from "@/assets/content-section/level-4-enroll-5.svg"
import ContentSectionEnroll6 from "@/assets/content-section/level-4-enroll-6.svg"
import ContentSectionEnroll7 from "@/assets/content-section/level-4-enroll-7.svg"
import ContentSectionEnroll8 from "@/assets/content-section/level-4-enroll-8.svg"
import ContentSectionEnroll9 from "@/assets/content-section/level-4-enroll-9.svg"
import { ContentSectionType } from "@/type/contentSection";

// Level 1 Start

const bannerDataLevel1: BannerType = {
  level: "level 1",
  title: {
    line1: "NLP Practitioner"
  },
  description: "Triple Certification Training Program",
  image: programLevel1.src
};

const LevelIntroWithVideoDataLevel1: LevelIntroWithVideoType = {
  title: {
    line1: "Three Certifications.",
    line2: "One Transformational Experience."
  },
  // video: "https://drive.google.com/file/d/11zrPeNxVtXxnCcxYp4Z58obv0UTOD1BM/view",
  // video: "zU0ArbCST1I",
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774599136/Level1_Intro_pssnhq.mp4",
  thumbnail: ThumbnailIntro1,
  description:
    `<p>Do you feel stuck in a cycle of self-doubt and limiting beliefs? What if you could take complete control of your thoughts, emotions, and actions, starting now? At AL&CO, we don’t just teach NLP—we guide you through a transformative journey that unlocks your potential and reshapes your reality.</p> 
    <p>In this 10-day online NLP Practitioner Training Program, you’ll gain three prestigious certifications and master practical tools to achieve breakthrough results—not only for yourself but for those you coach, lead, and inspire.</p> 
    <p>If you’ve been searching for real change, this program is your answer. Over the course of 10 immersive days, you’ll discover how to turn challenges into opportunities and create the life you deserve; all from the comfort of your home.</p>`,
}

const LevelCertificationDataLevel1: LevelCertificationType = {
  title: {
    line1: "Certifications",
    line2: "3-in-1 NLP Practitioner Certification"
  },
  points: [
    {
      title: `Certified Practitioner of NLP via
        the American Board of
        NLP (ABNLP)`,
      description: "ABNLP is the world’s most considerable NLP authority, making this certification internationally recognized and enabling you to practice NLP techniques in coaching, training and corporate or personal development environments. This certification will provide you with a ‘tool kit’ for leadership techniques, advanced communication, and soft skills.",
      imageBrand: {
        src: AccreditedBrand1,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1Level1,
        alt: "Certificate One"
      },
    },
    {
      title: "Certified Practitioner of Time Line Therapy™ Techniques via Time Line Therapy™ Association (TLTA)",
      description: "The Time Line Therapy™ Association (TLTA) is the world’s largest Time Line Therapy™ organization, making this certification internationally recognized. Timeline Line Therapy™ is acknowledged as the world’s best technique for removing negative emotions and limiting beliefs. The change created through these techniques is long-lasting, as it occurs at a neurological and unconscious level.",
      imageBrand: {
        src: AccreditedBrand2,
        alt: "Accredited Brand Two"
      },
      imageCerficate: {
        src: Certificate2Level2,
        alt: "Certificate Two"
      },
    },
    {
      title: "Certified Practitioner of NLP Coaching via the Coaching Division of ABNLP",
      description: "Coaching is one of the fastest-growing and most rewarding industries on the planet. This certification, certified by the coaching division of the most significant NLP authority, ABNLP, will allow you to kick-start your career as a coach. This is where you will learn how to implement all your new NLP tools in a coaching, mentoring, or leadership environment.",
      imageBrand: {
        src: AccreditedBrand3,
        alt: "Accredited Brand Three"
      },
      imageCerficate: {
        src: Certificate3Level1,
        alt: "Accredited Three"
      },
    }
  ]
}

const LevelBenefitsTableDataLevel1: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "NLP Practitioner Training",
  },

  headers: [
    "Content",
    "Benefits for Personal Development",
    "Benefits for Coaches",
  ],

  points: [
    {
      content: "Definition of NLP",
      values: [
        "Understand how your mind works, allowing you to break free from limiting beliefs.",
        "Equip yourself with foundational NLP knowledge to guide clients confidently.",
      ],
    },
    {
      content: "Themes of NLP",
      values: [
        "Develop clarity and alignment in thoughts and emotions.",
        "Use NLP principles to create structured, impactful coaching sessions that help clients achieve sustainable change.",
      ],
    },
    {
      content: "Ecology",
      values: [
        "Make decisions that align with your values and positively impact your life and relationships.",
        "Guide clients to assess the impact of their goals on their lives, relationships, and overall well-being, ensuring ethical and sustainable growth.",
      ],
    },
    {
      content: "NLP Communication Model",
      values: [
        "Improve your communication to connect with others deeply, reduce misunderstandings, and build stronger relationships.",
        "Teach clients how to communicate effectively and interpret verbal and non-verbal cues to build rapport and influence outcomes.",
      ],
    },
    {
      content: "Presuppositions of NLP",
      values: [
        "Reframe your mindset to embrace positive, empowering beliefs that transform your approach to challenges.",
        "Help clients adopt empowering perspectives that enable growth and dissolve self-limiting beliefs.",
      ],
    },
  ],
};

const LevelProgramIncludesDataLevel1: LevelProgramIncludesType = {
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
        src: LevelProgram1,
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
        src: LevelProgram2,
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
        src: LevelProgram3,
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
        src: LevelProgram4,
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
        src: LevelProgram5,
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
        src: LevelProgram6,
        alt: "Global Network",
      },
    },
  ],
};

const LevelContentDataLevel1: LevelContentType = {
  title: {
    line1: "Content Of NLP Practitioner",
    line2: ""
  },
  points: [
    {
      title: "Neuro Linguistic Programming (NLP)",
      items: [
        "Definition of NLP",
        "Themes of NLP",
        "Ecology",
        "NLP Communication Model",
        "The Presuppositions of NLP",
        "Observing Other People (Sensory Acuity)",
        "Rapport",
        "Representational System (Preference Test)",
        "Predicates",
      ],
      image: {
        src: LevetContent1.src,
        alt: "NLP",
      },
    },
    {
      title: "Timeline Therapy Techniques",
      items: [
        "Prime Directives of the Unconscious Mind",
        "Elicitation of Time Line #1",
        "Elicitation of Time Line #2",
        "First Test of Elicitation",
        "Discovering the Root Cause",
        "Gestalt",
        "General Reframes of TLT",
        "TLT for Anxiety",
        "TLT for Limiting Decisions",
        "The Classic Through-Time & In-Time"
      ],
      image: {
        src: LevetContent2.src,
        alt: "Timeline Therapy",
      },
    },
    {
      title: "NLP Coaching",
      items: [
        "SMART Goals – Wheel of Life",
        "Starting the Coaching Cycle",
        "Ultimate Success Formula (Coaching Method)",
        "Coaching Contract",
        "Internal Drive History",
        "Five Principles for Success",
        "State vs. Goal",
        "Keys to an Achievable Outcome",
        "Well-Formed Conditions for Coaching"
      ],
      image: {
        src: LevetContent3.src,
        alt: "NLP Coaching",
      },
    },
  ],
};

const LevelGraduatesExperienceDataLevel1: LevelGraduatesExperienceType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "NLP Practitioner Training"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774599133/Level1_Review_f8fbjg.mp4",
  thumbnail: ThumbnailReview1,
}

// Level 1 End

// Level 2 Start

const bannerDataLevel2: BannerType = {
  level: "level 2",
  title: {
    line1: "NLP Master Practitioner"
  },
  description: "Triple Certification Training Program",
  image: programLevel2.src,
  className: "bg-center bg-no-repeat bg-primary"
};

const LevelIntroWithVideoDataLevel2: LevelIntroWithVideoType = {
  title: {
    line1: "Master Upgrade of ",
    line2: "Your Mind and Life"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774599143/Level2_Intro_rhs6uo.mp4",
  thumbnail: ThumbnailIntro2,
  description:
    `<p>The NLP Master Practitioner (Triple Certification) Training Program is not just the next step—it’s the quantum leap in your personal and professional transformation. Spanning 13 immersive days, this program takes you on a life-changing journey of empowerment, massive breakthroughs, and advanced mastery.</p>
    <p>Building on the foundation of Level 1, where you learned 40% of NLP tools and techniques, this program dives into the remaining 60% of more profound concepts, advanced techniques, and transformative interventions. It’s where the true mastery begins—operating at both conscious and unconscious levels to create unparalleled results.</p>
    <p>Think of it as constructing a magnificent castle on the solid foundation you built during Level 1. With 50 times more effective, faster, and comprehensive techniques, this training is designed to amplify your skills and bring life-changing outcomes for yourself and those you coach, lead, and inspire.</p>
    <p>After completing this training, life won’t just improve—it will never be the same again.</p>`,

};

const LevelCertificationDataLevel2: LevelCertificationType = {
  title: {
    line1: "Certifications",
    line2: "3-in-1 NLP Master Practitioner Certification"
  },
  points: [
    {
      title: "Certified Master Practitioner of NLP via the American Board of NLP (ABNLP)",
      description: "Become a Certified Master Practitioner of NLP with ABNLP, the world’s leading NLP authority. Master influence, human behavior, and persuasive communication. Unlock coaching, training, and leadership opportunities to create profound transformations. Empower yourself and others with cutting-edge NLP techniques, accelerating professional growth and making a lasting impact.",
      imageBrand: {
        src: AccreditedBrand1,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1Level1,
        alt: "Accredited One"
      },
    },
    {
      title: "Certified Master Practitioner of Time Line Therapy™ Techniques via Time Line Therapy™ Association",
      description: "Become a Certified Master Practitioner of Time Line Therapy™ Techniques with the world’s leading authority, the Time Line Therapy™ Association. Master techniques to release past traumas, dissolve phobias, and eliminate negative emotions. Facilitate deep emotional healing, empower transformation, and help individuals unlock emotional freedom, creating a future unburdened by the past.",
      imageBrand: {
        src: AccreditedBrand2,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate2Level2,
        alt: "Accredited Two"
      },
    },
    {
      title: "Certified Master Practitioner of NLP Coaching via the Coaching Division of ABNLP",
      description: "Become a Certified Master Practitioner of NLP Coaching with ABNLP’s Coaching Division, the world’s leading NLP authority. Master transformative coaching, guide clients to breakthroughs in business, education, and personal growth. Unlock potential, elevate performance, and empower lasting change. This certification is your gateway to a thriving coaching career and global impact.",
      imageBrand: {
        src: AccreditedBrand3,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate3Level3,
        alt: "Accredited Three"
      },
    }
  ]
};

const LevelBenefitsTableDataLevel2: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of Choosing NLP",
    line2: "Master Practitioner Training",
  },

  // 👇 dynamic headers
  headers: [
    "Content",
    "Benefits for Personal Development",
    "Benefits for Coaches",
  ],

  points: [
    {
      content: "Prime Directives of the Unconscious Mind",
      values: [
        "Discover how your unconscious drives habits and emotions, helping you achieve personal breakthroughs.",
        "Leverage this understanding to create coaching strategies that lead to lasting results for clients.",
      ],
    },
    {
      content: "Quantum Linguistics",
      values: [
        "Change the way you think and speak to unlock new possibilities and overcome problems.",
        "Guide clients to use empowering language patterns to create positive change.",
      ],
    },
    {
      content: "Releasing Negative Emotions (TLT #1 & #2)",
      values: [
        "Let go of emotions like anger, sadness, and guilt that hold you back.",
        "Guide clients to release emotional burdens for lasting change.",
      ],
    },
    {
      content: "Emotional Chains",
      values: [
        "Break patterns of emotional reactions and create a calmer, more balanced mindset.",
        "Help clients identify triggers and replace them with empowering responses.",
      ],
    },
    {
      content: "Full Coaching Cycle with NLP & TLT",
      values: [
        "Achieve clarity on your goals and create actionable steps to reach them.",
        "Guide clients through a proven coaching process to help them achieve their goals.",
      ],
    },
    {
      content: "Client Agreements",
      values: [
        "Build trust and ensure clear communication in your relationships.",
        "Establish clear expectations and goals with clients to create productive sessions.",
      ],
    },
  ],
};

const LevelProgramIncludesDataLevel2: LevelProgramIncludesType = {
  title: {
    line1: "This Program Includes",
    line2: ""
  },
  points: [
    {
      title: "13 Days of Immersive, Online Learning",
      description: (
        <p>
          Take the next step in your journey with our dynamic, 13-day live NLP Master Practitioner (Triple Certification) Training. Delve into advanced concepts and techniques in an interactive, engaging environment where learning is practical, transformative, and immediately applicable. Imagine mastering tools that reshape emotions, behaviors, and unconscious patterns—not only for yourself but also for those you guide and influence—all while learning from the comfort of your home.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1,
        alt: "13 Days of Immersive, Online Learning",
      },
    },
    {
      title: "Triple International Certification: Credibility That Sets You Apart",
      description: (
        <>
          <p className="mb-2">
            Earn three globally recognized certifications that signify your expertise and open doors to boundless opportunities:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Certified Master Practitioner of Neuro-Linguistic Programming via The American Board of Neuro-Linguistic Programming (ABNLP-USA): Elevate your skills to lead, influence, and create profound change using advanced NLP techniques.</li>
            <li>Certified Master Practitioner of NLP Coaching via Coaching Division of ABNLP (USA): Guide others with mastery-level coaching tools, empowering them to achieve their goals and unlock their potential.</li>
            <li>Certified Master Practitioner of Time Line Therapy™ Techniques via Time Line Therapy™ Association (TLTA-USA): Master tools to eliminate deep-rooted emotional barriers, limiting beliefs, and unresolved traumas at their root.</li>
          </ul>
        </>
      ),
      theme: "light",
      image: {
        src: LevelProgram2,
        alt: "Triple International Certification: Credibility That Sets You Apart",
      },
    },
    {
      title: "Comprehensive Home Study Materials",
      description: (
        <>
          <p className="mb-2">
            Deepen your expertise with meticulously designed resources, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>A 600+ page NLP Master Practitioner manual covering advanced concepts, techniques, and applications in detail.</li>
            <li>A 100+ page Time Line Therapy™ Techniques manual with practical exercises and applications.</li>
            <li>Worksheets, questionnaires, and action guides to complement and enhance your learning experience.</li>
          </ul>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3,
        alt: "Comprehensive Home Study Materials",
      },
    },
    {
      title: "Exclusive Audio Resources from NLP Pioneer Dr. Tad James",
      description: (
        <>
          <p className="mb-2">
            Access over 250 audio files recorded by Dr. Tad James, a pioneer in the field of NLP. These lessons align with your training materials, allowing you to learn at your own pace and revisit advanced concepts anytime.
            Imagine having a world-renowned mentor guide you through every step of your journey.
          </p>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram4,
        alt: "Exclusive Audio Resources from NLP Pioneer Dr. Tad James",
      },
    },
    {
      title: "Lifetime Access to Training: Your Journey Never Ends",
      description: (
        <p>
          True mastery requires continuous learning. That’s why we provide lifetime access to revisit and revise our NLP Master Practitioner (Triple Certification) Training Program.
          This ensures you’re not just investing in 13 days—you’re investing in a lifetime of growth and evolution.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram5,
        alt: "Lifetime Access to Training: Your Journey Never Ends",
      },
    },
    {
      title: "A Global Support Network: Empowered Together",
      description: (
        <>
          <p className="mb-2">
            Join the thriving AL&CO Global Coaches Support Community, where over 1,000 graduates connect, collaborate, and grow. In this vibrant community, you’ll:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Practice advanced interventions with peers to refine your skills.</li>
            <li>Gain access to expert mentorship and guidance.</li>
            <li>Stay motivated through shared experiences and collaborative learning.</li>
          </ul>
        </>
      ),
      theme: "light",
      image: {
        src: LevelProgram6,
        alt: "A Global Support Network: Empowered Together",
      },
    },
  ],
};

const LevelContentDataLevel2: LevelContentType = {
  title: {
    line1: "Content of NLP Master Practitioner",
    line2: ""
  },
  points: [
    {
      title: "Neuro-Linguistic Programming (NLP)",
      items: [
        "Prime Directives of the Unconscious Mind",
        "Ecology",
        "RAS Reticular Activating System",
        "Quantum Linguistics",
        "Advanced Presuppositions",
        "Cartesian Coordinates",
        "Meta Model III",
        "Modal Operators Deeper Understanding",
        "Time Scramble",
        "Reality Intervention"
      ],
      image: {
        src: LevetContent1.src,
        alt: "Neuro-Linguistic Programming (NLP)",
      },
    },
    {
      title: "Timeline Therapy Techniques",
      items: [
        "Elicitation of Time Line #1 & #2",
        "First Test of Elicitation",
        "Root Cause / Gestalt",
        "General Reframes I & II for TLT",
        "What to do if Clients Associate into Traumatic Memory",
        "Anxiety",
        "Emotional Chains – 1",
        "Changing the Time Line Location/Direction",
        "Setting a Goal and Inserting it into the Future via TLT",
        "Phobia Model",
        "Forensic Regression"
      ],
      image: {
        src: LevetContent2.src,
        alt: "Timeline Therapy Techniques"
      }
    },
    {
      title: "NLP Coaching",
      items: [
        "Client Disclosure and Agreements",
        "Assigning Coaching Tasks",
        "Understanding Coaching and Major Outcomes for Coaching",
        "Working with Clients Underperforming",
        "Increased and Enhancing Performance",
        "Focusing on Future Performance",
        "Integration of Conscious and Unconscious Mind via Coaching",
        "Traditional Therapy vs Coaching",
        "Formats of Coaching"
      ],
      image: {
        src: LevetContent3.src,
        alt: "NLP Coaching"
      }
    }
  ]
};

const LevelGraduatesExperienceDataLevel2: LevelGraduatesExperienceType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "NLP Master Practitioner"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774599132/Level2_Review_psgcmr.mp4",
  thumbnail: ThumbnailReview2,
};

// Level 2 End

// Level 3 Start

const bannerDataLevel3: BannerType = {
  level: "level 3",
  title: {
    line1: "Advanced Hypnotherapy & Interventionist Training"
  },
  description: "Dual Certification Training Program",
  image: programLevel2.src,
  className: "bg-center bg-no-repeat bg-primary"
};

const LevelIntroWithVideoDataLevel3: LevelIntroWithVideoType = {
  title: {
    line1: "Your Chance to Become ",
    line2: "a World-Class Interventionist."
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774599141/Level3_Intro_w093ky.mp4",
  thumbnail: ThumbnailIntro3,
  description: `<p>Hypnotherapy is the process through which the altered states of consciousness can influence positive changes in an individual’s attitudes, perceptions and behaviors. Once you become a hypnotist, you will be able to intertwine communication skills with deep relaxation techniques to assist people to reach a state where the conscious part of their mind is relaxed, and their unconscious part becomes more open to new suggestions or perspectives.</p>
   <p>Hypnotherapy is a powerful tool for creating rapid transformation through healing and rewiring faulty programming at the deepest level of the unconscious mind. Hypnosis helps you get to the root of a problem quickly so that your clients can focus on creating the life they want and deserve.</p>`
};

const LevelCertificationDataLevel3: LevelCertificationType = {
  title: {
    line1: "Certifications",
    line2: ""
  },
  points: [
    {
      title: "Practitioner of Hypnosis via The American Board of Hypnotherapy (ABH)",
      description: "Become a certified Practitioner of Hypnosis with ABH, the world’s largest hypnotherapy board. Master hypnosis for clinical, therapeutic, and coaching applications, creating lasting positive change. Unlock deep unconscious transformation, guiding clients toward breakthroughs and enhancing personal and professional growth with internationally recognized expertise in hypnotherapy.",
      imageBrand: {
        src: AccreditedBrand4,
        alt: "ABH Logo"
      },
      imageCerficate: {
        src: Certificate1Level3,
        alt: "Practitioner Certificate"
      }
    },
    {
      title: "Master Practitioner of Hypnosis via The American Board of Hypnotherapy (ABH)",
      description: "Become a Master Practitioner of Hypnosis with ABH, the world’s largest hypnotherapy board. Master advanced techniques to create profound transformation, unlock the hidden depths of the unconscious mind, and refine trance mastery. Elevate your expertise, integrating hypnosis into coaching for extraordinary breakthroughs and lasting impact.",
      imageBrand: {
        src: AccreditedBrand4,
        alt: "ABH Master Logo"
      },
      imageCerficate: {
        src: Certificate2Level3,
        alt: "Master Practitioner Certificate"
      }
    },
    {
      title: "Master Practitioner of Hypnotherapy via National Guild of Hypnotists (NGH)",
      description: "Become a Certified Master Hypnotist, Consulting Hypnotist, or Hypnotherapist with NGH. Gain a prestigious one-year membership and unlock global opportunities. This certification includes expert manuals, marketing strategies, and success guidelines to build a thriving hypnosis practice worldwide.",
      imageBrand: {
        src: AccreditedBrand4,
        alt: "NGH Logo"
      },
      imageCerficate: {
        src: Certificate3Level3,
        alt: "NGH Certificate"
      }
    },
    {
      title: "Quintuple Certification Holder via Arslan Larik & Company (AL&CO)",
      description: "An exclusive honor for AL&CO graduates who’ve mastered NLP, Time Line Therapy®, NLP Coaching, and Hypnosis. This elite set of certifications are accredited by globally renowned bodies, recognizing your expertise at the highest international standards.",
      imageBrand: {
        src: AccreditedBrand5,
        alt: "AL&CO Logo"
      },
      imageCerficate: {
        src: Certificate4Level3,
        alt: "AL&CO Certificate"
      }
    },
    {
      imageCerficate: {
        src: Certificate5Level3,
        alt: "Final Certificate"
      }
    }
  ]
};

const LevelBenefitsTableDataLevel3: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of",
    line2: "Advanced Hypnotherapy & Interventionist Training",
  },

  // 👇 dynamic headers
  headers: [
    "Content",
    "Benefits for Personal Development",
    "Benefits for Coaches",
  ],

  points: [
    {
      content: "History of Hypnosis",
      values: [
        "Discover how hypnosis evolved from ancient practices to modern science-backed therapy, deepening self-awareness and unconscious mastery.",
        "Learn foundational principles that enhance your credibility and ability to explain hypnosis effectively to clients.",
      ],
    },
    {
      content: "Working with Abreaction and Secondary Gains",
      values: [
        "Release suppressed emotions, overcome self-sabotaging behaviors, and create deep emotional healing.",
        "Guide clients through emotional catharsis safely, addressing unconscious blocks for lasting change.",
      ],
    },
    {
      content: "Mastering Conversational Hypnosis",
      values: [
        "Enhance your ability to influence and communicate persuasively in everyday interactions, fostering deeper connections.",
        "Seamlessly induce trance states through conversation, bypassing conscious resistance and facilitating unconscious transformation.",
      ],
    },
    {
      content: "Fundamentals of Ericksonian Hypnosis",
      values: [
        "Develop mental flexibility, enhance problem-solving skills, and use metaphors for self-reprogramming.",
        "Master indirect suggestions and storytelling to create effortless, resistance-free hypnosis sessions.",
      ],
    },
    {
      content: "Hypnotic Patterns",
      values: [
        "Rewire thought processes for greater confidence, motivation, and personal growth.",
        "Apply structured language patterns to deepen trance, enhance suggestibility, and accelerate client breakthroughs.",
      ],
    },
  ],
};

const ContentSectionDataLevel1: ContentSectionType = {
  title: "An Authority in Transformation",
  description: (
    <div className="max-w-7xl mx-auto">
      <p className="my-4">
        As the <strong>Master Trainer and Managing Director of AL&CO,</strong> Arslan has set new standards in coaching, training, and personal development. His dynamic, results-driven programs equip participants with the tools to:
      </p>
      <p className="mt-4">
        Arslan’s ability to simplify complex concepts while delivering impactful solutions has made him a <strong>trusted mentor for individuals, professionals,</strong> and organizations worldwide.
      </p>
    </div>
  ),
  fullBg: "bg-slate-100 ",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
}

const LevelProgramIncludesDataLevel3: LevelProgramIncludesType = {
  title: {
    line1: "This Program Includes",
    line2: ""
  },
  points: [
    {
      title: "Twelve Intensive Days of Online Training",
      description: (
        <>
          <p className="mb-2">
            <strong>Delivered in Two Manageable Modules:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="me-1">Module 1 (5 Days):</strong>Training content from The American Board of Hypnotherapy (ABH-USA).</li>
            <li><strong className="me-1">Module 2 (7 Days):</strong>Training content from The National Guild of Hypnotists (NGH-USA).</li>
          </ul>
          <p className="my-2">
            <strong className="me-1">Led by Arslan Larik:</strong>
            A globally acclaimed Master Trainer of Hypnotherapy via ABH & NGH.
          </p>
          <p>
            <strong className="me-1">Hands-On Training:</strong>
            Build real-world proficiency in hypnosis techniques under the direct mentorship of Master Trainer Arslan Larik.
          </p>
        </>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1,
        alt: "Online Training",
      },
    },
    {
      title: "Dual Certifications via Prestigious Global Boards",
      description: (
        <>
          <p>
            Certified Practitioner of Hypnosis (ABH-USA).
          </p>
          <p>
            Certified Master Practitioner of Hypnosis (ABH-USA).
          </p>
          <p>
            Certified Master Hypnotherapy (NGH-USA).
          </p>
        </>
      ),
      theme: "light",
      image: {
        src: LevelProgram2,
        alt: "Certifications",
      },
    },
    {
      title: "One-Year Paid NGH Board Membership",
      description: (
        <>
          <p>Access exclusive NGH resources, research, and professional support.</p>
          <p>Become a standing board member within the global hypnotherapy community.</p>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3,
        alt: "NGH Membership",
      },
    },
    {
      title: "Mastery of 7-Path Self-Hypnosis",
      description: (
        <>
          <p>Learn and master a self-hypnosis methodology that combines hypnosis with personal growth strategies.</p>
        </>
      ),
      // title: "Comprehensive Training Materials",
      // description: (
      //   <>
      //     <p className="mb-2">
      //       Receive extensive learning resources to support your journey:
      //     </p>
      //     <ul className="list-disc pl-5 space-y-1">
      //       <li>2 approved manuals from the American Board of Hypnotherapy</li>
      //       <li>4 approved manuals from the National Guild of Hypnotists</li>
      //       <li>3 bonus home study manuals for advanced learning</li>
      //       <li>Access to 500+ hypnotic scripts</li>
      //       <li>Exclusive Hypnosis Video Library by NGH</li>
      //     </ul>
      //   </>
      // ),
      theme: "yellow",
      image: {
        src: LevelProgram4,
        alt: "Training Materials",
      },
    },
    {
      title: "Honorary Quintuple Acknowledgement Certificate",
      description: (
        <p>
          Receive an honorary Quintuple Certification Holder Certificate via AL&CO.
        </p>
      ),
      theme: "light",
      image: {
        src: LevelProgram5,
        alt: "Self Hypnosis",
      },
    },
    {
      title: "Comprehensive Training Materials",
      description: (
        <>
          <p className="mb-2">
            <strong>
              Training Manuals:
            </strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>2 approved manuals from The American Board of Hypnotherapy</li>
            <li>4 approved manuals from The National Guild of Hypnotists</li>
            <li>3 bonus home study manuals for advanced learning</li>
          </ul>
          <p className="my-2">
            <strong>
              Additional Resources:
            </strong>
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access to 500+ hypnotic scripts as a bonus</li>
            <li>Exclusive access to the extensive Hypnosis Video Library by the National Guild of Hypnotists</li>
          </ul>
        </>
      ),
      theme: "dark",
      image: {
        src: LevelProgram6,
        alt: "Lifetime Access",
      },
    },
    {
      title: "Lifetime Access to Training Content",
      description: (
        <p>
          Enjoy unlimited access to training materials, allowing you to revisit, revise, and strengthen your skills anytime through AL&CO.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram4,
        alt: "Training Materials",
      },
    },
  ],
};

const LevelContentDataLevel3: LevelContentType = {
  title: {
    line1: "Content of Advanced Hypnotherapy and Interventionist Training",
    line2: ""
  },
  points: [
    {
      title: "Core Hypnosis Foundations",
      items: [
        "History of Hypnosis",
        "Working with Abreaction and Secondary Gains",
        "Mastering Conversational Hypnosis",
        "Fundamentals of Ericksonian Hypnosis",
        "Hypnotic Patterns",
        "Direct & Indirect Suggestions",
        "Embedded Commands",
        "Truism about Sensations",
        "Truism Utilizing Time",
        "Not Knowing, Not Doing"
      ],
      image: {
        src: LevetContent1.src,
        alt: "Core Hypnosis Topics",
      },
    },
    {
      title: "Advanced Hypnotic Techniques",
      items: [
        "Open-Ended Suggestions",
        "Covering all possibilities of Response",
        "To Focus Attention",
        "Facilitating Internal Change",
        "Compound Suggestions",
        "Implication and Implied Directives",
        "Bind and Double Binds",
        "Multi-Level Communication",
        "Pre-Induction and Preparation for Trance",
        "Hypnotic Contract"
      ],
      image: {
        src: LevetContent2.src,
        alt: "Advanced Hypnosis Techniques",
      },
    },
    {
      title: "Professional Practice & Client Mastery",
      items: [
        "Client Assessment and Goal Setting",
        "Building Rapport and Trust",
        "Ethics and Professional Standards in Hypnosis",
        "Designing Effective Hypnosis Sessions",
        "Handling Resistance in Clients",
        "Deepening Techniques for Trance",
        "Post-Hypnotic Suggestions",
        "Session Structuring and Flow",
        "Tracking Client Progress",
        "Delivering Transformational Results"
      ],
      image: {
        src: LevetContent3.src,
        alt: "Professional Hypnosis Practice",
      },
    }
  ]
};

const LevelGraduatesExperienceDataLevel3: LevelGraduatesExperienceType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "Advanced Hypnotherapy & Interventionist Training"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774599132/Level3_Review_jzdltq.mp4",
  thumbnail: ThumbnailReview3,
};

// Level 3 End

// Level 4 Start

const bannerDataLevel4: BannerType = {
  level: "level 4",
  title: {
    line1: "NLP Trainers’ Training And Evaluation Certification Program"
  },
  // description: "Dual Certification Training Program",
  image: programLevel2.src,
  className: "bg-center bg-no-repeat bg-primary"
};

const LevelIntroWithVideoDataLevel4: LevelIntroWithVideoType = {
  title: {
    line1: "Master the Art of ",
    line2: "Transformational Speaking and Training "
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774603562/Level4_Intro_otvc3u.mp4",
  thumbnail: ThumbnailIntro4,
  description: `<p>Step into the spotlight with unparalleled confidence, captivate every audience you address, and inspire change at every level. The NLP Trainer’s Training & Evaluation Certification by Arslan Larik & Company is more than a program—it’s a journey to becoming a transformational leader, a world-class presenter, and a certified NLP Trainer capable of influencing lives globally.</p>`
};

const LevelCertificationDataLevel4: LevelCertificationType = {
  title: {
    line1: "Certifications",
    line2: "NLP Trainers’ Training And Evaluation Certification"
  },
  points: [
    {
      title: `Certified NLP Trainer via the American Board of Neuro-Linguistic Programming (ABNLP)`,
      description: "This globally recognized certification establishes you as a Certified NLP Trainer, empowering you to deliver NLP training, certify NLP Practitioners and Master Practitioners, and lead transformational programs. Accredited by ABNLP, this certification validates your expertise in advanced training methodologies, public speaking, and personal development, positioning you as a world-class NLP Trainer.",
      imageBrand: {
        src: AccreditedBrand1,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1Level4,
        alt: "Certificate One"
      },
    }
  ]
}

const LevelBenefitsTableDataLevel4: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of",
    line2: "NLP Trainers’ Training Program",
  },

  headers: [
    "Content",
    "Benefits for NLP Trainer",
  ],

  points: [
    {
      content: "Be the Best Presenter",
      values: [
        "Learn to take the stage with confidence and develop a presentation style that commands attention. Deliver captivating and persuasive speeches every time.",
      ],
    },
    {
      content: "Move Audiences Enthusiastically",
      values: [
        "Master the art of connecting emotionally with audiences through storytelling, humor, and advanced communication strategies that inspire action.",
      ],
    },
    {
      content: "Present Magically to Global Audiences",
      values: [
        "Gain the skills to adapt your message to any cultural or professional setting, ensuring impactful and memorable presentations worldwide.",
      ],
    },
    {
      content: "Inspire from Anywhere, Anytime",
      values: [
        "Whether online or in person, learn to deliver your message with clarity, passion, and purpose, inspiring transformation across platforms.",
      ],
    },
    {
      content: "Raise Your Professional Profile",
      values: [
        "Establish yourself as a credible and sought-after NLP Trainer, presenter, and speaker. Differentiate yourself in a competitive market.",
      ],
    },
    {
      content: "Create a Unique Edge as a Trainer",
      values: [
        "Whether you’re a corporate trainer, coach, presenter, or MC, develop a unique and compelling style that sets you apart and propels your career forward.",
      ],
    },
  ],
};

const ContentSectionImgContentListData4: ContentSectionType = {
  title: "An Authority in Transformation",
  contentlist: [
    {
      title: "Professional Trainers",
      description: "Elevate your credentials and gain the tools to lead dynamic, engaging training sessions.",
      src: ContentSectionEnroll1.src,
      alt: "Professional Trainers",
    },
    {
      title: "Aspiring",
      description: "Build the foundation for a successful career in NLP training.",
      src: ContentSectionEnroll2.src,
      alt: "Trainers",
    },
    {
      title: "Corporate",
      description: "Enhance your leadership and communication skills to inspire teams and drive results.",
      src: ContentSectionEnroll3.src,
      alt: "Leaders",
    },
    {
      title: "Personal Growth Enthusiasts",
      description: "Experience unparalleled personal transformation while gaining professional expertise.",
      src: ContentSectionEnroll4.src,
      alt: "Personal Growth Enthusiasts",
    },
  ],
  fullBg: "bg-slate-100 ",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 px-4 ",
}

const LevelProgramIncludesDataLevel4: LevelProgramIncludesType = {
  title: {
    line1: "WHY BECOME AN NLP TRAINER?",
    line2: ""
  },
  points: [
    {
      title: "Master Public Speaking & Presentation Skills",
      description: (
        <p>
          Overcome the fear of public speaking and learn how to command the room. With AL&CO’s training, you’ll develop an unstoppable stage presence and become a presenter who moves, captivates, and inspires audiences effortlessly.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1,
        alt: "",
      },
    },
    {
      title: "Empower Others",
      description: (
        <p>
          Unlock the tools to help others break free from limitations, transform their thinking, and achieve their goals. As an NLP Trainer, you’ll guide individuals and groups through life-changing journeys, leaving a lasting impact.
        </p>
      ),
      theme: "light",
      image: {
        src: LevelProgram2,
        alt: "",
      },
    },
    {
      title: "Gain Global Recognition",
      description: (
        <p>
          As a certified NLP Trainer accredited by ABNLP (American Board of Neuro-Linguistic Programming), you’ll join an elite group of trainers recognized internationally, opening doors to limitless professional opportunities.
        </p>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3,
        alt: "",
      },
    },
    {
      title: "Advance Your Career",
      description: (
        <>
          <p className="">
            Elevate your professional profile as a coach, corporate trainer, or business leader. With the authority to certify others as NLP Practitioners and Master Practitioners, you’ll establish yourself as a thought leader in personal and professional development.
          </p>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram4,
        alt: "",
      },
    },
    {
      title: "Personal Transformation",
      description: (
        <p>
          Teaching others is the ultimate path to mastering yourself. Through this training, you’ll experience profound growth, refine your communication skills, and step into your best self.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram5,
        alt: "",
      },
    }
  ],
};

const LevelContentDataLevel4: LevelContentType = {
  title: {
    line1: "What You Will Learn",
    line2: ""
  },
  points: [
    {
      title: "Stage Mastery",
      items: [
        "Develop an unbeatable stage presence and learn to captivate any audience."
      ],
      image: {
        src: LevetContent1.src,
        alt: ""
      }
    },
    {
      title: "Training Design",
      items: [
        "Learn how to design impactful workshops and training programs that inspire and deliver measurable results"
      ],
      image: {
        src: LevetContent2.src,
        alt: ""
      }
    },
    {
      title: "Versatile Training Styles",
      items: [
        "Learn how to train audiences with diverse backgrounds and different learning preferences."
      ],
      image: {
        src: LevetContent3.src,
        alt: ""
      }
    },
    {
      title: "Group Leadership Skills",
      items: [
        "Master the art of leading diverse groups in workshops, seminars, and corporate environments."
      ],
      image: {
        src: LevetContent3.src,
        alt: ""
      }
    },
    {
      title: "Handling Difficult Participants",
      items: [
        "Learn the art of handling difficult participants while maintaining the decorum of the training and learning environment."
      ],
      image: {
        src: LevetContent1.src,
        alt: ""
      }
    },
    {
      title: "Confidence Building",
      items: [
        " Transform into a leader who exudes charisma, confidence, and influence."
      ],
      image: {
        src: LevetContent2.src,
        alt: ""
      }
    }
  ]
};

const LevelGraduatesExperienceDataLevel4: LevelGraduatesExperienceType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "NLP Trainers’ Training"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774603567/Level4_Review_jh6n5s.mp4",
  thumbnail: ThumbnailReview4,

};

// Level 4 End

// Level 5 Start

const bannerDataLevel5: BannerType = {
  level: "level 5",
  title: {
    line1: "Hypnosis Trainer’s Training Certification and Evaluation Program"
  },
  // description: "Dual Certification Training Program",
  image: programLevel2.src,
  className: "bg-center bg-no-repeat bg-primary"
};

const LevelIntroWithVideoDataLevel5: LevelIntroWithVideoType = {
  title: {
    line1: "Transform Lives,  ",
    line2: "Empower Change, and Create Global Impact"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774603567/Level5_intro_jy8cqr.mp4",
  thumbnail: ThumbnailIntro5,
  description: `<p>Are you ready to go beyond learning hypnosis and take the stage to train others in this fascinating field?</p>
   <p>If yes, then Hypnosis Trainer’s Training by Arslan Larik & Company (AL&CO) is your next step. This transformational training is designed to equip you with the skills, tools, and confidence to become an exceptional Hypnosis Trainer accredited by The American Board of Hypnotherapy (ABH). Whether you’re new to hypnosis or an experienced practitioner, this program will elevate your expertise to new heights and empower you to inspire others.</p>`
};

const LevelCertificationDataLevel5: LevelCertificationType = {
  title: {
    line1: "Certifications",
    line2: "Hypnosis Trainer’s Training Certification and Evaluation"
  },
  points: [
    {
      title: `Certified Hypnosis Trainer via the American Board of Hypnotherapy (ABH)`,
      description: "This globally recognized certification establishes you as a Certified Hypnosis Trainer, empowering you to train and certify Hypnosis Practitioners and Master Practitioners. Accredited by ABH, this certification validates your expertise in hypnosis techniques, training design, and transformational influence, positioning you as a leading hypnosis trainer with the authority to impact lives worldwide.",
      imageBrand: {
        src: AccreditedBrand1,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1Level5,
        alt: "Certificate One"
      },
    }
  ]
}

const LevelBenefitsTableDataLevel5: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of",
    line2: "Hypnosis Trainers’ Training Program",
  },

  // 👇 headers
  headers: [
    "Content",
    "Benefits for Hypnosis Trainer",
  ],

  points: [
    {
      content: "Master the Art of Hypnosis Training",
      values: [
        "Learn how to teach and inspire others with confidence and charisma, whether you’re training in a workshop or leading a large audience.",
      ],
    },
    {
      content: "Ready-to-Go Hypnosis Materials",
      values: [
        "Receive pre-designed training manuals, slides, and resources to help you start training immediately.",
      ],
    },
    {
      content: "Teach with Global Recognition",
      values: [
        "Certify your students under the ABH banner, the world’s largest hypnosis organization, ensuring their credentials are globally respected.",
      ],
    },
    {
      content: "Diverse Applications of Hypnosis",
      values: [
        "From therapeutic environments to corporate wellness and stage hypnosis, this training opens doors to multiple career paths.",
      ],
    },
    {
      content: "Lifetime Support from AL&CO",
      values: [
        "Join our exclusive community of Hypnosis Trainers and enjoy unlimited support, guidance, and networking opportunities.",
      ],
    },
  ],
};

const ContentSectionDataLevel5: ContentSectionType = {
  title: "Why Hypnosis?",
  description: (
    <>
      <p className="my-4">
        <strong>Hypnosis </strong> is a natural and powerful tool for accessing the unconscious mind, enabling transformation at the deepest level. It’s a practice that fosters relaxation, healing, and personal empowerment. As a Hypnosis Trainer, you will not only master these techniques but also guide others to use them effectively—unlocking their true potential and creating lasting impact.
      </p>
      <p className="my-4">
        <strong>Through hypnosis, individuals can: </strong>
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Overcome limiting beliefs and behaviors.</li>
        <li>Enhance focus, creativity, and productivity.</li>
        <li>Heal emotional wounds & Traumas.</li>
        <li>Reduce Stress & Anxiety.</li>
        <li>Access untapped personal potential for success and fulfillment.</li>
      </ul>
    </>
  ),
  // underline: true,
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
  textAlign: "text-start",
  fullBg: "bg-slate-100 ",
}

const ContentSectionImgContentListData5: ContentSectionType = {
  title: "WHO SHOULD ENROLL?",
  contentlist: [
    {
      title: "Hypnosis Practitioners",
      description: "Ready to take their skills to the next level by teaching others.",
      src: ContentSectionEnroll1.src,
      alt: "Hypnosis Practitioners",
    },
    {
      title: "Coaches & Therapists",
      description: "Wanting to expand their toolkit with powerful hypnosis techniques.",
      src: ContentSectionEnroll5.src,
      alt: "Coaches & Therapists",
    },
    {
      title: "Corporate Trainers",
      description: "Seeking to incorporate hypnosis into corporate wellness programs.",
      src: ContentSectionEnroll3.src,
      alt: "Corporate Trainers",
    },
    {
      title: "Aspiring Hypnosis Trainerss",
      description: "Looking to gain recognition and start a fulfilling career in hypnosis training.",
      src: ContentSectionEnroll2.src,
      alt: "Aspiring Hypnosis Trainers",
    },
  ],
  fullBg: "bg-slate-100 ",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
}

const LevelProgramIncludesDataLevel5: LevelProgramIncludesType = {
  title: {
    line1: "Why Become a Hypnosis Trainer?",
    line2: ""
  },
  points: [
    {
      title: "Master Your Craft",
      description: (
        <p>
          Becoming a Hypnosis Trainer means achieving mastery in both practicing and teaching hypnosis. You’ll gain a deep understanding of how hypnosis works and the tools to inspire transformation in others.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1,
        alt: "",
      },
    },
    {
      title: "Teach & Inspire",
      description: (
        <p>
          Equip your students with the knowledge and techniques to help others create positive, lasting change. As a trainer, you’ll play a vital role in spreading the life-changing benefits of hypnosis.
        </p>
      ),
      theme: "light",
      image: {
        src: LevelProgram2,
        alt: "",
      },
    },
    {
      title: "Global Recognition",
      description: (
        <p>
          At AL&CO, we certify our graduates through the American Board of Hypnotherapy (ABH) as certified Trainers of Hypnosis, ensuring your credentials are respected and recognized worldwide.
        </p>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3,
        alt: "",
      },
    },
    {
      title: "Expand Your Career Opportunities",
      description: (
        <>
          <p className="mb-2">
            As a certified Hypnosis Trainer, you can lead workshops, launch your own Hypnosis Practitioner and Master Practitioner Batches, train and certify students, offer corporate wellness programs, or even host hypnosis stage shows. The possibilities are endless!
          </p>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram4,
        alt: "",
      },
    },
    {
      title: "Create Meaningful Impact",
      description: (
        <p>
          Transform lives by teaching others how to use hypnosis for personal growth, professional success, and emotional well-being.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram5,
        alt: "",
      },
    }
  ],
};

const LevelContentDataLevel5: LevelContentType = {
  title: {
    line1: "What You Will Learn",
    line2: ""
  },
  points: [
    {
      title: "Teaching 5 Types of Hypnosis",
      items: [
        "Master the skills to train others in Ericksonian Hypnosis, Estabrooks Hypnosis, Elman Hypnosis, Krasner Hypnosis, and Direct Authoritarian Hypnosis."
      ],
      image: {
        src: LevetContent1.src,
        alt: ""
      }
    },
    {
      title: "Conversational Hypnosis & Deep Trance Phenomena",
      items: [
        "Learn how to guide individuals into deep trance states and influence positive change through conversational techniques."
      ],
      image: {
        src: LevetContent2.src,
        alt: ""
      }
    },
    {
      title: "Designing & Leading Hypnosis Trainings",
      items: [
        "Gain the knowledge and tools to run your own hypnosis workshops and certify Practitioners and Master Practitioners of Hypnosis."
      ],
      image: {
        src: LevetContent3.src,
        alt: ""
      }
    },
    {
      title: "Advanced Hypnosis Applications",
      items: [
        "Develop the expertise to conduct hypnosis introduction workshops, and advanced trainings in Hypnosis in corporate sector."
      ],
      image: {
        src: LevetContent3.src,
        alt: ""
      }
    }
  ]
};

const LevelGraduatesExperienceDataLevel5: LevelGraduatesExperienceType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "Hypnosis Trainers’ Training"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774603571/Level5_Review_q1l8ff.mp4",
  thumbnail: ThumbnailReview5,

};

// Level 5 End

// Level 6 Start

const bannerDataLevel6: BannerType = {
  level: "level 6",
  title: {
    line1: "NLP MASTER TRAINER PROGRAM"
  },
  description: "Dual Certification Training Program",
  image: programLevel2.src,
  className: "bg-center bg-no-repeat bg-primary"
};

const LevelIntroWithVideoDataLevel6: LevelIntroWithVideoType = {
  title: {
    line1: "Your Pathway to Global",
    line2: "Recognition and Transformational Leadership"
  },
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774603569/Level6_Intro_oscnrq.mp4",
  thumbnail: ThumbnailIntro6,
  description: `<p>The NLP Master Trainer Program is a global mentoring program designed for results-focused NLP Trainers who want to elevate their training businesses, deepen their expertise, and gain international recognition. This program provides a comprehensive system to help you achieve mastery in NLP while excelling in business, marketing, and coaching.</p>`
};

const LevelCertificationDataLevel6: LevelCertificationType = {
  title: {
    line1: "Certifications",
    line2: "NLP MASTER TRAINER PROGRAM Certification"
  },
  points: [
    {
      title: `Certified NLP Master Trainer via the American Board of Neuro-Linguistic Programming (ABNLP)`,
      description: "This prestigious certification establishes you as a Certified NLP Master Trainer, empowering you to train and certify NLP Trainers, lead global transformations, and build a thriving NLP business. Accredited by ABNLP, this certification validates your mastery in advanced NLP training, leadership, and coaching, positioning you as a top-tier authority in the NLP industry.",
      imageBrand: {
        src: AccreditedBrand1,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1Level6,
        alt: "Certificate One"
      },
    }
  ]
}

const ContentSectionContentListData6: ContentSectionType = {
  title: "The Two Pathways to Becoming an NLP Master Trainer",
  description: `Whether you’re eager to fast-track your journey or prefer a steady, balanced approach, our program offers two pathways to becoming an NLP Master Trainer.`,
  contentlist: [
    {
      title: "1. Accelerated Pathway (3 Years):",
      description: (
        <div className="text-gray-600">
          <p className="my-4">
            This fast-track program is ideal for trainers driven to achieve results quickly. You will:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>In three years, complete mandatory requirements, including training milestones and business projects.</li>
            <li>Receive mentorship and hands-on guidance to rapidly set up and scale your NLP Trainer business.</li>
            <li>Be eligible for advanced mentoring for continued professional development in years 4 and 5.</li>
          </ul>
        </div>
      ),
      textAlign: "text-start px-4"
    },
    {
      title: "2. Relaxed Pathway (5 Years):",
      description: (
        <div className="text-gray-600">
          <p className="my-4">
            This pathway is perfect for those who want to balance growth with other commitments. You will:
          </p>
          <ul className="list-disc pl-5 space-y-1 ">
            <li>Progress at your own pace, completing milestones over five years.</li>
            <li>Build a solid foundation in business, marketing, and training mastery.</li>
            <li>Enjoy long-term mentorship and access to resources to ensure sustainable growth.</li>
          </ul>
        </div>
      ),
      textAlign: "text-start px-4"
    },
  ],
  detailContent: (
    <div className="text-start max-w-4xl mx-auto pt-4 md:pt-6 lg:pt-8 xl:pt-12 ">
      <p className="">
        <strong>After the Program; Upon completing the NLP Master Trainer Program, you will</strong>
      </p>
      <ul className="list-disc pl-5 space-y-1 mt-4">
        <li><strong>Certify NLP Trainers:</strong> As an NLP Master Trainer, you will have the authority to train and certify others to become NLP Trainers.</li>
        <li><strong>Create Global Impact:</strong> Lead transformational workshops, seminars, and certifications that change lives worldwide.</li>
        <li><strong>Build a Legacy:</strong> Join the elite ranks of NLP leaders who leave a lasting mark on the world.</li>
      </ul>
    </div>
  ),
  contentlistColumn: "grid-cols-2 gap-6 max-w-4xl",
  fullBg: "bg-slate-100 ",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
}

const LevelBenefitsTableDataLevel6: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of",
    line2: "NLP Master Trainer Program",
  },

  headers: [
    "Content",
    "Benefits for NLP Master Trainer",
  ],

  points: [
    {
      content: "Personalized Mentorship",
      values: [
        "Receive one-on-one coaching and mentoring from Arslan Larik and his team to refine your skills and achieve your goals.",
      ],
    },
    {
      content: "Global Community",
      values: [
        "Join a network of elite NLP Trainers who share knowledge, collaborate, and inspire one another.",
      ],
    },
    {
      content: "Transformational Learning",
      values: [
        "Experience cutting-edge training methods that elevate your capabilities as a trainer and leader.",
      ],
    },
    {
      content: "Proven Business Systems",
      values: [
        "Learn and implement systems that guarantee growth and sustainability in your NLP business.",
      ],
    },
    {
      content: "Lifetime Support",
      values: [
        "Enjoy continued access to resources, webinars, and coaching to keep your skills sharp and your business thriving.",
      ],
    },
  ],
};

const ContentSectionImgContentListData6: ContentSectionType = {
  title: "WHO SHOULD ENROLL?",
  contentlist: [
    {
      title: "NLP Trainers",
      description: "Ready to take the next step and train other trainers.",
      src: ContentSectionEnroll6.src,
      alt: "NLP Trainers",
    },
    {
      title: "Business Owners",
      description: "Seeking to grow a successful and scalable NLP coaching and training business.",
      src: ContentSectionEnroll7.src,
      alt: "Business Owners",
    },
    {
      title: "Global Leaders",
      description: "Committed to creating a lasting impact in the NLP community.",
      src: ContentSectionEnroll8.src,
      alt: "Global Leaders",
    },
    {
      title: "Visionaries",
      description: "Driven by the mission to transform lives and leave a legacy.",
      src: ContentSectionEnroll9.src,
      alt: "Visionaries",
    },
  ],
  fullBg: "bg-slate-100 ",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
}

const LevelProgramIncludesDataLevel6: LevelProgramIncludesType = {
  title: {
    line1: "Why Join the NLP Master Trainer Program?",
    line2: ""
  },
  points: [
    {
      title: "Master Your Craft",
      description: (
        <p>
          Elevate your skills to the highest level. As an NLP Master Trainer, you’ll refine your ability to train and certify NLP Trainers, making an impact on a global scale.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1,
        alt: "",
      },
    },
    {
      title: "Build a Thriving Business ",
      description: (
        <p>
          Learn proven strategies to grow your NLP training business year after year. From marketing to business development, this program covers everything you need to succeed in a competitive industry.
        </p>
      ),
      theme: "light",
      image: {
        src: LevelProgram2,
        alt: "",
      },
    },
    {
      title: "Gain Global Recognition",
      description: (
        <p>
          Be certified by ABNLP and join the ranks of internationally respected NLP leaders. Your credentials will position you as an authority in the NLP community.
        </p>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3,
        alt: "",
      },
    },
    {
      title: "Exclusive Access to AL&CO Resources",
      description: (
        <>
          <p className="mb-2">
            Get lifetime access to manuals, slides, audios, and business tools that have been fine-tuned to produce results.
          </p>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram4,
        alt: "",
      },
    },
    {
      title: "Mentorship and Networking",
      description: (
        <p>
          Be guided by Arslan Larik, Pakistan’s first and only NLP Master Trainer certified via ABNLP, and connect with a global network of NLP Trainers.
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram5,
        alt: "",
      },
    }
  ],
};

const LevelContentDataLevel6: LevelContentType = {
  title: {
    line1: "What You Will Learn",
    line2: "",
  },
  points: [
    {
      title: "Unparalleled Training Expertise",
      items: [
        "Master the art of training other trainers.",
        "Develop skills to create captivating, results-driven workshops and certifications.",
        "Develop an unbeatable stage presence and learn to captivate any audience.",
      ],
      image: {
        src: LevetContent1.src,
        alt: "Training Expertise",
      },
    },
    {
      title: "Business Growth Strategies",
      items: [
        "Learn how to market and grow your NLP business globally.",
        "Create a marketing plan to establish yourself as a global brand.",
        "Build a network of loyal clients and trainers who trust your leadership.",
      ],
      image: {
        src: LevetContent2.src,
        alt: "Business Growth",
      },
    },
    {
      title: "Global Recognition",
      items: [
        "Be certified by ABNLP, the world’s largest NLP authority.",
        "Gain credibility as a leader in the NLP community, nationally and internationally.",
      ],
      image: {
        src: LevetContent3.src,
        alt: "Global Recognition",
      },
    },
    {
      title: "Access to AL&CO’s Exclusive Resources",
      items: [
        "Training manuals, PowerPoint slides, and audios.",
        "Weekly webinars and access to a members-only portal.",
        "Priority opportunities to assist at AL&CO training events worldwide.",
      ],
      image: {
        src: LevetContent3.src,
        alt: "Resources",
      },
    }
  ],
};

const LevelGraduatesExperienceDataLevel6: LevelGraduatesExperienceType = {
  title: {
    line1: "Benefits of Choosing",
    line2: "NLP Master Trainer"
  },
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",

};

// Level 6 End

export const programs: ProgramType[] = [
  {
    slug: "nlp-practitioner",
    BannerData: bannerDataLevel1,
    LevelIntroWithVideoData: LevelIntroWithVideoDataLevel1,
    LevelCertificationData: LevelCertificationDataLevel1,
    LevelBenefitsTableData: LevelBenefitsTableDataLevel1,
    LevelProgramIncludesData: LevelProgramIncludesDataLevel1,
    LevelContentData: LevelContentDataLevel1,
    LevelGraduatesExperienceData: LevelGraduatesExperienceDataLevel1,
  },

  {
    slug: "nlp-master-practitioner",
    BannerData: bannerDataLevel2,
    LevelIntroWithVideoData: LevelIntroWithVideoDataLevel2,
    LevelCertificationData: LevelCertificationDataLevel2,
    LevelBenefitsTableData: LevelBenefitsTableDataLevel2,
    LevelProgramIncludesData: LevelProgramIncludesDataLevel2,
    LevelContentData: LevelContentDataLevel2,
    LevelGraduatesExperienceData: LevelGraduatesExperienceDataLevel2,
  },

  {
    slug: "advanced-hypnotherapy-interventionis",
    title: "Advanced Hypnotherapy Training",
    BannerData: bannerDataLevel3,
    LevelIntroWithVideoData: LevelIntroWithVideoDataLevel3,
    LevelCertificationData: LevelCertificationDataLevel3,
    LevelBenefitsTableData: LevelBenefitsTableDataLevel3,
    ContentSectionData: ContentSectionDataLevel1,
    LevelProgramIncludesData: LevelProgramIncludesDataLevel3,
    LevelContentData: LevelContentDataLevel3,
    LevelGraduatesExperienceData: LevelGraduatesExperienceDataLevel3,
  },

  {
    slug: "nlp-trainers-training-program",
    title: "NLP Trainer’s Training Program",
    description: "Become a Certified NLP Trainer",
    BannerData: bannerDataLevel4,
    LevelIntroWithVideoData: LevelIntroWithVideoDataLevel4,
    LevelCertificationData: LevelCertificationDataLevel4,
    LevelBenefitsTableData: LevelBenefitsTableDataLevel4,
    ContentSectionImgContentListData: ContentSectionImgContentListData4,
    LevelProgramIncludesData: LevelProgramIncludesDataLevel4,
    LevelContentData: LevelContentDataLevel4,
    LevelGraduatesExperienceData: LevelGraduatesExperienceDataLevel4,
  },

  {
    slug: "hypnosis-trainers-training-program",
    description: "Train Others in Hypnosis",
    BannerData: bannerDataLevel5,
    LevelIntroWithVideoData: LevelIntroWithVideoDataLevel5,
    LevelCertificationData: LevelCertificationDataLevel5,
    LevelBenefitsTableData: LevelBenefitsTableDataLevel5,
    ContentSectionData: ContentSectionDataLevel5,
    ContentSectionImgContentListData: ContentSectionImgContentListData5,
    LevelProgramIncludesData: LevelProgramIncludesDataLevel5,
    LevelContentData: LevelContentDataLevel5,
    LevelGraduatesExperienceData: LevelGraduatesExperienceDataLevel5,
  },

  {
    slug: "nlp-master-trainer-program",
    BannerData: bannerDataLevel6,
    LevelIntroWithVideoData: LevelIntroWithVideoDataLevel6,
    LevelCertificationData: LevelCertificationDataLevel6,
    ContentSectionContentListData: ContentSectionContentListData6,
    LevelBenefitsTableData: LevelBenefitsTableDataLevel6,
    ContentSectionImgContentListData: ContentSectionImgContentListData6,
    LevelProgramIncludesData: LevelProgramIncludesDataLevel6,
    LevelContentData: LevelContentDataLevel6,
    LevelGraduatesExperienceData: LevelGraduatesExperienceDataLevel6,
  },
];