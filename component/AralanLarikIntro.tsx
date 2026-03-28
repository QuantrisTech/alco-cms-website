"use client";

import React from "react";
import Button from "./button";
import { AralanLarikIntroData } from "@/type/aralanLarikIntro";
import ArsalanLarik from "@/assets/intro-arsalan-larik/arsalan-larik.webp";


const aralanLarikIntroData: AralanLarikIntroData = {
  title: "Meet the Man Who Pioneers Change",

  description:
    "Step into a brighter future under the guidance of a visionary leader, Arslan Larik! At AL&CO, we go beyond training to provide life-changing experiences that empower you to achieve extraordinary results.",

  name: "Arslan Larik",

  designation: "Founder of Arslan Larik",

  specification: `
  <p>Are you ready to learn from someone who has already transformed over <strong>500,000 lives?</strong></p>

  <p><strong>Arslan Larik</strong>, Pakistan’s first Certified Master Trainer of Neuro-Linguistic Programming and Hypnotherapy via The American Board of Neuro-Linguistic Programming and Hypnotherapy (ABNLP-ABH), is a visionary leader who transforms lives and inspires greatness globally.</p>

  <p>As the Master Trainer and Managing Director of AL&CO, he has positively impacted thousands of lives through his groundbreaking coaching, training, and leadership. With unparalleled expertise in NLP, Hypnotherapy, Timeline Therapy Techniques, NLP Coaching, and Behavioral Re-engineering, Arslan has empowered countless individuals and professionals to break barriers, unlock their true potential, and achieve extraordinary success. A true pioneer in human brilliance and alternative therapies, Arslan is not just a trainer; he is a beacon of transformation, igniting a legacy of empowerment and excellence in everyone he touches.</p>
  `,
}

export default function AralanLarikIntro() {
  const data = aralanLarikIntroData;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-light-neutral bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-8">
          <div className="flex flex-col ">
            <h3 className="h3 text-black text-start">
              {data.title}
            </h3>
          </div>
          <div className="flex flex-col justify-center pt-1">
            <p className="custom-text1 font-light text-black text-start ">
              {data.description}
            </p>
            <div className="mt-4">
              <Button
                iconRight={true} 
                variant="primary" 
                size="medium" 
                text="More about us" 
                href="/about-us/who-is-arslan-larik" 
                className='my-auto' />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:grid-cols-2 gap-4 lg:gap-2 my-8">
          <div className="flex flex-col justify-center md:justify-end order-last md:order-none col-span-12 md:col-span-7 lg:col-span-1">
            <h4 className="h4 font-semibold text-primary text-start">
              {data.name}
            </h4>
            <h5 className="h5 font-medium text-black text-start">
              {data.designation}
            </h5>
            <div
              className="custom-text1 font-light text-black space-y-4"
              dangerouslySetInnerHTML={{ __html: data.specification }}
            />
          </div>
          <div className="flex justify-center md:justify-end col-span-12 md:col-span-5 lg:col-span-1">
            <img
              src={data.image?.src ?? ArsalanLarik.src}
              alt={data.image?.alt ?? "Arslan Larik"}
              className="w-full max-w-md object-cover rounded-xl"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
