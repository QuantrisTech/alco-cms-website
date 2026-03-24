import React from "react";

export type GalleryImage = {
        src: string
        alt: string
        title: string
};

export type GalleryItem = {
    title: string
    description: React.ReactNode
    image: GalleryImage[]
};