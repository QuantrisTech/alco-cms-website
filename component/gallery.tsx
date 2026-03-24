"use client";

import { GalleryItem } from "@/type/gallery";
import GalleryCarousel, { GalleryImage } from "./gallery-carousel/galleryCarousel";

type Props = {
  data: GalleryItem;
};

const Gallery = ({ data }: Props) => {
  return (
    <section className="py-10 md:py-16">
      {/* Title */}
      {data.title && (
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-primary underline ">
          {data.title}
        </h2>
      )}

      {/* Description */}
      {data.description && (
        <div className="text-center text-primary-light my-10 max-w-7xl mx-auto ">{data.description}</div>
      )}

      {/* Carousel */}
      <GalleryCarousel slides={data.image} />
    </section>
  );
};

export default Gallery;