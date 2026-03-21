"use client";

import React from "react";
import Button from "./button";
import Level1 from "@/assets/our-program/level1_image.webp";
import { OurProgramData } from "@/type/ourProgram";
import OurProgramCarousel from "./our-program-carousel/ourProgramCarousel";


const ourProgramData: OurProgramData = {
  title: "Our Programs",

  description:
    "Our program is designed to help you break through limiting beliefs, build a powerful mindset, and create lasting transformation in your personal and professional life.",
  slides: [
    {
      title: "NLP Practitioner",
      description: "A 10-day online course offering triple certifications, NLP techniques, and tools for personal and professional growth. Ideal for coaches, leaders, and individuals seeking transformation and self-mastery.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "NLP Master Practitioner",
      description: "A 13-day advanced course offering triple certifications in NLP, Time Line Therapy, and coaching. Gain mastery in emotional healing, transformation, and launching a successful coaching career.	",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "Advanced Hypnotherapy Training",
      description: "A 12-day dual certification course from ABH and NGH. Learn advanced hypnotherapy, Ericksonian techniques, self-hypnosis, and regression with lifetime access and 500+ scripts.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "NLP Trainer’s Training Program",
      description: "An 18-day hybrid course by Arslan Larik &amp; Company with ABNLP accreditation. Become a certified trainer in public speaking, training design, audience engagement, and transformation.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "Hypnosis Trainer’s Training Program",
      description: "An 8-day online training program, accredited by The American Board of Hypnotherapy, opening doors to multiple career paths, from therapeutic environments to corporate wellness and stage hypnosis.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
    {
      title: "NLP Master Trainer Program",
      description: "A global mentoring program designed for results-focused NLP Trainers who want to elevate their training businesses, deepen their expertise, and gain international recognition.",
      button: {
        text: "Learn More",
        link: "#"
      },
      image: {
        src: Level1.src,
        alt: "Arslan Larik"
      }
    },
  ]
}

export default function OurProgram() {
  const data = ourProgramData;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12  gap-2 my-8">
          <div className="flex flex-col justify-start col-span-5">
            <h3 className="h3 text-white text-start">
              {data.title}
            </h3>
          </div>
          <div className="flex flex-col justify-center col-span-7 pt-1">
            <p className="custom-text1 font-light text-white text-start mb-8">
              {data.description}
            </p>
          </div>
        </div>
      </div>
      <div>
        <OurProgramCarousel slides={data.slides || []} />
      </div>
    </section>
  );
}
