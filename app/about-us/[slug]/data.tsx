// Type
import { BannerType } from "@/type/bannerType";


// Images
import BannerImage2 from "@/assets/about-us/who-is-bismillah-pervez.webp"
import BannerImage1 from "@/assets/about-us/who-is-arsalan-larik.webp"
import { AboutType } from "@/type/aboutType";
import { LevelBenefitsTableType } from "@/type/levelBenefitsTable";
import { GalleryItem } from "@/type/gallery";
import { ContentSectionType } from "@/type/contentSection";
import featuredImage1 from "@/assets/about-us/featured/Aaj-News.webp"
import featuredImage2 from "@/assets/about-us/featured/Bol-News.webp"
import featuredImage3 from "@/assets/about-us/featured/Dawn-News.webp"
import featuredImage4 from "@/assets/about-us/featured/Samaa-News.webp"
import programLevel2 from "@/assets/background/program-level-2.webp"
import GalleryBM2 from "@/assets/about-us/gallery-BM/gallery-2.webp"
import GalleryBM3 from "@/assets/about-us/gallery-BM/gallery-3.webp"
import GalleryBM4 from "@/assets/about-us/gallery-BM/gallery-4.webp"
import GalleryBM5 from "@/assets/about-us/gallery-BM/gallery-5.webp"
import GalleryBM6 from "@/assets/about-us/gallery-BM/gallery-6.webp"
import GalleryBM7 from "@/assets/about-us/gallery-BM/gallery-7.webp"
import GalleryBM8 from "@/assets/about-us/gallery-BM/gallery-8.webp"
import GalleryBM9 from "@/assets/about-us/gallery-BM/gallery-2.webp"
import GalleryBM10 from "@/assets/about-us/gallery-BM/gallery-2.webp"
import GalleryBM11 from "@/assets/about-us/gallery-BM/gallery-2.webp"
import GalleryWTALCO1 from "@/assets/about-us/gallery-WTALCO/gallery-1.webp"
import GalleryWTALCO2 from "@/assets/about-us/gallery-WTALCO/gallery-2.webp"
import GalleryWTALCO3 from "@/assets/about-us/gallery-WTALCO/gallery-3.webp"
import GalleryWTALCO4 from "@/assets/about-us/gallery-WTALCO/gallery-4.webp"
import accreditedBrands from "@/assets/accredited/accredited-brands.webp"

type Faq = {
  question: string;
  answer: React.ReactNode;
};

// who-is-arslan-larik

const bannerDataAL: BannerType = {
  title: {
    line1: "Arslan Larik",
    line2: `Master Trainer Of NLP & HYPNOSIS`
  },
  miniTitle: {
    line1: "First board certified master trainer of nlp & HYPNOSIS in pakistan via",
    line2: `ABH-ABNLP`
  },
  description: `Everyone make mistakes,
even I do, we are designed to make
mistake, that's what makes us human!

But more power to those, only those
who learn from it, get back up more
quickly and persevere with positivity.`,
  image: BannerImage1.src,
  height: "",
  className: "bg-no-repeat bg-center bg-contain",
  intoBanner: true,
  video: "https://arslanlarik.com/wp-content/uploads/2025/03/What-is-NLP.mp4",
};

const LevelBenefitsTableDataAL: LevelBenefitsTableType = {
  introPage: true,
  title: {
    line1: "A Legacy of Excellence and Mastery",
    line2: `Arslan Larik’s
expertise is backed by
a prestigious portfolio
of certifications, each
reflecting his commitment to
mastery and impact:`,
  },

  headers: [
  ],

  points: [
    {
      content: "Pakistan’s First Certified Master Trainer of Neuro-Linguistic Programming via The American Board of NLP (ABNLP-USA)",
      values: [
        "Pakistan’s First Certified Master Trainer of Hypnotherapy via The American Board of Hypnotherapy (ABH-USA)",
      ],
    },
    {
      content: "Certified Instructor of Hypnosis via National Guild of Hypnotists (NGH-USA)",
      values: [
        "Master Time Line Therapy™ Trainer via The Time Line Therapy™ Association (TLTA-USA)",
      ],
    },
    {
      content: "Certified Coach Trainer via The Coaching Division of ABNLP, USA",
      values: [
        "Certified Hypnotherapist via NGH (National Guild of Hypnotists, USA)",
      ],
    },
    {
      content: "Diploma of Hypnotherapy via ABH (American Board of Hypnotherapy, USA)",
      values: [
        "Certified Master Practitioner via ABH (American Board of Hypnotherapy, USA)",
      ],
    },
    {
      content: "Certified Practitioner via ABH (American Board of Hypnotherapy, USA)",
      values: [
        "Master Hypnotist via Banyan Hypnosis Center,USA",
      ],
    },
    {
      content: "5-Path® Hypnotherapist via Banyan Hypnosis Center, USA",
      values: [
        "7th Path Self-Hypnosis Teacher via Banyan Hypnosis Center, USA",
      ],
    },
    {
      content: "Hypnotherapy Certification Training via ABH (NLP Top Coach Thailand)",
      values: [
        "Board Member of The American Board of NLP",
      ],
    },
    {
      content: "Board Member of National Guild of Hypnotists",
      values: [
        "Board Member of The American Board of Hypnotherapy",
      ],
    },
    {
      content: "Member of 5-Path® International Association of Hypnosis Professionals",
      values: [
        "",
      ],
    },
  ],


};

