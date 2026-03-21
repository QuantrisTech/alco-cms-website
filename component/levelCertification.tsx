"use client";
import React from "react";
import { LevelCertificationType } from "@/type/levelCertification";

type Props = {
  data: LevelCertificationType
}

export default function LevelCertification({ data }: Props) {

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">

        <h3 className="h3 text-start">
          <span className="text-secondary">
            {data?.title?.line1}
          </span>
          <br />
          <span className="text-white">
            {data?.title?.line2}
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-8 2xl:gap-12 py-2 md:py-4 lg:py-8 xl:py-12">
          {data.points.map((point, index) => (
            <div className="grid grid-cols-12 gap-8 2xl:gap-12" key={index}>
              <div className="flex items-center col-span-12 lg:col-span-7 xl:col-span-8 2xl:col-span-9 bg-white px-4 py-6 gap-4 rounded-xl border shadow-2xl">
                <div className="hidden xl:block">
                  <img
                    src={point?.imageBrand?.src}
                    alt={point?.imageBrand?.alt ?? "Arslan Larik"}
                    className=""
                    width="200px"
                  />
                </div>
                <div className="w-full xl:max-w-[70%]">
                  <div className="flex items-center gap-2">
                    <img
                    src={point?.imageBrand?.src}
                    alt={point?.imageBrand?.alt ?? "Arslan Larik"}
                    className="w-[70px] sm:w-[100px] bloack xl:hidden"
                  />
                  <h6 className="text-lg sm:text-xl xl:text-2xl text-primary text-start font-outfit font-semibold mb-2">
                    {point?.title}
                  </h6>
                </div>
                  <p className="custom-text1 font-light text-black/60 text-start ">
                    {point.description}
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3 flex items-center justify-center">
                <img
                  src={point?.imageCerficate?.src}
                  alt={point?.imageCerficate?.alt ?? "Arslan Larik"}
                  className="w-full max-w-md object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}