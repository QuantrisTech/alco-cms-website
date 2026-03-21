import { BannerData } from "./bannerType"

export type LevelCertificationType = {
  title: {
    line1: string
    line2: string
  }
  points: {
    title: string
    description: string
    imageBrand: {
      src: string
      alt: string
    }
    imageCerficate: {
      src: string
      alt: string
    }
  }[]

}