"use client";

import React, { useState } from "react";
import { Faq } from "@/app/faqs/data";

type Props = {
  data: {
    faqs: Faq[];
  };
};

export default function OurFaqs({ data }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleChange = (panel: number) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <>
      {data?.faqs?.length > 0 && (
        <section className="w-full bg-white py-4 px-4 sm:px-20 rounded-tr-[150px] my-10">

          <div className="flex justify-center items-center">
            <h3 className="h4 text-primary font-bold font-outfit">
              {/* FREQUENTLY <span className="text-primaryGreen">ASKED</span> QUESTIONS */}
              Your Questions <span className="text-primary-dark">Answered</span>
            </h3>
          </div>

          <div className="accordion-group w-[90%] lg:w-[75%] 2xl:w-[60%] mx-auto">
            {data.faqs.map((faq, i) => {
              const isOpen = expanded === i;

              return (
                <div key={i} className="accordion py-6 border-b border-gray-200">

                  <button
                    onClick={() => handleChange(i)}
                    className={`flex justify-between w-full text-2xl text-outfit transition-colors duration-300 relative ${isOpen ? "text-gray-400" : "text-primary"
                      }`}
                  >
                    <h5 className="text-left pr-3 w-[90%]">
                      {faq.question}
                    </h5>

                    {/* Arrow */}
                    <span
                      className={`transition-transform duration-300 absolute top-1 right-4 ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      ⌄
                    </span>
                  </button>

                  {/* Animated Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                        ? "grid-rows-[1fr] opacity-100 pt-3"
                        : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`transform transition-all duration-500 delay-100 ${isOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-2 opacity-0"
                          }`}
                      >
                        {/* <div
                          className="pr-4 text-black text-sm md:text-md faq_editor"
                          dangerouslySetInnerHTML={{ __html: faq.answer }}
                        /> */}
                        <div
                          className="pr-4 text-gray-600 text-sm md:text-base ">
                            {faq.answer}
                      </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}