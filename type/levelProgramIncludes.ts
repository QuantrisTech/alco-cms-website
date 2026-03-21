import React from "react"
import { BannerData } from "./bannerType"

export type LevelProgramIncludesType = {
  title: {
    line1: string
    line2: string
  }
  points: {
    title: string
    description: string | React.ReactNode
    theme: string
    image: {
      src: string
      alt: string
    }
  }[]

}