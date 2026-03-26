"use client";
import Button from "./button";
import { ALCOCenterData } from "@/type/aLCOCenter";

const aLCOCenterData: ALCOCenterData = {
  title: "AL&CO – Center of Human Brilliance and Behavioral Reengineering",
  button1: {
    text: "Enroll Now",
    link: "/why-train-with-alco"
  },
  button2: {
    text: "Call Now",
    link: "/get-started"
  }
};

export default function ALCOCenter() {
  const data = aLCOCenterData;

  return (
    <section className="py-6 md:py-8 lg:py-12 xl:py-16 sm:px-4 bg-image-alco-center bg-cover bg-top-left w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 my-8">
          <div className="flex flex-col justify-start ">
            <h3 className="h3 text-white text-start ">
              {data.title}
            </h3>
            <div className="mt-4 flex gap-4">
              <Button
                iconRight={true} variant="secondaryBlack" size="medium" text={data.button1.text} href={data.button1.link} className='my-auto' />
              <Button
                iconRight={true} variant="white" size="medium" text={data.button2.text} href={data.button2.link} className='my-auto' />
            </div>
          </div>
          <div className="flex flex-col justify-center pt-1">

          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 my-8">


        </div>
      </div>
    </section>
  );
}
