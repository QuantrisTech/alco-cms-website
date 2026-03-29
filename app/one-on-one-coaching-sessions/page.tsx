"use client";
import programLevel2 from "@/assets/background/program-level-2.webp"
import Banner from "@/component/banner";
import { BannerType } from "@/type/bannerType";
import { ContentSectionType } from "@/type/contentSection";
import OneOnOneCoachingSessionsImg1 from "@/assets/sessions/session1.svg"
import OneOnOneCoachingSessionsImg2 from "@/assets/sessions/session2.svg"
import OneOnOneCoachingSessionsImg3 from "@/assets/sessions/session3.svg"
import OneOnOneCoachingSessionsImg4 from "@/assets/sessions/session4.svg"
import OneOnOneCoachingSessionsImg5 from "@/assets/sessions/session5.svg"
import OneOnOneCoachingSessionsImg6 from "@/assets/sessions/session6.svg"
import OneOnOneCoachingSessionsImg7 from "@/assets/sessions/session7.svg"
import OneOnOneCoachingSessionsImg8 from "@/assets/sessions/session8.svg"
import OneOnOneCoachingSessionsImg9 from "@/assets/sessions/session1.svg"
import OneOnOneCoachingSessionsImg10 from "@/assets/sessions/session10.svg"
import OneOnOneCoachingSessionsImg11 from "@/assets/sessions/session11.svg"
import OneOnOneCoachingSessionsImg12 from "@/assets/sessions/session12.svg"
import OneOnOneCoachingSessionsImg13 from "@/assets/sessions/session13.svg"
import OneOnOneCoachingSessionsImg14 from "@/assets/sessions/session14.svg"
import OneOnOneCoachingSessionsImg15 from "@/assets/sessions/session15.svg"
import ContentSection from "@/component/contentSection";
import LevelProgramIncludes from "@/component/levelProgramIncludes";
import { LevelProgramIncludesType } from "@/type/levelProgramIncludes";
import LevelProgram1 from "@/assets/level-program-included/program-1.webp"
import LevelProgram2 from "@/assets/level-program-included/program-2.webp"
import LevelProgram3 from "@/assets/level-program-included/program-3.webp"

const bannerData: BannerType = {
    title: {
        line1: "One On One Coaching Sessions",
        align: "text-center mx-auto "
    },
    image: programLevel2.src,
    className: "bg-center bg-cover bg-no-repeat bg-primary"
};

const WhatWeAddressList: ContentSectionType = {
    title: "What We Address",
    contentlist: [
        {
            title: "Chronic procrastination and unproductive habits",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg1.src,
            alt: "Chronic procrastination and unproductive habits",
        },
        {
            title: "Persistent overthinking and anxiety",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg2.src,
            alt: "Persistent overthinking and anxiety",
        },
        {
            title: "Unmanageable stress and frequent anger outbursts",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg3.src,
            alt: "Unmanageable stress and frequent anger outbursts",
        },
        {
            title: "Deep emotional sadness and lingering guilt",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg4.src,
            alt: "Deep emotional sadness and lingering guilt",
        },
        {
            title: "Fear of failure and rejection",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg5.src,
            alt: "Fear of failure and rejection",
        },
        {
            title: "Inner self-doubt and low self-confidence",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg6.src,
            alt: "Inner self-doubt and low self-confidence",
        },
        {
            title: "Career stagnation and lack of direction",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg7.src,
            alt: "Career stagnation and lack of direction",
        },
        {
            title: "Emotional burnout and unresolved past trauma",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg8.src,
            alt: "Emotional burnout and unresolved past trauma",
        },
        {
            title: "Pain from betrayal and loneliness",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg9.src,
            alt: "Pain from betrayal and loneliness",
        },
        {
            title: "Behavioral changes and habit formation",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg10.src,
            alt: "Behavioral changes and habit formation",
        },
        {
            title: "Feeling emotionally hurt",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg11.src,
            alt: "Feeling emotionally hurt",
        },
        {
            title: "Goal alignment",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg12.src,
            alt: "Goal alignment",
        },
        {
            title: "Addictions challenges",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg13.src,
            alt: "Addictions challenges",
        },
        {
            title: "Weight management challenges",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg14.src,
            alt: "Weight management challenges",
        },
        {
            title: "Time management challenges",
            height: "h-40",
            position: "object-contain",
            src: OneOnOneCoachingSessionsImg15.src,
            alt: "Time management challenges",
        },
    ],
    fullBg: "bg-neutral-100",
    padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
    contentlisItemClass: "w-full sm:w-[48%] lg:w-[23%] rounded-xl bg-primary/10 backdrop-blur-sm py-6 px-4",
    contentlistClass: "flex flex-wrap justify-center gap-4 max-w-6xl mx-auto pt-6 md:pt-8 lg:pt-12 xl:pt-16",
    contentlistTitle: "text-lg font-semibold text-center text-primary min-h-12 px-4 mt-4",

}

