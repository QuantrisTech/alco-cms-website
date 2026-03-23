"use client";
import { LevelBenefitsTableType } from "@/type/levelBenefitsTable";
import React from "react";
import Button from "./button";

type Props = {
  data: LevelBenefitsTableType
}

export default function LevelBenefitsTable({ data }: Props) {

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center">
          <h3 className="h3 text-start">
            <span className="text-secondary mr-2">
              {data?.title?.line1}
            </span>
            <span className="text-white">
              {data?.title?.line2}
            </span>
          </h3>
          <div className="mt-4">
            <Button
              iconRight={true} variant="primary" size="medium" text="Learn More" href="#" className='my-auto' />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 2xl:gap-12 py-2 md:py-4 lg:py-8 xl:py-12">
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full border-collapse">

              {/* Header */}
              <thead>
                <tr className="bg-primary text-white text-left ">
                  {/* <th className="px-8 py-6 h6">Content</th>
                  <th className="px-8 py-6 h6">Benefits for Personal Development</th>
                  <th className="px-8 py-6 h6">Benefits for Coaches</th> */}
                  {data.headers.map((header, i) => (
                    <th key={i} className="px-8 py-6 h6">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              {/* <tbody>
                {data.points.map((point, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0
                      ? "bg-white"
                      : "bg-blue-50 border-y border-primary drop-shadow-lg"
                      } `}
                  >
                    <td className="px-8 py-6 font-medium text-gray-800 custom-text1">
                      {point.content}
                    </td>
                    <td className="px-8 py-6 text-gray-600 custom-text1">
                      {point.personal}
                    </td>
                    {point.coaches && (<td className="px-8 py-6 text-gray-600 custom-text1">
                      {point.coaches}
                    </td>)}
                  </tr>
                ))}
              </tbody> */}
              <tbody>
                {data.points.map((point, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0
                        ? "bg-white"
                        : "bg-blue-50 border-y border-primary"
                      }`}
                  >
                    {/* First column (Content) */}
                    <td className="px-8 py-6 font-medium text-gray-800">
                      {point.content}
                    </td>

                    {/* Dynamic columns */}
                    {point.values.map((val, i) => (
                      <td key={i} className="px-8 py-6 text-gray-600">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
          {/* {data.points.map((point, index) => (
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
                  <p className="custom-text-1 font-light text-black/60 text-start ">
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
          ))} */}
        </div>
      </div>
    </section>
  );
}