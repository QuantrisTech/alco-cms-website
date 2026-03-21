import { useState } from "react";

export default function VideoPlayer({ videoId, thumbnail }: { videoId: string | undefined; thumbnail: string }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full h-[350px] lg:h-[450px] rounded-lg overflow-hidden cursor-pointer">
      {!play && (
        <img
          src={thumbnail}
          alt="Video Thumbnail"
          className="w-full h-full object-cover"
          onClick={() => setPlay(true)}
        />
      )}
      {play && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      {!play && (
        <div
          className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold"
          onClick={() => setPlay(true)}
        >
          ▶
        </div>
      )}
    </div>
  );
}