const ContentSectionData2AL: ContentSectionType = {
  title: "An Authority in Transformation",
  description: (
    <>
      <p className="my-4">
        As the <strong>Master Trainer and Managing Director of AL&CO,</strong> Arslan has set new standards in coaching, training, and personal development. His dynamic, results-driven programs equip participants with the tools to:
      </p>
      <ul className="list-disc pl-5 space-y-1">
            <li>Master their Minds and Emotions.</li>
            <li>Overcome Personal and Professional Limitations.</li>
            <li>Achieve extraordinary goals.</li>
            <li>Lead with purpose and authenticity.</li>
          </ul>
      <p className="mt-4">
        Arslan’s ability to simplify complex concepts while delivering impactful solutions has made him a <strong>trusted mentor for individuals, professionals,</strong> and organizations worldwide.
      </p>
    </>
  ),
  // underline: true,
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 px-4",
  textAlign:"text-start"
}

const ContentSectionData3AL: ContentSectionType = {
  title: "Approved Excellence at AL&CO",
  description: (
    <>
      <p className="my-4">
        Arslan Larik & Company is an <strong>Approved School of NLP, Hypnotherapy, Time Line Therapy Techniques & NLP Coaching</strong> Certified by:
      </p>
      <img src={accreditedBrands.src} className="object-contain h-40 my-4" />
      <ul className="list-disc pl-5 space-y-1">
            <li><strong>The American Board of Neuro Linguistic Programming (ABNLP-USA)</strong></li>
            <li><strong>The American Board of Hypnotherapy (ABH-USA)</strong></li>
            <li><strong>The National Guild of Hypnotists (NGH-USA)</strong></li>
            <li><strong>Time Line Therapy™ Association (TLTA-USA)</strong></li>
            <li><strong>Coaching Division of ABNLP (USA)</strong></li>
          </ul>
      <p className="mt-4">
       At AL&CO, you gain access to a global network of excellence, lifetime learning opportunities, and mentorship under a <strong>globally recognized pioneer.</strong>
      </p>
    </>
  ),
  // underline: true,
  padding: "pb-6 md:pb-8 lg:pb-12 xl:pb-16 px-4",
  textAlign:"text-start"
}

const ContentSectionData4AL: ContentSectionType = {
  title: "An Authority in Transformation",
  description: (
    <>
      <p className="my-4">
        As the <strong>Master Trainer and Managing Director of AL&CO,</strong> Arslan has set new standards in coaching, training, and personal development. His dynamic, results-driven programs equip participants with the tools to:
      </p>
      <p className="mt-4">
        Arslan’s ability to simplify complex concepts while delivering impactful solutions has made him a <strong>trusted mentor for individuals, professionals,</strong> and organizations worldwide.
      </p>
    </>
  ),
  fullBg:"bg-neutral-100 ",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 px-4 ",
}

// who-is-bismillah-pervez

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
  height: "min-h-[700px]",
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
    { src: GalleryBM2.src, alt: "", title: "Gallery Image 2" },
    { src: GalleryBM3.src, alt: "", title: "Gallery Image 3" },
    { src: GalleryBM4.src, alt: "", title: "Gallery Image 4" },
    { src: GalleryBM5.src, alt: "", title: "Gallery Image 5" },
    { src: GalleryBM6.src, alt: "", title: "Gallery Image 6" },
    { src: GalleryBM7.src, alt: "", title: "Gallery Image 7" },
    { src: GalleryBM8.src, alt: "", title: "Gallery Image 8" },
    { src: GalleryBM9.src, alt: "", title: "Gallery Image 9" },
    { src: GalleryBM10.src, alt: "", title: "Gallery Image 10" },
    { src: GalleryBM11.src, alt: "", title: "Gallery Image 11" },
  ]
}

