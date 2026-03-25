"use client";

import { ContentSectionType } from "@/type/contentSection";
import React from "react";
import Button from "./button";


type Props = {
    data?: ContentSectionType
};

const ContentSection = ({ data }: Props) => {
    return (
        data &&
        <section className={`${data?.padding ? data?.padding : "pb-6 md:pb-8 lg:pb-12 xl:pb-16 px-4"} ${data?.fullBg ? data?.fullBg : "max-w-7xl"} mx-auto`}>
            {/* Title */}
            {data?.title && (
                <div className={`h4 font-semibold ${data?.textAlign ? data?.textAlign : "text-center"} text-primary ${data?.underline === true && "underline"} `}>
                    {data?.title}
                </div>
            )}

            {/* Description */}
            {data?.description && (
                <div className={`${data?.textAlign ? data?.textAlign : "text-center"} text-primary-light custom-text1 max-w-7xl mx-auto`}>{data?.description}</div>
            )}

            {/* Mini Title */}
            {data?.miniTitle && (
                <div className={`h5 font-semibold ${data?.textAlign ? data?.textAlign : "text-center"} text-primary ${data?.underline === true && "underline"} `}>
                    {data?.miniTitle}
                </div>
            )}

            {/* Deatil Content */}
            {data?.detailContent && (
                <div className={`${data?.textAlign ? data?.textAlign : "text-center"} text-primary-light custom-text1 max-w-7xl mx-auto`}>{data?.detailContent}</div>
            )}

            {/* Images */}
            {data?.imagelist && data.imagelist.length > 0 && (
                <div className="grid grid-cols-4 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 2xl:gap-24 max-w-5xl mx-auto pt-6 md:pt-8 lg:pt-12 xl:pt-16">
                    {data.imagelist.map((img, index) => (
                        <img
                            key={index}
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto rounded-lg"
                        />
                    ))}
                </div>
            )}

            {/* content List */}
            {data?.contentlist && data.contentlist.length > 0 && (
                <div className="grid grid-cols-4 gap-4  max-w-5xl mx-auto pt-6 md:pt-8 lg:pt-12 xl:pt-16">
                    {data.contentlist.map((img, index) => (
                        <div className="rounded-xl bg-slate-200/60 drop-shadow-sm px-4 py-6">
                            {/* Images */}
                            <img
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-28 rounded-lg"
                            />
                            {/* Title */}
                            {img?.title && (
                                <div className={`text-2xl font-semibold text-center text-primary my-4 min-h-12`}>
                                    {img?.title}
                                </div>
                            )}

                            {/* Description */}
                            {img?.description && (
                                <div className={`text-center text-primary-light text-base`}>{img?.description}</div>
                            )}


                        </div>
                    ))}
                </div>
            )}

            {data?.button && (
                <div className="flex justify-center pt-6 md:pt-8">
                    <Button
                        iconRight={true}
                        text={data.button.text}
                        href={data.button.link}
                        variant="outlineSecondary"
                    />
                </div>
            )}

        </section>
    );
};

export default ContentSection;