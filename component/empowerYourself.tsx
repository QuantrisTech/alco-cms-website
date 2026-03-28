"use client";

import React from "react";
import Button from "./button";
import { EmpowerYourselfData } from "@/type/empowerYourself";
// images
import About1 from '@/assets/our-mission/About1.webp'
import About2 from '@/assets/our-mission/About2.webp'
import About3 from '@/assets/our-mission/About3.webp'
import Image from "next/image";

const empowerYourself: EmpowerYourselfData = {
  title: "Empower Yourself For Life",

  description:
    "We empower you to live a life of purpose. Whether you’re looking to make a career change, start your own business, or simply find more fulfillment in your day-to-day life, we can surely help you in achieving that.",
  points: [
    {
      title: "Misson",
      description: "At AL&CO, we understand that every individual has unique talents, goals, and aspirations. However, not everyone has equal access to the tools, resources, and support they need to reach their full potential and live extraordinary lives. This is why our mission is to empower individuals by providing them with the means to achieve their aspirations. We believe that by providing individuals with the right tools and resources, they can improve their skills, gain knowledge, and achieve their goals. Our mission also extends to the community level. We believe that by helping individuals reach their full potential, we can make a positive impact on their families and communities, and ultimately make the world a better place for everyone.",
      image: {
        src: About1.src,
        alt: "Misson"
      },
    },
    {
      title: "Vision",
      description: "Our vision is to develop a world where well-being, human brilliance, and empowerment are available and accessible to all. We believe that by creating a culture of well-being, tapping into the full potential of humanity, and empowering individuals to make a positive impact, we can create a better world for everyone. To achieve our vision, our NLP trainers are committed to taking a holistic approach that addresses the physical, mental, emotional, and social aspects of well-being.",
      image: {
        src: About2.src,
        alt: "Vision"
      },
    },
    {
      title: "Value",
      description: "Compassion is the foundation of everything we do. We believe that treating everyone with kindness and empathy is not only the right thing to do but is also essential for creating a better world for everyone. We understand that compassion is not a luxury, but a necessity for humanity to survive. Our core value of compassion drives us to create a culture of empathy and understanding within our society. We strive to create an environment where everyone feels valued, respected, and heard. We believe that by fostering a culture of compassion, we can create a more inclusive and equitable environment for everyone.",
      image: {
        src: About3.src,
        alt: "Value"
      },
    }
  ]
}

export default function EmpowerYourself() {
  const data = empowerYourself;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-gradient-light-neutral-lg bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-start ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-outfit text-primary text-start mb-2">
            {data.title}
          </h2>
          <p className="custom-text1 font-light text-black text-start ">
            {data.description}
          </p>
        </div>
        <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-12 xl:space-y-16 my-6 md:my-8 lg:my-12 xl:my-16 ">
          {data.points.map((point, index) => (
            <div key={index} className="grid grid-cols-12 gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 ">
              <div
                className={`col-span-12 lg:col-span-5 xl:col-span-6 ${index % 2 !== 0 ? "lg:order-2" : ""
                  }`}>
                <div className="relative w-full h-[310px] sm:h-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={point.image.src}
                    alt={point.image.alt || "image"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover xl:object-top"
                  />
                </div>
                {/* <img src={point.image.src} alt={point.image.alt} className="xl:object-top object-cover shadow-xl max-h-[310px] sm:max-h-[350px] lg:max-h-[450px] w-full rounded-lg" /> */}
              </div>
              <div className="col-span-12 lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-outfit text-primary text-start mb-4 ">
                  {point.title}
                </h3>
                <p className="custom-text1 font-medium text-black/85 text-start font-outfit">
                  {point.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
