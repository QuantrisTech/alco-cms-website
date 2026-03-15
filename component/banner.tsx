"use client";

import React from "react";
import Button from "./button";
import { BannerData } from "@/type/bannerType";

const bannerData: BannerData = {
  title: "Our Mission, Vision & Core Values",

//   description:
//     "Train with Arslan Larik & Company (AL&CO) to gain proven strategies, expert guidance, and personalized support that help you achieve breakthrough results and sustainable growth.",
//   button1: {
//     text: "Learn More",
//     link: "/why-train-with-alco"
//   },
//   button2: {
//     text: "Get Started",
//     link: "/get-started"
//   }
};

export default function Banner() {
  const data = bannerData;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 px-4 bg-image-alco-center bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-8">
          <div className="flex flex-col justify-start ">
            <h1 className="h1 text-white text-start max-w-2xl">
              {data.title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
