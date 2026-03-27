"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import "@/component/gallery-carousel/galleryCarousel.css";

export type GalleryImage = {
    src: string;
    alt: string;
    title: string;
};

type ThumbProps = {
    selected: boolean;
    onClick: () => void;
    image: string;
};

type Props = {
    slides?: GalleryImage[];
    options?: EmblaOptionsType;
};

/* ================= THUMB ================= */
const Thumb = ({ selected, onClick, image }: ThumbProps) => {
    return (
        <div className={`gallery_embla-thumbs__slide ${selected ? "gallery_embla-thumbs__slide--selected" : ""}`}>
            <button onClick={onClick} type="button" className="w-full">
                <img
                    src={image}
                    className={`w-full h-[100px] object-cover rounded-lg border-2 transition-all duration-200 ${
                        selected
                            ? "border-white scale-105"
                            : "border-transparent hover:border-white/60"
                    }`}
                />
            </button>
        </div>
    );
};

/* ================= MAIN COMPONENT ================= */
const GalleryCarousel = ({ slides, options }: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
        loop: true,
        ...options,
    });

    /* ================= HANDLERS ================= */
    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi) return;
        const selected = emblaMainApi.selectedScrollSnap();
        setSelectedIndex(selected);
    }, [emblaMainApi]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();
        emblaMainApi.on("select", onSelect);
        return () => {
            emblaMainApi.off("select", onSelect);
        };
    }, [emblaMainApi, onSelect]);

    /* ================= UI ================= */
    return (
        <div className="gallery_embla flex gap-4 max-w-6xl items-start">

            {/* MAIN SLIDER */}
            <div
                className="gallery_embla__viewport w-[70%] md:w-[75%] lg:w-[80%]"
                ref={emblaMainRef}
            >
                <div className="gallery_embla__container">
                    {slides?.map((slide, index) => (
                        <div className="gallery_embla__slide relative bg-black" key={index}>
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className="w-full h-[350px] md:h-[450px] object-contain"
                            />
                            {slide.title && (
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center p-3 text-sm md:text-base">
                                    {slide.title}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* THUMBNAILS — pure native CSS scroll */}
            <div className="gallery_embla-thumbs w-[30%] md:w-[25%] lg:w-[20%]">
                <div className="gallery_embla-thumbs__viewport">
                    <div className="gallery_embla-thumbs__container">
                        {slides?.map((slide, index) => (
                            <Thumb
                                key={index}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                image={slide.src}
                            />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GalleryCarousel;