const ContentSectionData2BP: ContentSectionType = {
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
  underline: true
}

const ContentSectionData3BP: ContentSectionType = {
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
  underline: true
}

const ContentSectionDataFeatureImage: ContentSectionType = {
  title: "As featured in",
  imagelist: [
    {
      src: featuredImage1.src,
      alt: "Aaj News",
    },
    {
      src: featuredImage2.src,
      alt: "Bol News",
    },
    {
      src: featuredImage3.src,
      alt: "Dawn News",
    },
    {
      src: featuredImage4.src,
      alt: "Samaa News",
    },
  ],
  // underline: true,
  fullBg: "bg-neutral-100",
  padding: "py-6 md:py-8 lg:py-12 xl:py-16 px-4"
};

// why-train-with-alco

const bannerDataWTALCO: BannerType = {
  // level: "level 2",
  title: {
    line1: "Why Train With AL&CO?​",
    align: "text-center mx-auto"
  },
  // description: "Triple Certification Training Program",
  image: programLevel2.src,
  className: "bg-center bg-cover bg-no-repeat bg-primary"
};

const ContentSectionData1WTALCO: ContentSectionType = {
  description: (
    <>
      <p className="mb-4">
        Choosing the right NLP training institute isn’t just a decision; it’s a commitment to transforming your life. At <strong>Arslan Larik & Company (AL&CO),</strong> we don’t just provide training; we create <strong>life-changing experiences</strong> that redefine your potential and set you apart.
      </p>
      <p>
        Our programs are designed to equip you with not just certifications but mastery, empowering you to create real, lasting change in your personal and professional life.
      </p>
    </>
  ),
  underline: true,
  padding: "pt-6 md:pt-8 lg:pt-12 xl:pt-16 px-4"
}

const galleryDataWTALCO: GalleryItem = {
  title: "Why settle for ordinary when you can achieve extraordinary? ",
  description: (
    <>
      <p className="mb-4">
        Your transformation starts here.      </p>
    </>
  ),
  image: [
    { src: GalleryWTALCO1.src, alt: "", title: "Gallery Image 1" },
    { src: GalleryWTALCO2.src, alt: "", title: "Gallery Image 2" },
    { src: GalleryWTALCO3.src, alt: "", title: "Gallery Image 3" },
    { src: GalleryWTALCO4.src, alt: "", title: "Gallery Image 4" },
  ]

}

