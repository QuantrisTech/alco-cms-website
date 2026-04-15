import { HeroData } from "@/type/heroType";
import { HeroType } from "@/type/homeType";
import heroSlide1 from "@/assets/hero/hero_slide1.webp";
import heroSlide2 from "@/assets/hero/hero_slide1.webp";
import heroSlide3 from "@/assets/hero/hero_slide1.webp";

const heroData: HeroData = [
  {
    "title": {
      "line1": "Welcome To A Journey That ",
      "line2": "Changes Everything"
    },
    "description": "Have you ever felt held back by thoughts, emotions, or beliefs that seem impossible to escape? <br/> Imagine breaking free from those invisible chains and discovering a version of yourself you never thought possible. At Arslan Larik & Company (AL&CO), this isn’t just a promise; it’s your new reality. <br/> Your life’s transformation starts here!",
    "button1": {
      "text": "Enroll Now",
    },
    "button2": {
      "text": "Contact us",
      "link": "/contact/"
    },
    "image": heroSlide1
  },
  {
    "title": {
      "line1": "A Journey That ",
      "line2": "Changes Everything"
    },
    "description": "At Arslan Larik & Company, we help you break free from limiting beliefs and emotional barriers so you can unlock your hidden potential and step into a powerful new reality.",
    "button1": {
      "text": "Enroll Now",
    },
    "button2": {
      "text": "Contact us",
      "link": "/contact/"
    },
    "image": heroSlide2
  },
  {
    "title": {
      "line1": "Discover the ",
      "line2": "Power of NLP"
    },
    "description": "Neuro-Linguistic Programming is a transformative system that empowers you to master your thoughts, emotions, and behaviors—opening doors to success and fulfillment in every area of life.",
    "button1": {
      "text": "Enroll Now",
    },
    "button2": {
      "text": "Contact us",
      "link": "/contact/"
    },
    "image": heroSlide3
  }
]

export const home: HeroType = {
  hero: heroData,
};