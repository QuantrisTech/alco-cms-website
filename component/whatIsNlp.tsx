"use client";

import React from "react";
import Button from "./button";
import { WhatIsNlpData } from "@/type/whatIsNlp";
import VideoPlayer from "./videoPlayer";
// import NlpVideo from "/videos/What-is-NLP.mp4";
import whatIsNLPThumbnail from "@/assets/whatIsNLP/What-is-NLP-Thumbnail.webp";
import { usePopup } from "@/context/enrollPopupContext";

const whatIsNlpData: WhatIsNlpData = {
  title: "What Is Neuro-Linguistic Programming?",
  video: "https://res.cloudinary.com/dmbpjv9e8/video/upload/v1774598216/What-is-NLP_u9fi3t.mp4",
  thumbnail: whatIsNLPThumbnail,
  description:
    "What if you could master your thoughts, emotions, and behaviors to create a life of purpose and freedom? NLP is a transformative system of tools and techniques that empowers you to master your thoughts, emotions, and behaviors. Imagine having the ability to take full control of your life—reprogramming your mind to break free from limitations, achieve clarity, and create unstoppable momentum toward your goals.",
  button: {
    text: "Enroll Now"
  },
}

export default function WhatIsNlp() {
  const data = whatIsNlpData;
  const { openPopup } = usePopup();

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-dark-primary bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">

        <h3 className="h3 text-white text-start">
          {data.title}
        </h3>

        {/* <div className="my-8">
          
          <video
            controls
            preload="metadata"
            className="w-full h-[450px] object-cover rounded-lg"
          >
            <source src={data?.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}

        <div className="my-8">
          <VideoPlayer
            videoUrl={data.video}
            thumbnail={data.thumbnail}
            className="aspect-video relative rounded-xl overflow-hidden h-[70dvh] w-full bg-black"
            videoClass="w-full h-full object-contain rounded-lg"

          />
        </div>

        <p className="custom-text1 font-light text-white text-start mb-8">
          {data.description}
        </p>


        <Button
          iconRight={true}
          text={data.button.text}
          onClick={openPopup}
          variant="secondary"
        />

      </div>
    </section>
  );
}