const OneOnOneCoachingData: LevelProgramIncludesType = {
    title: {
        line1: "One-on-One Coaching with Arslan Larik & Company",
    },
    points: [
        {
            title: "Coaching with Arslan Larik",
            description: (
                <div className="space-y-3 leading-relaxed">
                    <p className="font-semibold">
                        Why Choose Arslan Larik for Executive Coaching?
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Pioneering Leadership Coach:</strong> Pakistan’s first NLP Master Trainer & Hypnosis Master Trainer via ABNLP-ABH, empowering CEOs, directors, and senior leaders.
                        </li>

                        <li>
                            <strong>Master of Five Modalities:</strong> NLP, Time Line Therapy™, NLP Coaching, Hypnotherapy, and ICF Coaching for leadership and strategic growth.
                        </li>

                        <li>
                            <strong>Proven Success with Leaders:</strong> Transforming leadership styles, resolving conflicts, and enhancing team performance.
                        </li>

                        <li>
                            <strong>Personal Leadership Challenges:</strong> Helps overcome stress, decision fatigue, imposter syndrome, and work-life imbalance.
                        </li>

                        <li>
                            <strong>Exclusive & Bespoke Coaching:</strong> Personalized sessions tailored to deliver measurable and lasting results.
                        </li>
                    </ul>

                    <p>
                        <strong>Investment Per Session:</strong> 500 USD
                    </p>
                    <p>
                        <strong>Duration:</strong> 60–90 Minutes
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
            title: "Coaching with Bismillah Pervez",
            description: (
                <div className="space-y-3 leading-relaxed">
                    <p className="font-semibold">
                        Why Choose Bismillah Pervez?
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Empowering Mentor:</strong> Trainer & Master Coach specializing in emotional resilience and personal growth.
                        </li>

                        <li>
                            <strong>Compassionate Approach:</strong> Creates a safe and supportive environment for transformation.
                        </li>

                        <li>
                            <strong>Holistic Emotional Cleanup:</strong> Helps release emotional baggage, negative patterns, and unresolved feelings.
                        </li>

                        <li>
                            <strong>Holistic Solutions:</strong> Tackles self-doubt, stress, and relationship challenges effectively.
                        </li>

                        <li>
                            <strong>Results-Driven:</strong> Builds clarity, confidence, and consistent personal & professional growth.
                        </li>
                    </ul>

                    <p>
                        <strong>Investment Per Session:</strong> 250 USD
                    </p>
                    <p>
                        <strong>Duration:</strong> 60–90 Minutes
                    </p>
                </div>
            ),
            theme: "light",
            image: {
                src: LevelProgram2,
                alt: "Negative Thinking: Dimming Your Inner Sun",
            },
        },
        {
            title: "Coaching with Associate Coach",
            description: (
                <div className="space-y-3 leading-relaxed">
                    <p className="font-semibold">
                        Why Choose a Junior Coach?
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>Affordable & Impactful:</strong> High-quality coaching at an accessible price.
                        </li>

                        <li>
                            <strong>Expertly Trained:</strong> Mentored by Arslan Larik in NLP Coaching techniques.
                        </li>

                        <li>
                            <strong>Targeted Approach:</strong> Ideal for procrastination, productivity, and goal-setting challenges.
                        </li>
                    </ul>

                    <p>
                        <strong>Investment Per Session:</strong> 50 – 100 USD
                    </p>
                    <p>
                        <strong>Duration:</strong> 60–90 Minutes
                    </p>
                </div>
            ),
            theme: "yellow",
            image: {
                src: LevelProgram3,
                alt: "Negative Thinking: Dimming Your Inner Sun",
            },
        },
    ],

    pointsClass:
        "grid grid-col-1 lg:grid-cols-2 gap-4 lg:gap-8 py-2 md:py-4 lg:py-8 xl:py-12",

    textAlign: "text-start",

    // detailContent: (
    //     <div className="text-primary">
    //         <p className="my-4">
    //             Our One-on-One Coaching programs are designed to create deep, lasting transformation by addressing both personal and professional challenges.
    //         </p>

    //         <p className="mb-4">
    //             Whether you are a leader, entrepreneur, or individual seeking clarity and growth, our coaching approach integrates powerful methodologies to help you break through limitations and achieve your goals faster.
    //         </p>

    //         <ul className="list-disc pl-5 space-y-1">
    //             <li>
    //                 <strong>Clarity & Direction:</strong> Gain crystal-clear focus on your goals and decisions.
    //             </li>
    //             <li>
    //                 <strong>Emotional Mastery:</strong> Learn to manage stress and build resilience.
    //             </li>
    //             <li>
    //                 <strong>Performance Growth:</strong> Improve productivity, leadership, and execution.
    //             </li>
    //             <li>
    //                 <strong>Lasting Transformation:</strong> Create sustainable change at a deep unconscious level.
    //             </li>
    //         </ul>

    //         <p className="my-4">
    //             Step into a more empowered version of yourself with personalized coaching designed for real results.
    //         </p>
    //     </div>
    // ),
};

const ContentSectionListData: ContentSectionType = {
    title: "Coaching Methodology",
    description: (
        <div className="font-outfit">
            <p className="my-4">
                At <strong>Arslan Larik & Company,</strong> we follow a structured yet personalized approach to ensure meaningful outcomes. Sessions are conducted via Zoom, offering flexibility and accessibility for clients worldwide.
            </p>
            <p className="mb-4 text-lg"><strong>How We Work:</strong></p>
            <p><strong className="">Tailored Assessment:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Identify your unique challenges, goals, and aspirations.</li>
                <li>Establish clear objectives to guide your coaching journey.</li>
            </ul>
            <p><strong className="">Exploration and Breakthroughs:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Uncover deep-rooted beliefs and emotional barriers using advanced NLP,
                    Time Line Therapy™, and Hypnotherapy techniques.</li>
                <li>Gain clarity on patterns and obstacles holding you back</li>
            </ul>
            <p><strong className="">Empowerment and Accountability:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Ensure consistent progress through follow-ups and accountability frameworks.</li>
                <li>Foster sustainable strategies for long-term success.</li>
            </ul>
            <p className="mt-4">
                Each session lasts 60 to 90 minutes and is designed to deliver
                actionable insights and measurable results.
            </p>
        </div>
    ),
    padding: "py-6 md:py-8 lg:py-12 xl:py-16 ",
    textAlign: "text-start"
}


export default function OneOnOneCoachingSessions() {
    return (
        <>
            <Banner data={bannerData} />
            <ContentSection data={WhatWeAddressList} />
            <LevelProgramIncludes data={OneOnOneCoachingData} />
            <ContentSection data={ContentSectionListData} />
        </>
    );
}