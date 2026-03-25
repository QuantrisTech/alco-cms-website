"use client";

import OurFaqs from "@/component/faqs";
import { homeFaqs } from "@/app/faqs/data";
import programLevel1 from "@/assets/background/program-level-1.webp";
import Banner from "@/component/banner";
import ContactUS from "@/component/contact";

const bannerData = {
  title: {
    line1: "Frequently Asked Questions",
    align: "text-center mx-auto"
  },
  image: programLevel1.src
};

export default function Faqs() {
  return (
    <>
      <Banner data={bannerData} />
      <OurFaqs data={ homeFaqs } />
      <ContactUS />
    </>
  );
}