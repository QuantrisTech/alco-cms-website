"use client";

import React from "react";
import { BannerType } from "@/type/bannerType";

// bg-image-alco-center

type Props = {
  data: BannerType
}

export default function Banner({ data }: Props) {

  return (
    <section className={`py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 w-full min-h-[450px] flex items-center  ${data?.className ? data?.className : "bg-cover bg-no-repeat"}`}style={{ backgroundImage: `url(${data?.image})` }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-8">
          <div className="flex flex-col justify-start ">
            <div className="flex mb-4">
            {data?.level && (
              <div className="bg-gradient-secondary-to-light-secondary bg-cover text-black px-4 py-1">
                {data?.level}
              </div>
            )}
            </div>
            <h1 className="h1 text-white text-start">
              {data?.title?.line1}

              {data?.title?.line2 && (
                <span className="block">
                  {data?.title?.line2}
                </span>
              )}
            </h1>
            {data?.description && (
              <p className="custom-text1 font-light text-white text-start mt-4">
                {data?.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
