"use client";

import React from "react";
import Button from "./button";
import { WhatWeDoData } from "@/type/whatWeDo";
// import NlpVideo from "/videos/What-is-NLP.mp4";

const whatWeDoData: WhatWeDoData = {
  title: {
    line1: "We Love What We Do",
    line2: "Begin Your Journey Towards An Empowered Life Today",
  },
  points: [
    {
      title: "CLIENTS FIRST",
      description:
        "Our client’s success is our priority; they come to us with a vision, and we make it our mission to ensure that their ambition becomes a reality.",
    },
    {
      title: "Empowerment For All",
      description:
        "Our revolutionary platform creates opportunities for individuals to broaden their horizons and reach new goals. Stimulating dialogue encourages personal growth, allowing everyone in our ecosystem the chance to thrive intellectually.",
    },
    {
      title: "MASSIVE ACTION",
      description:
        "Embrace life’s hurdles and seize the opportunity to develop your skills with everything you face. We believe in utilizing challenges as a chance for growth, betterment, and success.",
    },
    {
      title: "Shared Reliability",
      description:
        "Human relationships are essential in enabling us to foster our greatest potential. Connecting together can generate strong and meaningful bonds, allowing both individuals and groups to reach their desired success through the power of collective collaboration.",
    },
    {
      title: "SOLUTION ORIENTATION",
      description:
        "Making wise decisions can be powerful for transforming your life. By carefully considering what is best, you are taking charge of your future and paving the way to an improved quality of life with our help.",
    },
  ],
}

export default function WhatWeDo() {
  const data = whatWeDoData;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">

        <h3 className="h3 text-start">
          <span className="text-secondary">
            {data.title.line1}
          </span>
          <br />
          <span className="text-white">
            {data.title.line2}
          </span>
        </h3>

        <div className="bg-white p-4 lg:p-6 xl:p-8 rounded-lg shadow-lg mt-3 md:mt-4 lg:mt-6 xl:mt-8">

          {
            data.points.map((point, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:space-x-4 mb-2 sm:mb-6 last:mb-2">
                <div className="px-[15px] h-10 bg-primary-dark text-secondary rounded-full mt-1 hidden sm:flex justify-center items-center text-[20px]" >{index + 1}
                </div>
                <div className="flex flex-col mb-2 sm:mb-auto">
                  <div className="flex items-center mb-1 sm:mb-0">
                    <div className="px-3 h-8 mr-2 bg-primary-dark text-secondary rounded-full flex justify-center items-center sm:hidden" >{index + 1}
                  </div>
                   <h6 className="h6 text-primary text-start font-semibold ">
                    {point.title}
                  </h6>
                  </div>
                 
                  <p className="custom-text1 font-light text-black/60 text-start ">
                    {point.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}