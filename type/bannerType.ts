type BannerTitle = {
  line1: string
  line2?: string
}

export type BannerData = {
  level?: string
  image?: string | undefined
  title: BannerTitle
  description?: string
  video?: string
}