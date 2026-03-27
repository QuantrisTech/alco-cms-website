"use client";
import React from "react";
import Button from "./button";
import { LevelGraduatesExperienceType } from "@/type/levelGraduatesExperience";
import VideoPlayer from "./videoPlayer";

type Props = {
  data: LevelGraduatesExperienceType
}

export default function LevelGraduatesExperience({ data }: Props) {

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center">
          <h3 className="h3 text-start">
            <span className="text-secondary mr-2">
              {data?.title?.line1}
            </span>
            <br/>
            <span className="text-white">
              {data?.title?.line2}
            </span>
          </h3>
          <div className="mt-4 flex gap-4">
            <Button 
iconRight={true} variant="white" size="medium" text="Register Today" href="#" className='my-auto' />
            <Button 
iconRight={true} variant="secondary" size="medium" text="Learn More" href="#" className='my-auto' />
          </div>
        </div>
        <div className="my-8">
          {/* <video
            controls
            preload="metadata"
            className="w-full h-[350px] lg:h-[450px] object-cover rounded-lg"
          >
            <source src={data?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
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