const FaqsDataWTALCO: Faq[] = [
  {
    question: "1. Train with Pakistan’s First NLP & Hypnotherapy Master Trainer: Arslan Larik",
    answer: (
      <>
        <p>When you train with AL&CO, you’re learning from the best:</p>
        <ul className="list-none">
          <li><strong className="text-secondary-medium mb-4">First NLP & Hypnotherapy Master Trainer in Pakistan: </strong><br />Arslan Larik, certified by the American Board of Neuro-Linguistic Programming and Hypnotherapy (ABNLP-ABH), has pioneered NLP training in the region.</li>
          <li><strong className="text-secondary-medium mb-4">Master of Five Modalities: </strong><br />NLP, Time Line Therapy™ Techniques, NLP Coaching, Hypnotherapy, and ICF Coaching.</li>
          <li><strong className="text-secondary-medium mb-4">Decades of Experience: </strong><br />Arslan’s expertise, coupled with a hands-on teaching approach, ensures you grasp even the most complex concepts with ease.</li>
          <li><strong className="text-secondary-medium mb-4">Proven Success: </strong><br />Thousands of lives transformed across the globe—Arslan is a name synonymous with excellence in NLP.</li>
        </ul>
        <p><strong>Why wait to achieve your breakthrough? Sign up now to train with a global leader in transformation.</strong><br /></p>
      </>
    )
  },
  {
    question: "2. Master Trainer vs. NLP Trainer: The Difference",
    answer: (
      <>
        <p>Training with a Master Trainer like Arslan Larik isn’t just about learning NLP; it’s about mastering transformation:</p>
        <ul className="list-none">
          <li><strong className="text-secondary-medium mb-4">Deeper Knowledge: </strong><br />Master Trainers dive into the nuances of Neuro Linguistic Programming and Hypnotherapy, offering a level of expertise that’s unmatched.</li>
          <li><strong className="text-secondary-medium mb-4">Holistic Perspective: </strong><br />With proficiency in multiple modalities, Master Trainers provide a comprehensive approach to personal and professional growth.</li>
          <li><strong className="text-secondary-medium mb-4">Global Recognition: </strong><br />Certifications from a Master Trainer carry international credibility, giving you a competitive edge.</li>
          <li><strong className="text-secondary-medium mb-4">Empowerment to Lead: </strong><br />Master Trainers don’t just teach; they produce other NLP and Hypnosis Trainers, demonstrating a level of mastery that creates leaders in the field.</li>
        </ul>
        <p><strong>Experience the difference that mastery makes. Choose transformation, not just training.</strong></p>
      </>
    )
  },
  {
    question: "3. A Unique Teaching Approach",
    answer: (
      <>
        <p>What we teach may be similar to other NLP programs, but how we teach is what makes us extraordinary:</p>
        <ul className="list-none">
          <li><strong className="text-secondary-medium mb-4">Contextualized Learning: </strong><br />Our methods ensure every concept is relatable, practical, and easy to apply in real life.</li>
          <li><strong className="text-secondary-medium mb-4">Engaging Training: </strong><br />We use real-world scenarios and hands-on techniques to make learning exciting and impactful.</li>
          <li><strong className="text-secondary-medium mb-4">Supervised Practice: </strong><br />At AL&CO, we make sure everything that is being taught is practiced under expert supervision to ensure real-time mastery and confidence.</li>
        </ul>
      </>
    )
  },
  {
    question: "4. Pioneers in Online NLP Trainings",
    answer: (
      <>
        <p>AL&CO was the first in Asia region to adopt online NLP training.</p>
        <p><strong>Our programs:</strong></p>
        <ul className="list-none">
          <li><strong className="text-secondary-medium mb-4">Prepare you for global opportunities </strong><br />by teaching you to coach both online and in-person.</li>
          <li><strong className="text-secondary-medium mb-4">Deliver consistent results worldwide, </strong><br />empowering graduates to work with clients across industries and geographies.</li>
          <li><strong className="text-secondary-medium mb-4">Networking opportunities </strong><br />with participants from all around the globe.</li>
        </ul>
        <p><strong>The world is your stage. Master NLP online and expand your global reach.</strong></p>
      </>
    )
  },
  {
    question: "5. Unlimited Revise & Revisit Opportunities",
    answer: (
      <>
        <p>We believe learning never stops. As an AL&CO graduate, you can attend NLP trainings as many times as you want free of cost for the next 5 years.</p>
        <ul className="list-none">
          <li>Attend <strong>6 NLP Practitioner trainings and 2 NLP Master Practitioner Trainings annually,</strong> allowing for <strong>86 days of training each year or 430 days in 5 years</strong>—at no additional cost. clients across industries and geographies.</li>
          <li>Revisit and refine your skills for a lifetime without worrying about fees.</li>
        </ul>
        <p><strong>Learning is limitless, and so are your possibilities. Join us today to unlock yours.</strong></p>
      </>
    )
  },
  {
    question: "6. Advanced Self-Study Resources",
    answer: (
      <>
        <p>Mastery requires repetition, and we provide everything you need:</p>
        <ul className="list-none">
          <li>A <strong>self-study kit</strong> with over <strong>400 audio files</strong> from Dr. Tad James, perfectly aligned with your manual.</li>
          <li>Access to teachings from 2 Master Trainers; <strong>Arslan Larik</strong> and <strong>Dr. Tad James</strong>, ensuring you learn from the best of the best.</li>
        </ul>
        <p><strong>Empower yourself with tools that last a lifetime. Join the AL&CO family now.</strong></p>
      </>
    )
  },
  {
    question: "7. Transparent and Affordable Pricing",
    answer: (
      <>
        <p>Transformation should be accessible to everyone:</p>
        <ul className="list-none">
          <li><strong className="text-secondary-medium mb-4">No pricing disparities:</strong> All graduates pay the same for each program.</li>
          <li><strong className="text-secondary-medium mb-4">Flexible payment plans</strong> to ensure financial ease on your journey to growth.</li>
        </ul>
        <p><strong>Join us and invest in your future today.</strong></p>
      </>
    )
  },
  {
    question: "8. Cutting-Edge Learning Technology",
    answer: (
      <>
        <p>We’re committed to providing an exceptional online learning experience:</p>
        <ul className="list-none">
          <li>A <strong>Level-4 streaming setup</strong> with multiple camera angles for unparalleled clarity and engagement.</li>
          <li>A seamless online environment that rivals in-person training.</li>
        </ul>
        <p><strong>Step into the future of learning. Experience technology that transforms training.</strong></p>
      </>
    )
  },
  {
    question: "9. Build a Thriving Coaching Business",
    answer: (
      <>
        <p>Our training isn’t just about certifications—it’s about creating opportunities:</p>
        <ul className="list-none">
          <li>Learn how to <strong>set up a profitable coaching business</strong> during our NLP Master Practitioner training.</li>
          <li>Gain the tools and strategies to attract and retain <strong>Premium Paid Coaching Clients</strong>.</li>
        </ul>
        <p><strong>Turn your passion into a profitable career. Start building your coaching business today.</strong></p>
      </>
    )
  },
  {
    question: "10. Expand Your Global Network",
    answer: (
      <>
        <p>At AL&CO, proximity is power. You’ll become part of a thriving community:</p>
        <ul className="list-none">
          <li><strong className="text-secondary-medium mb-4">Online support groups</strong> to connect with batchmates, share insights, and receive real-time guidance.</li>
          <li>Access to a <strong>global alumni network of 1000+ graduates,</strong> opening doors to collaboration, mentorship, and career growth.</li>
        </ul>
        <p><strong>Your network is your net worth. Connect globally and grow endlessly.</strong></p>
      </>
    )
  },
  {
    question: "11. Lifetime Support from Experts",
    answer: (
      <>
        <p>Your journey with AL&CO doesn’t end after training:</p>
        <ul className="list-none">
          <li><strong className="text-secondary-medium mb-4">Direct access to the Master Trainer; Arslan Larik</strong> and certified trainers for personalized mentorship and guidance.</li>
          <li>Regular follow-ups to track your progress and address any challenges you face.</li>
        </ul>
        <p><strong>Get the lifelong support you need. Begin your transformational journey now.</strong></p>
      </>
    )
  },
  {
    question: "12. Proven Impact Across Diverse Fields",
    answer: (
      <>
        <p>We’ve had the privilege of training individuals from all walks of life, including:</p>
        <ul className="list-none">
          <li>MBBS doctors, psychologists, psychotherapists, and psychiatrists.</li>
          <li>HR professionals, senior leaders, fitness trainers, and homemakers. No matter your background, our training equips you with the skills to <strong>excel in any domain.</strong></li>
        </ul>
      </>
    )
  }
]

