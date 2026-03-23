// Type
import { BannerData } from "@/type/bannerType";
import { LevelIntroWithVideoType } from "@/type/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import { LevelBenefitsTableType } from "@/type/levelBenefitsTable";
import { LevelProgramIncludesType } from "@/type/levelProgramIncludes";
import { LevelContentType } from "@/type/levelContent";
import { LevelGraduatesExperienceType } from "@/type/levelGraduatesExperience";

// Images
import programLevel1 from "@/assets/background/program-level-1.webp"
import programLevel2 from "@/assets/background/program-level-2.webp"
import { LevelCertificationType } from "@/type/levelCertification";
import AccreditedBrand1 from "@/assets/accredited/accredited-1.webp"
import AccreditedBrand2 from "@/assets/accredited/accredited-2.webp"
import AccreditedBrand3 from "@/assets/accredited/accredited-3.webp"
import Certificate1Level1 from "@/assets/level-certificate/certificate-1-level-1.webp"
import Certificate2Level1 from "@/assets/level-certificate/certificate-2-level-1.webp"
import Certificate3Level1 from "@/assets/level-certificate/certificate-3-level-1.webp"
import Certificate1Level2 from "@/assets/level-certificate/certificate-1-level-2.webp"
import Certificate2Level2 from "@/assets/level-certificate/certificate-2-level-2.webp"
import Certificate3Level2 from "@/assets/level-certificate/certificate-3-level-2.webp"
import LevelProgram1 from "@/assets/level-program-included/program-1.webp"
import LevelProgram2 from "@/assets/level-program-included/program-2.webp"
import LevelProgram3 from "@/assets/level-program-included/program-3.webp"
import LevelProgram4 from "@/assets/level-program-included/program-4.webp"
import LevelProgram5 from "@/assets/level-program-included/program-5.webp"
import LevelProgram6 from "@/assets/level-program-included/program-6.webp"
import LevetContent1 from "@/assets/level-content/level-content-1.webp"
import LevetContent2 from "@/assets/level-content/level-content-2.webp"
import LevetContent3 from "@/assets/level-content/level-content-3.webp"

// Level 1 Start

const bannerDataLevel1: BannerData = {
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
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
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
        src: AccreditedBrand1.src,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1Level1.src,
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
        src: Certificate2Level1.src,
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
        src: Certificate3Level1.src,
        alt: "Accredited Three"
      },
    }
  ]
}

const LevelBenefitsTableDataLevel1: LevelBenefitsTableType = {
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
        "Use NLP principles to create structured, impactful coaching sessions that help clients achieve sustainable change.",
    },
    {
      content: "Ecology",
      personal:
        "Make decisions that align with your values and positively impact your life and relationships.",
      coaches:
        "Guide clients to assess the impact of their goals on their lives, relationships, and overall well-being, ensuring ethical and sustainable growth.",
    },
    {
      content: "NLP Communication Model",
      personal:
        "Improve your communication to connect with others deeply, reduce misunderstandings, and build stronger relationships.",
      coaches:
        "Teach clients how to communicate effectively and interpret verbal and non-verbal cues to build rapport and influence outcomes.",
    },
    {
      content: "Presuppositions of NLP",
      personal:
        "Reframe your mindset to embrace positive, empowering beliefs that transform your approach to challenges.",
      coaches:
        "Help clients adopt empowering perspectives that enable growth and dissolve self-limiting beliefs.",
    },
  ],
}

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
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
}

// Level 1 End

// Level 2 Start

const bannerDataLevel2: BannerData = {
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
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
  // description:
  // `<p></p>
  // <p></p>
  // <p></p>
  // <p></p>`,
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
        src: AccreditedBrand1.src,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate1Level2.src,
        alt: "Accredited One"
      },
    },
    {
      title: "Certified Master Practitioner of Time Line Therapy™ Techniques via Time Line Therapy™ Association",
      description: "Become a Certified Master Practitioner of Time Line Therapy™ Techniques with the world’s leading authority, the Time Line Therapy™ Association. Master techniques to release past traumas, dissolve phobias, and eliminate negative emotions. Facilitate deep emotional healing, empower transformation, and help individuals unlock emotional freedom, creating a future unburdened by the past.",
      imageBrand: {
        src: AccreditedBrand2.src,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate2Level2.src,
        alt: "Accredited Two"
      },
    },
    {
      title: "Certified Master Practitioner of NLP Coaching via the Coaching Division of ABNLP",
      description: "Become a Certified Master Practitioner of NLP Coaching with ABNLP’s Coaching Division, the world’s leading NLP authority. Master transformative coaching, guide clients to breakthroughs in business, education, and personal growth. Unlock potential, elevate performance, and empower lasting change. This certification is your gateway to a thriving coaching career and global impact.",
      imageBrand: {
        src: AccreditedBrand3.src,
        alt: "Accredited Brand One"
      },
      imageCerficate: {
        src: Certificate3Level2.src,
        alt: "Accredited Three"
      },
    }
  ]
};

const LevelBenefitsTableDataLevel2: LevelBenefitsTableType = {
  title: {
    line1: "Benefits of Choosing NLP",
    line2: "Master Practitioner Training"
  },
  points: [
  {
    content: "Prime Directives of the Unconscious Mind",
    personal: "Discover how your unconscious drives habits and emotions, helping you achieve personal breakthroughs.",
    coaches: "Leverage this understanding to create coaching strategies that lead to lasting results for clients."
  },
  {
    content: "Quantum Linguistics",
    personal: "Change the way you think and speak to unlock new possibilities and overcome problems.",
    coaches: "Guide clients to use empowering language patterns to create positive change."
  },
  {
    content: "Releasing Negative Emotions (TLT #1 & #2)",
    personal: "Let go of emotions like anger, sadness, and guilt that hold you back.",
    coaches: "Guide clients to release emotional burdens for lasting change."
  },
  {
    content: "Emotional Chains",
    personal: "Break patterns of emotional reactions and create a calmer, more balanced mindset.",
    coaches: "Help clients identify triggers and replace them with empowering responses."
  },
  {
    content: "Full Coaching Cycle with NLP & TLT",
    personal: "Achieve clarity on your goals and create actionable steps to reach them.",
    coaches: "Guide clients through a proven coaching process to help them achieve their goals."
  },
  {
    content: "Client Agreements",
    personal: "Build trust and ensure clear communication in your relationships.",
    coaches: "Establish clear expectations and goals with clients to create productive sessions."
  }
]
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
        src: LevelProgram1.src,
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
        src: LevelProgram2.src,
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
        src: LevelProgram3.src,
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
        src: LevelProgram4.src,
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
        src: LevelProgram5.src,
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
        src: LevelProgram6.src,
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
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4"
};

// Level 2 End

// dummy null structured

const bannerData: BannerData = {
  level: "",
  title: {
    line1: ""
  },
  description: "",
  image: ""
};

const LevelIntroWithVideoData: LevelIntroWithVideoType = {
  title: {
    line1: "",
    line2: ""
  },
  video: "",
  description: ""
};

const LevelCertificationData: LevelCertificationType = {
  title: {
    line1: "",
    line2: ""
  },
  points: [
    {
      title: "",
      description: "",
      imageBrand: {
        src: "",
        alt: ""
      },
      imageCerficate: {
        src: "",
        alt: ""
      }
    }
  ]
};

const LevelBenefitsTableData: LevelBenefitsTableType = {
  title: {
    line1: "",
    line2: ""
  },
  points: [
    {
      content: "",
      personal: "",
      coaches: ""
    }
  ]
};

const LevelProgramIncludesData: LevelProgramIncludesType = {
  title: {
    line1: "",
    line2: ""
  },
  points: [
    {
      title: "",
      description: (
        <p>
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1.src,
        alt: "",
      },
    },
    {
      title: "",
      description: (
        <p>
        </p>
      ),
      theme: "light",
      image: {
        src: LevelProgram2.src,
        alt: "",
      },
    },
    {
      title: "",
      description: (
        <p>
        </p>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3.src,
        alt: "",
      },
    },
    {
      title: "",
      description: (
        <>
          <p className="mb-2">
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li></li>
          </ul>
        </>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram4.src,
        alt: "",
      },
    },
    {
      title: "",
      description: (
        <p>
        </p>
      ),
      theme: "dark",
      image: {
        src: LevelProgram5.src,
        alt: "",
      },
    },
    {
      title: "",
      description: (
        <p>
        </p>
      ),
      theme: "light",
      image: {
        src: LevelProgram6.src,
        alt: "",
      },
    },
  ],
};

const LevelContentData: LevelContentType = {
  title: {
    line1: "",
    line2: ""
  },
  points: [
    {
      title: "",
      items: [],
      image: {
        src: "",
        alt: ""
      }
    }
  ]
};

const LevelGraduatesExperienceData: LevelGraduatesExperienceType = {
  title: {
    line1: "",
    line2: ""
  },
  video: ""
};


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