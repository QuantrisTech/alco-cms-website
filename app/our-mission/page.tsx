import Banner from "@/component/banner";
import ContactInfo from "@/component/contactInfo";
import EmpowerYourself from "@/component/empowerYourself";
import WhatWeDo from "@/component/whatWeDo";
import OurMissionBg from "@/assets/background/our-mission.webp";

const bannerData = {
  title: {
    line1:  "Our Mission, Vision & Core Values",
  },
  image: OurMissionBg.src
};

export default function OurMission() {
  return (
    <div className="">
      <Banner data={bannerData}/>
      <EmpowerYourself />
      <WhatWeDo />
      <ContactInfo />
    </div>
  );
}