const ContentSectionData2WTALCO: ContentSectionType = {
  title: "Expand Your Network Globally",
  description: (
    <>
      <p className="mb-4">
        Craft a global network of success! Join our WhatsApp support groups to connect with your batch mates, receive insightful notes, and have your questions answered there and then.
      </p>
      <p>
        Our 1000+ alumni from all corners of the world will provide you access to extraordinary opportunities for career advancement and growth after training with us. Proximity is power – so don’t miss out on this empowering journey toward professional greatness!
      </p>
    </>
  ),
  underline: true,
  button: {
    text: "Contact",
    link: "#"
  }
}

export const about: AboutType[] = [
  {
    slug: "who-is-arslan-larik",
    BannerData: bannerDataAL,
    LevelBenefitsTableData: LevelBenefitsTableDataAL,
    ContentSectionData2: ContentSectionData2AL,
    ContentSectionData3: ContentSectionData3AL,
    ContentSectionData4: ContentSectionData4AL,
    // galleryData: galleryData,
    // ContentSectionData2: ContentSectionData2BP,
    // ContentSectionData3: ContentSectionData3BP
  },
  {
    slug: "who-is-bismillah-pervez",
    BannerData: bannerDataBP,
    LevelBenefitsTableData: LevelBenefitsTableDataBP,
    galleryData: galleryDataBP,
    ContentSectionData2: ContentSectionData2BP,
    ContentSectionData3: ContentSectionData3BP,
    ContentSectionDataFeatureImage: ContentSectionDataFeatureImage
  },
  {
    slug: "why-train-with-alco",
    BannerData: bannerDataWTALCO,
    ContentSectionData1: ContentSectionData1WTALCO,
    galleryData: galleryDataWTALCO,
    FaqsData: FaqsDataWTALCO,
    ContentSectionData2: ContentSectionData2WTALCO
  },

];