import { BannerData } from "@/type/bannerType";
import { LevelIntroWithVideoType } from "@/type/levelIntroWithVideo";
import { ProgramType } from "@/type/programType";
import programLevel1 from "@/assets/background/program-level-1.webp"

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



export const programs: ProgramType[] = [
  {
    slug: "nlp-practitioner",
    // title: "NLP Practitioner",
    // description: "Triple Certification Training Program",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData
  },

  {
    slug: "nlp-master-practitioner",
    // title: "NLP Master Practitioner",
    // description: "Advanced NLP Mastery Program",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData
  },

  {
    slug: "advanced-hypnotherapy-interventionis",
    // title: "Advanced Hypnotherapy Training",
    // description: "Professional Hypnotherapy Certification",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData
  },

  {
    slug: "nlp-trainers-training-program",
    // title: "NLP Trainer’s Training Program",
    // description: "Become a Certified NLP Trainer",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData
  },

  {
    slug: "hypnosis-trainers-training-program",
    // title: "Hypnosis Trainer’s Training Program",
    // description: "Train Others in Hypnosis",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData
  },

  {
    slug: "nlp-master-trainer-program",
    // title: "NLP Master Trainer Program",
    // description: "Highest Level NLP Certification",
    BannerData: bannerData,
    LevelIntroWithVideoData: LevelIntroWithVideoData
  }
]