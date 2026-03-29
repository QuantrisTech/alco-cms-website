import React, { useRef } from "react"
import { EmblaOptionsType } from "embla-carousel"
import useEmblaCarousel from "embla-carousel-react"
import Button from "@/component/button"
import "@/component/testimonials-carousel/testimonialsCarousel.css"
import { TestimonialsPost } from "@/type/testimonialsTypes"
import { HiStar } from "react-icons/hi2";
import VideoPlayer from "../videoPlayer"

type PropType = {
  slides: TestimonialsPost[]
  options?: EmblaOptionsType
  onEditSlide?: (slide: TestimonialsPost) => void
}

const TestimonialsCarousel = ({ slides, options, onEditSlide }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  return (

    <section className="testimonials_embla pt-6 md:pt-8 lg:pt-12 xl:pt-16 ">
      <div className="testimonials_embla__viewport container mx-auto " ref={emblaRef}>
        <div className="testimonials_embla__container ">
          {slides.map((slide, index) => (
            <div className="testimonials_embla__slide" key={slide?._id}>
              <div className="testimonials_embla__slide__content mb-4 rounded-md relative">
                <div className=" grid grid-cols-12 gap-8 ">
                  <div
                    className="col-span-12 lg:col-span-5 relative cursor-pointer overflow-hidden rounded-md"
                  >
                    <VideoPlayer
                      className="relative bg-primary overflow-hidden h-72 lg:h-96 w-full"
                      videoUrl={slide?.videoUrl}
                      thumbnail={slide?.thumbnail}
                      videoClass="w-full h-full object-contain rounded-lg"
                      hoverPlay={true}
                    />
                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center opacity-100 transition-opacity duration-300 hover:opacity-0">
                      <span className="text-white text-4xl font-bold">▶</span>
                    </div> */}
                  </div>

                  <div className="col-span-12  lg:col-span-7 flex flex-col justify-between">
                    <p className="font-outfit text-base md:text-lg lg:text-xl text-black mb-2">{slide.description}</p>
                    <div>
                      <h5 className="font-outfit font-semibold text-lg">{slide.name}</h5>
                      <p className="font-outfit text-sm text-gray-600">{slide.designation}</p>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={`text-yellow-400 text-[18px] ${i >= slide.rating ? "text-gray-300" : ""}`}>
                            <HiStar />
                          </span>
                        ))}
                      </div>
                      <Button
                        iconRight={true}
                        text="Read More"
                        variant="primary"
                        size="medium"
                        href="/#testimonials"
                        className="mt-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonials_embla__controls">
        <div className="testimonials_embla__buttons">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="bg-primary text-white px-3 py-1 rounded"
          >
            ←
          </button>

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="bg-primary text-white px-3 py-1 rounded"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsCarousel