import { BannerType } from "@/type/bannerType";
import { servicesType } from "@/type/servicesType";
import programLevel2 from "@/assets/background/program-level-2.webp"
import FourCloudsModel from "@/assets/background/four-clouds-model.webp"
import FourCloudsModelEnroll1 from "@/assets/services/four-clouds-model/four-cloud-model-1.webp"
import FourCloudsModelEnroll2 from "@/assets/services/four-clouds-model/four-cloud-model-2.webp"
import FourCloudsModelEnroll3 from "@/assets/services/four-clouds-model/four-cloud-model-3.webp"
import FourCloudsModelEnroll4 from "@/assets/services/four-clouds-model/four-cloud-model-4.webp"
import { ContentSectionType } from "@/type/contentSection";
import ResourcesBook1 from "@/assets/services/resources/book-1.webp"
import ResourcesBook2 from "@/assets/services/resources/book-2.webp"
import ResourcesBook3 from "@/assets/services/resources/book-3.webp"
import ResourcesBook4 from "@/assets/services/resources/book-4.webp"
import ResourcesBook5 from "@/assets/services/resources/book-5.webp"
import ResourcesBook6 from "@/assets/services/resources/book-6.webp"
import ResourcesBook7 from "@/assets/services/resources/book-7.webp"
import LevelProgram1 from "@/assets/level-program-included/program-1.webp"
import LevelProgram2 from "@/assets/level-program-included/program-2.webp"
import LevelProgram3 from "@/assets/level-program-included/program-3.webp"
import LevelProgram4 from "@/assets/level-program-included/program-4.webp"
import LevelProgram5 from "@/assets/level-program-included/program-5.webp"
import LevelProgram6 from "@/assets/level-program-included/program-6.webp"
import { LevelProgramIncludesType } from "@/type/levelProgramIncludes";


const bannerDataRE: BannerType = {
  title: {
    line1: "Resources​",
    align: "text-center mx-auto"
  },
  image: programLevel2.src,
  className: "bg-center bg-cover bg-no-repeat bg-primary"
};

const ContentSectionData1RE: ContentSectionType = {

  title: "Empower Your Journey",
  description: (
    <div className="text-gray-600">
      <h4 className="h4 text-secondary"> Exclusive E-Books for Growth, Mastery, and
        Transformation</h4>
      <p className="my-4">
        At AL&CO, we believe that the right knowledge can transform lives and legacies.
        That’s why we’ve curated a collection of exclusive free eBooks, thoughtfully designed for:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Coaches and Therapists seeking proven, practical strategies.</li>
        <li>Individuals committed to personal and professional mastery.</li>
        <li>Curious minds eager to explore the profound benefits of Neuro-Linguistic Programming (NLP).</li>
      </ul>
      <p className="my-4">
        Each eBook blends cutting-edge insights with real-world application, empowering you to:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Deepen your understanding of human behavior.</li>
        <li>Master tools for emotional and mental well-being.</li>
        <li>Elevate your coaching and therapeutic impact.</li>
      </ul>
      <p className="my-4">
        And ignite lasting transformation in yourself and those you serve.
      </p>
      <p>
        Crafted by globally certified NLP trainers at AL&CO, these resources are more than just reading material; they’re your first step toward excellence.
      </p>
    </div>
  ),
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
  textAlign: "text-start",
  fullBg: "bg-neutral-100"
}

