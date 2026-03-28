// import React from "react"
// import { EmblaOptionsType } from "embla-carousel"
// import { DotButton, useDotButton } from "../emblaCarouselDot"
// import useEmblaCarousel from "embla-carousel-react"
// import Button from "@/component/button";
// import "@/component/hero-carousel/heroCarousel.css"
// import { HeroPost } from "@/type/heroTypes"
// // images
// import heroSlide1 from "@/assets/hero/hero_slide1.webp";

// type PropType = {
//   slides: HeroPost[]
//   options?: EmblaOptionsType
//   onEditSlide?: (slide: HeroPost) => void
// }

// const HeroCarousel = ({ slides, options, onEditSlide }: PropType) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel(options)
//   const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
//   console.log(slides)
//   return (
//     <section className="hero_embla py-6 md:py-8 lg:py-12 xl:py-16 min-h-[500px]" style={{
//       background: `linear-gradient(90.5deg, #000000 -3.72%, rgba(0, 0, 0, 0) 104.47%), url(${heroSlide1.src})`,
//       backgroundSize: "cover",
//       backgroundPosition: "center",
//     }}>
//       {/* <div className="container mx-auto border px-4 2xl:px-0 "> */}
//       <div className="container mx-auto px-4 ">
//         <div className="hero_embla__viewport " ref={emblaRef}>
//           <div className="hero_embla__container">
//             {slides.map((slide, index) => (
//               <div className="hero_embla__slide" key={slide?._id} >
//                 <div className="hero_embla__slide__content mb-4 rounded-md text-white relative">
//                   {/* <h1 className="h1 text-white overflow-hidden">{slide?.title?.line1}</h1>
//                   <h1 className="h1 text-secondary overflow-hidden">{slide?.title?.line2}</h1> */}
//                   {index === 0 ? (
//                     <>
//                       <h1 className="h1 text-white overflow-hidden">
//                         {slide?.title?.line1}
//                       </h1>
//                       <h1 className="h1 text-secondary overflow-hidden">
//                         {slide?.title?.line2}
//                       </h1>
//                     </>
//                   ) : (
//                     <>
//                       <div className="h1 text-white overflow-hidden">
//                         {slide?.title?.line1}
//                       </div>
//                       <div className="h1 text-secondary overflow-hidden">
//                         {slide?.title?.line2}
//                       </div>
//                     </>
//                   )}
//                   <p
//   className="custom-text1 my-4 font-light max-w-[700px] w-full"
//   dangerouslySetInnerHTML={{ __html: slide?.description }}
// />
//                   <div className="mt-4 flex gap-2">
//                     {slide.button1?.text && (
//                       <Button 
//                         text={slide.button1.text}
//                         href={slide.button1.link}
//                         variant="secondary"
//                       // iconLeft={<svg>...</svg>}
//                       />
//                     )}
//                     {slide.button2?.text && (
//                       <Button 
//                         text={slide.button2.text}
//                         href={slide.button2.link}
//                         variant="white"
//                       // iconLeft={<svg>...</svg>}
//                       />
//                     )}
//                   </div>
//                     {/* add and editable word start */}
//                   {/* {onEditSlide && (
//                   <button
//                     className="absolute top-2 right-2 bg-white text-blue-500 px-2 py-1 rounded"
//                     onClick={() => onEditSlide(slide)}
//                   >
//                     Edit
//                   </button>
//                 )} */}
//                 {/* add and editable word end */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Dots */}
//       <div className="hero_embla__controls  container mx-auto px-4">
//         {scrollSnaps.map((_, index) => (
//           <DotButton
//             key={index}
//             onClick={() => onDotButtonClick(index)}
//             className={`hero_embla__dot ${index === selectedIndex ? "hero_embla__dot--selected" : ""}`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default HeroCarousel
import React from "react"
import { EmblaOptionsType } from "embla-carousel"
import { DotButton, useDotButton } from "../emblaCarouselDot"
import useEmblaCarousel from "embla-carousel-react"
import Button from "@/component/button";
import "@/component/hero-carousel/heroCarousel.css"
// images
import heroSlide1 from "@/assets/hero/hero_slide1.webp";
import { HeroItem } from "@/type/heroType";
import { usePopup } from "@/context/enrollPopupContext";
import Image from "next/image";

