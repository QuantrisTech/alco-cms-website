"use client";
import Hero from "@/component/Hero";
import Brand from "@/component/Brand";
import WhatIsNlp from "@/component/whatIsNlp";
import AralanLarikIntro from "@/component/AralanLarikIntro";
import OurProgram from "@/component/OurProgram";
import Benefits from "@/component/Benefits";
import Accredited from "@/component/Accredited";
import WhyTrainWithAL from "@/component/WhyTrainWithAL";
import ALCOCenter from "@/component/ALCOCenter";
import Testimonials from "@/component/testimonial";
import { home } from "./data";

export default function Home() {
  return (
    <div className="">
      <Hero data={home.hero}/>
      <Brand />
      <WhatIsNlp />
      <AralanLarikIntro />
      <OurProgram />
      <Benefits />
      <Accredited />
      <WhyTrainWithAL />
      <ALCOCenter />
      <Testimonials />
    </div>
  );
}