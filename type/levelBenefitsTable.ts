import { BannerData } from "./bannerType"

export type LevelBenefitsTableType = {
  title: {
    line1: string
    line2: string
  }
  points: {
    content: string;
    personal: string;
    coaches: string;
  }[]

}