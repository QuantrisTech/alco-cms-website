"use client";

import React, { useState } from "react";

import { FaPlay } from "react-icons/fa";

type VideoPlayerProps = {
  videoUrl?: string;
  thumbnail?: string;
};

const VideoPlayer = ({ videoUrl, thumbnail }: VideoPlayerProps) => {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full h-[70dvh] aspect-video relative rounded-xl overflow-hidden">
      
      {/* Thumbnail */}
      {!play && (
        <div
          className="absolute inset-0 cursor-pointer group"
          onClick={() => setPlay(true)}
        >
          <img
            src={thumbnail}
            alt="video thumbnail"
            className=" h-full object-right-top mx-auto"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
             <FaPlay className="text-white" />
            </div>
          </div>
        </div>
      )}

      {/* Video */}
      {play && (
        <iframe
          className="w-full h-full"
          src={`${videoUrl}?autoplay=1`}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default VideoPlayer;