const ContentSectionImgContentListDataRE: ContentSectionType = {
  title: "Explore. Learn. Evolve.",
  titleColor: "text-white",
  contentlist: [
    {
      title: "Create Your Own Future With NLP",
      height: "h-80",
      src: ResourcesBook1.src,
      alt: "Create Your Own Future With NLP",
    },
    {
      title: "Relationship Mastery Through NLP",
      height: "h-80",
      src: ResourcesBook2.src,
      alt: "Relationship Mastery Through NLP",
    },
    {
      title: "Emotional Mastery With NLP",
      height: "h-80",
      src: ResourcesBook3.src,
      alt: "Emotional Mastery With NLP",
    },
    {
      title: "I Am Not Good Enough",
      height: "h-80",
      src: ResourcesBook4.src,
      alt: "I Am Not Good Enough",
    },
    {
      title: "101 Powerful Coaching Questions",
      height: "h-80",
      src: ResourcesBook5.src,
      alt: "101 Powerful Coaching Questions",
    },
    {
      title: "How To Get Your First Coaching Client",
      height: "h-80",
      src: ResourcesBook6.src,
      alt: "How To Get Your First Coaching Client",
    },
    {
      title: "Financial Freedom Through NLP",
      height: "h-80",
      src: ResourcesBook7.src,
      alt: "Financial Freedom Through NLP",
    },
  ],
  fullBg: "bg-primary",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
  contentlisItemClass: "w-full sm:w-[48%] lg:w-[23%] rounded-xl bg-slate-200/30 drop-shadow-sm ",
  contentlistClass: "flex flex-wrap justify-center gap-4 max-w-6xl mx-auto pt-6 md:pt-8 lg:pt-12 xl:pt-16",
  contentlistTitle: "text-lg font-semibold text-center text-white mb-4 min-h-12 px-4",
  detailContent: (
    <div className="pt-6 md:pt-8 lg:pt-12 xl:pt-16">
      <p className="text-white text-xl font-outfit">
        Your next breakthrough is just a few pages away.
      </p>
      <p className="text-secondary text-2xl font-semibold font-outfit">
        Download now and start creating the life, business,<br />
        and impact you deserve.
      </p>
    </div>
  ),
}

const ContentSectionData2RE: ContentSectionType = {
  title: "Premium Resources For Graduates",
  description: (
    <div className="max-w-6xl mx-auto">
      <p className="my-4">
        At AL&CO, we honor our graduates by offering exclusive access to a powerful library of premium 450+ audio resources carefully curated to deepen your learning, strengthen your skills, and support your ongoing evolution.
      </p>
      <p className="mt-4">
        As part of our graduate community, you receive privileged entry to advanced audio trainings from our Level 1: NLP Practitioner and Level 2: NLP Master Practitioner programs, designed to reinforce your knowledge, sharpen your practice, and fuel your journey toward lifelong mastery and extraordinary impact.
      </p>
    </div>
  ),
  fullBg: "bg-neutral-100 ",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
}

const ContentSectionContentListDataRE: ContentSectionType = {
  contentlist: [
    {
      title: "AL&CO LEVEL 1:",
      description: (
        <div className="text-gray-600">
          <p className="text-lg px-4 mb-4">
            NLP
            Practitioner
            Audiofiles
            Library
          </p>
        </div>
      ),
    },
    {
      title: "AL&CO LEVEL 2:",
      description: (
        <div className="text-gray-600">
          <p className="text-lg px-4 mb-4">
            NLP Master
            Practitioner
            Audiofiles
            Library
          </p>
        </div>
      ),
    },
  ],
  contentlistColumn: "grid-cols-2 gap-6 max-w-2xl",
  contentlisItemClass: "rounded-xl bg-white drop-shadow-sm px-4 py-6",
  fullBg: "bg-primary",
}

const bannerDataFCM: BannerType = {
  title: {
    line1: "​",
    align: "text-center mx-auto"
  },
  image: FourCloudsModel.src,
  className: "bg-center bg-contain bg-no-repeat bg-primary bg-origin-content !p-8"
};

const ContentSectionData1FCM: ContentSectionType = {
  description: (
    <>
      <p className="mb-4">
        Have you ever felt like you have one foot on the accelerator, wanting to move forward in your life, while at the very same time, you also have one foot on the brake, slowing your life down? Consciously, you want to move forward, yet there is something getting in the way and stopping you.
      </p>
      <p className="mb-4">
        Have you ever felt stuck in life? You want to get out of it so bad, but nothing is working out!
        Let me explain to you the four culprits that put an individual into a Stuck Phase. For that, I want you to imagine a sun. Yes, you got me right—a sun!!!
      </p>
      <p>
        When you think of the sun, what comes to your mind? Um, heat, energy, brightness, warmth, radiance, sparkling happiness, Vitamin D (uh, of course). Now, what would happen if a cloud goes around the sun? Um, well, it would block sunlight, warmth, brightness, and heat, and basically, you would lose sight of the sun.
        <br />
        So, using the same metaphor of the sun and the dark cloud, let’s shift your focus to the four clouds that stop us from living an awesome life. These clouds create energy leaks in our being that rob us of all our power and eventually put us in a Stuck Phase.
      </p>
    </>
  ),
  underline: true,
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
  textAlign: "text-start",
  fullBg: "bg-neutral-100"
}

const ContentSectionImgContentListDataFCM: ContentSectionType = {
  title: "Four Clouds",
  titleColor: "text-white",
  contentlist: [
    {
      title: "NLP Trainers",
      height: "h-40",
      src: FourCloudsModelEnroll1.src,
      alt: "NLP Trainers",
    },
    {
      title: "Business Owners",
      height: "h-40",
      src: FourCloudsModelEnroll2.src,
      alt: "Business Owners",
    },
    {
      title: "Global Leaders",
      height: "h-40",
      src: FourCloudsModelEnroll3.src,
      alt: "Global Leaders",
    },
    {
      title: "Visionaries",
      height: "h-40",
      src: FourCloudsModelEnroll4.src,
      alt: "Visionaries",
    },
  ],
  fullBg: "bg-primary",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
  contentlisItemClass: "w-full sm:w-[48%] lg:w-[23%] rounded-xl bg-slate-200/30 drop-shadow-sm py-6 px-4",
  contentlistClass: "flex flex-wrap justify-center gap-4 max-w-6xl mx-auto pt-6 md:pt-8 lg:pt-12 xl:pt-16",
  contentlistTitle: "text-lg font-semibold text-center text-white min-h-12 px-4 mt-4",

}

const LevelProgramIncludesDataLevel1: LevelProgramIncludesType = {
  title: {
    line1: "The Hidden Barriers To Success"
  },
  points: [
    {
      title: "Negative Thinking: Dimming Your Inner Sun",
      description: (
        <div className="space-y-3 leading-relaxed">
          <p>
            The first cloud that holds us back in life is <strong>Negative Thinking</strong>, which is, in fact, a naturally occurring phenomenon.
          </p>

          <p>
            On average, a human goes through <strong>60,000 thoughts</strong>; yes, you heard me right: <strong>SIXTY THOUSAND</strong> thoughts in a day.
          </p>

          <p>
            When the number of negative thoughts gets higher than the number of positive thoughts, and a person thinks about one negative thought, that leads to another negative thought, and that leads to another one.
            <br />
            <strong>
              Now, there’s a chain of negative thoughts that a person cannot break despite doing all he can.
            </strong>
          </p>

          <p>
            Negative thought patterns can be all-consuming, leaving us stuck and helpless in a{" "}
            <strong>never-ending cycle of self-doubt and despair.</strong>
          </p>
        </div>
      ),
      theme: "dark",
      image: {
        src: LevelProgram1,
        alt: "Negative Thinking: Dimming Your Inner Sun",
      },
    },
    {
      title: "Negative Emotions: Extinguishing Your Inner Flame",
      description: (
        <div className="space-y-3 leading-relaxed">
          <p>
            The second cloud holding us back is what we call <strong>Negative Emotions</strong>. Okay, so emotions are neither good nor bad; they are there because they make us humans; otherwise, to be honest, without emotions, we would be zombies or robots.
          </p>

          <p>
            But when the intensity of our emotions becomes negative, and while we control our feelings, our emotions start controlling us, the real problem lies because these negative emotions start harming and disempowering us.
          </p>

          <p>
            <strong>Negative Emotions include</strong> Anger, Sadness, Fear, Guilt, Betrayal, Regret, Hurt and Anxiety.
          </p>

          <p>
            <strong>
              Always Remember: When emotion increases, intelligence automatically decreases
            </strong>
            , and the inability to regulate and control emotions makes even intelligent people do things that they shouldn’t.
          </p>
        </div>
      ),
      theme: "light",
      image: {
        src: LevelProgram2,
        alt: "Negative Emotions",
      },
    },
    {
      title: "Limiting Beliefs: The Invisible Barrier",
      description: (
        <div className="space-y-3 leading-relaxed">
          <p>
            <strong>Limiting beliefs</strong> are what we tell ourselves about who we are, and those beliefs that stop/limit hold us back from becoming who we are meant to be. These beliefs limit us from reaching our full potential. They are very unconscious in nature. We don’t know we have them until someone points them out to us.
          </p>

          <p>
            Limiting beliefs are statements like, <strong>“I am not good enough”</strong> …. <strong>“I am not capable enough”</strong> … <strong>“I don’t have enough knowledge”</strong> … <strong>“Life is too hard”</strong> …. <strong>“All men are disloyal”</strong> …. <strong>“I am too young to work”</strong> … <strong>“I can’t make money”</strong> …. <strong>“I am too old to start over again,”</strong> … <strong>“I can never be loved,”</strong> etc. All these statements indicate a belief system that is so deeply rooted that it puts a person in the pitfall of self-doubt.
          </p>

          <p>
            These limiting beliefs do not have any reality, but our unconscious mind presents them to us in a manner that makes them appear real.
          </p>

          <p>
            <strong>Always Remember: ALL LIMITING BELIEFS ARE LIES !!!</strong>
          </p>
        </div>
      ),
      theme: "yellow",
      image: {
        src: LevelProgram3,
        alt: "Limiting Beliefs",
      },
    },
    {
      title: "Inner Conflict: A Tug of War Within",
      description: (
        <div className="space-y-3 leading-relaxed">
          <p>
            Have you ever felt an inner war inside you, where one part of your being wants to do one thing or choose one option, and the other wants to do something else? In this state of mind, a person can not decide between the two options and remains stuck, as if this war between two parts of his/her being is tearing the person apart.
          </p>

          <p>
            <strong>For Example</strong>, I want to go on a world tour, and traveling is my passion, but I also have to earn money, and I can’t afford a world tour.
          </p>

          <p>
            Should I remain working as an employee for this company because my job is stable, but I also want to be my own boss and wants to build my own business?
          </p>

          <p>
            <strong>
              Inner Conflicts are considered the mother of all other clouds.
            </strong>{" "}
            They arise from a person’s unaligned values and usually involve negative emotions, limiting beliefs, and negative thinking.
          </p>
        </div>
      ),
      theme: "dark",
      image: {
        src: LevelProgram4,
        alt: "Inner Conflict",
      },
    },
  ],
  pointsClass: "grid grid-col-1 lg:grid-cols-2 gap-4 lg:gap-8 py-2 md:py-4 lg:py-8 xl:py-12",
  textAlign:"text-start",
  detailContent: (
    <div className="text-primary">
      <p className="my-4">
        These are the four clouds that have been developing since our birth, and if not attended to or corrected, they will create huge storms in our lives—storms that will leave us emotionally drained, frustrated, depressed, confused, powerless, and disempowered.
      </p>
      <p className="mb-4">
        In our NLP training, we work deeply with you and your four clouds to emerge from the other side into paradise. NLP is all about reprogramming our minds so that they start perceiving things differently and more positively, which ultimately results in an empowering mindset and behaviors. 
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <strong>Negative Thinking Patterns</strong> will be converted into positive thinking patterns.
        </li>
        <li>
          <strong>Negative Emotions</strong> will be converted into positive learnings.
        </li>
        <li>
          <strong>Inner Conflicts</strong> would be resolved through Values Realignment work, creating more wholeness.
        </li>
        <li>
          <strong>Limiting Beliefs</strong> would be destroyed from the root cause, and new empowering beliefs would be installed.
        </li>
      </ul>
      <p className="my-4">
        And ignite lasting transformation in yourself and those you serve.
      </p>
      <p>
        NLP Training works extensively on all the aspects that put a person in the stuck phase and help them unstick themselves quickly and effortlessly by creating more ways for them at a very unconscious level. When people start operating their lives from this side of the coin, life takes on a whole new meaning and becomes an empowering experience.
      </p>
    </div>
  ),
};


export const services: servicesType[] = [
  {
    slug: "resources",
    BannerData: bannerDataRE,
    ContentSectionData1: ContentSectionData1RE,
    ContentSectionImgContentListData: ContentSectionImgContentListDataRE,
    ContentSectionData2: ContentSectionData2RE,
    ContentSectionContentListData: ContentSectionContentListDataRE,
  },
  {
    slug: "four-clouds-model",
    BannerData: bannerDataFCM,
    ContentSectionData1: ContentSectionData1FCM,
    ContentSectionImgContentListData: ContentSectionImgContentListDataFCM,
    LevelProgramIncludesData: LevelProgramIncludesDataLevel1,
  }
];