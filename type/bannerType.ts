type BannerTitle = {
  line1: string
  line2?: string
}

export type BannerType = {
  level?: string
  image?: string | undefined
  title?: BannerTitle
  description?: string
  intoBanner?: boolean
  video?: string
  className?: string
  height?: string
}