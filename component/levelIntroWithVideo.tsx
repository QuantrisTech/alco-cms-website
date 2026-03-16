"use client";

import React from "react";
import Button from "./button";
import {LevelIntroWithVideoType} from "@/type/levelIntroWithVideo"

type Props = {
  data: LevelIntroWithVideoType
}

export default function LevelIntroWithVideo({ data }: Props) {

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 px-4 bg-light-neutral bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">

        <h3 className="h3 text-start">
          <span className="text-primary">
            {data?.title?.line1}
          </span>
          <br />
          <span className="">
            {data?.title?.line2}
          </span>
        </h3>
        <div
              className="custom-text-1 font-light text-black space-y-4"
              dangerouslySetInnerHTML={{ __html: data?.description }}
            />

        <div className="my-8">
          <video
            controls
            preload="metadata"
            className="w-full h-[450px] object-cover rounded-lg"
          >
            <source src={data?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
}