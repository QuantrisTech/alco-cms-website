"use client";

import React from "react";


type Props = {
    data: {
        title: string
        description: React.ReactNode
    };
};

const ContentSection = ({ data }: Props) => {
    return (
        <section className="py-10 md:py-16">
            {/* Title */}
            {data?.title && (
                <h2 className="text-2xl md:text-4xl font-semibold text-center text-primary underline ">
                    {data?.title}
                </h2>
            )}

            {/* Description */}
            {data?.description && (
                <div className="text-center text-primary-light mt-10 max-w-7xl mx-auto ">{data?.description}</div>
            )}

        </section>
    );
};

export default ContentSection;