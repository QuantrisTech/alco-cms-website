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
          {!data?.introPage && (
            <><h3 className="h3 text-start">
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
            </>)}
          {data?.introPage === true && (<h3 className="h6 text-start ">
            <div className="text-secondary font-bold">
              {data?.title?.line1}
            </div>
            <div className="text-white">
              {data?.title?.line2}
            </div>
          </h3>)}

        </div>
        <div className="grid grid-cols-1 gap-8 2xl:gap-12 py-2 md:py-4 lg:py-8 xl:py-12">
          <div className="overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full border-collapse">

              {/* Header */}
              <thead>
                <tr className="bg-primary text-white text-left ">
                  {data.headers.map((header, i) => (
                    <th key={i} className="px-8 py-6 h6">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {data?.points.map((point, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0
                      ? "bg-white"
                      : "bg-blue-50 border-y border-primary drop-shadow-lg"
                      }`}
                  >
                    {/* First column (Content) */}
                    <td className="px-8 py-6 font-medium text-gray-800 hover:text-gray-600 custom-text1 cursor-pointer">
                      {point.content}
                    </td>

                    {/* Dynamic columns */}
                    {point.values.map((val, i) => (
                      <td key={i} className="px-8 py-6 text-gray-600 hover:text-gray-500 cursor-pointer">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {data?.introPage === true &&
          // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-12 py-4 md:py-8 xl:py-12">
          data?.videos && (
            <div>
              {data?.videoTitle && (
                <h3 className="h5 text-center ">
                  <div className="text-white font-bold underline">
                    {data?.videoTitle}
                  </div>
                </h3>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 2xl:gap-12 py-4 md:py-8 2xl:py-12">
                {data?.videos.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/20 backdrop-blur-md shadow-xl rounded-xl overflow-hidden"
                  >
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover"
                    >
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    <p className="custom-text1 font-light text-white my-3 text-center px-2">
                      {item.title}
                    </p>
                  </div>
                ))
                  // </div>
                }
              </div>

              <div className="mt-4 flex justify-center">
                <Button
                  iconRight={true} variant="primary" size="medium" text="Learn More" href="#" className='my-auto min-w-[200px]' />
              </div>
            </div>
          )}
      </div>
    </section>
  );
}