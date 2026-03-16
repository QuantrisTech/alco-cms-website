"use client";

import React from "react";
import Button from "./button";
import { ContactInfoData } from "@/type/contactInfo";
import ContactBg from "@/assets/background/contact-info.webp";
import { HiOutlinePhone } from "react-icons/hi2";

const contactInfoData: ContactInfoData = {
  title: "Call Us for More Information",
  number: "+1 (888) 681 4808",
  description:
    "Train with Arslan Larik & Company (AL&CO) to gain proven strategies, expert guidance, and personalized support that help you achieve breakthrough results and sustainable growth.",
  button: {
    text: "Register Today",
    link: "#"
  }
}

export default function ContactInfo() {
  const data = contactInfoData;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 px-4 bg-light-neutral bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="px-6 md:px-8 lg:px-12 xl:px-16 py-4 md:py-6 lg:py-10 xl:py-14  bg-cover bg-top-left w-full rounded-xl" style={{ backgroundImage: `url(${ContactBg.src})` }}>
          <div className="grid grid-cols-12 gap-2 my-8">
            <div className="col-span-12 md:col-span-8 lg:col-span-9 xl:col-span-4 2xl:col-span-5 flex flex-col sm:flex-row sm:space-x-4 sm:items-center">
              <a
                href={`tel:+1234567890`}
                className="bg-secondary-light text-white h-16 w-16 mb-4 flex justify-center items-center rounded-full shadow hover:bg-yellow-600 transition"
              >
                <HiOutlinePhone size={30} />
              </a>

              <div className="flex flex-col justify-start ">
                <p className="custom-text-1 font-light text-white text-start ">
                  {data.title}
                </p>
                <h3 className="h3 text-white text-start ">
                  {data.number}
                </h3>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-6 2xl:col-span-5 md:order-last xl:order-none">
              <p className="custom-text-1 font-light text-white text-start my-4">
                {data.description}
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2 2xl:col-span-2 flex flex-col justify-end ">
              <Button variant="secondary" size="medium" text="Register Today" href="#" className='my-auto ml-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
