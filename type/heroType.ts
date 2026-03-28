import { StaticImageData } from "next/image"

export type HeroItem = {
  title: {
    line1: string
    line2: string
  }
  description: string
  button1: {
    text: string
    link?: string
  }
  button2: {
    text: string
    link: string
  }
  image: StaticImageData
}

export type HeroData = HeroItem[]