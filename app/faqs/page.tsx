"use client";

import OurFaqs from "@/component/faqs";
import { homeFaqs } from "@/app/faqs/data";

export default function Faqs() {
  return (
    <>
      <OurFaqs data={{ faqs: homeFaqs }} />
    </>
  );
}