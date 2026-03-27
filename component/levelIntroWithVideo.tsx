"use client";

import React from "react";
import Button from "./button";
import { LevelIntroWithVideoType } from "@/type/levelIntroWithVideo"
import VideoPlayer from "./videoPlayer";

type Props = {
  data: LevelIntroWithVideoType
}

export default function LevelIntroWithVideo({ data }: Props) {

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-light-neutral bg-cover bg-top-left w-full">
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
          className="custom-text1 font-light text-black my-2 xl:my-3"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />

        <div className="my-8">
          <VideoPlayer
            className="aspect-video relative rounded-xl overflow-hidden h-[60dvh] w-full"
            videoUrl={data?.video}
            thumbnail={data?.thumbnail} 
            videoClass="w-full h-full object-cover rounded-lg"
            // hoverPlay={true}
          />
        </div>

      </div>
    </section>
  );
}