type PropType = {
  slides: HeroItem[]
  options?: EmblaOptionsType
  onEditSlide?: (slide: HeroItem) => void
}

const HeroCarousel = ({ slides, options, onEditSlide }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { openPopup } = usePopup();
  console.log(slides)

  // 👇 Get current slide's image
  const currentBg = slides[selectedIndex]?.image ?? heroSlide1.src;

  return (
    // <section
    //   className="hero_embla py-6 md:py-8 lg:py-12 xl:py-16 min-h-[550px] "
    //   style={{
    //     backgroundImage: `linear-gradient(90.5deg, #000000 -3.72%, rgba(0, 0, 0, 0) 104.47%), url(${currentBg})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     transition: "background-image 0.5s ease-in-out",
    //   }}
    // >
    <section className="hero_embla py-6 md:py-8 lg:py-12 xl:py-16 min-h-[550px] relative overflow-hidden">
      {/* Background Image using Next.js Image */}
      <Image
        src={currentBg}
        alt="Hero Slide"
        priority // 👈 tells Next.js to load this ASAP (good for LCP)
        fill
        sizes="100vw"
        className="object-cover object-center bg-[linear-gradient(90.5deg, #000000 -3.72%, rgba(0, 0, 0, 0) 104.47%)]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(90.5deg,_#000000_-3.72%,_rgba(0,0,0,0)_104.47%)] z-10" />

      {/* <div className="container mx-auto border px-4 2xl:px-0 "> */}
      <div className="container mx-auto px-4 z-20">
        <div className="hero_embla__viewport " ref={emblaRef}>
          <div className="hero_embla__container">
            {slides.map((slide, index) => (
              <div className="hero_embla__slide" key={index} >
                <div className="hero_embla__slide__content mb-4 rounded-md text-white relative">
                  {/* <h1 className="h1 text-white overflow-hidden">{slide?.title?.line1}</h1>
                  <h1 className="h1 text-secondary overflow-hidden">{slide?.title?.line2}</h1> */}
                  {index === 0 ? (
                    <>
                      <h1 className="h1 text-white overflow-hidden">
                        {slide?.title?.line1}
                      </h1>
                      <h1 className="h1 text-secondary overflow-hidden">
                        {slide?.title?.line2}
                      </h1>
                    </>
                  ) : (
                    <>
                      <div className="h1 text-white overflow-hidden">
                        {slide?.title?.line1}
                      </div>
                      <div className="h1 text-secondary overflow-hidden">
                        {slide?.title?.line2}
                      </div>
                    </>
                  )}
                  <p
                    className="custom-text1 my-4 font-light max-w-[700px] w-full"
                    dangerouslySetInnerHTML={{ __html: slide?.description }}
                  />
                  <div className="mt-4 flex gap-2 ">
                    {slide.button1?.text && (
                      <Button
                        iconRight={true}
                        text={slide.button1.text}
                        // href={slide.button1.link}
                        variant="secondary"
                        onClick={openPopup}
                      // iconLeft={<svg>...</svg>}
                      />
                    )}
                    {slide.button2?.text && (
                      <Button
                        iconRight={true}
                        text={slide.button2.text}
                        href={slide.button2.link}
                        variant="white"
                      // iconLeft={<svg>...</svg>}
                      />
                    )}
                  </div>
                  {/* add and editable word start */}
                  {/* {onEditSlide && (
                  <button
                    className="absolute top-2 right-2 bg-white text-blue-500 px-2 py-1 rounded"
                    onClick={() => onEditSlide(slide)}
                  >
                    Edit
                  </button>
                )} */}
                  {/* add and editable word end */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero_embla__controls  container mx-auto px-4">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`hero_embla__dot ${index === selectedIndex ? "hero_embla__dot--selected" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel