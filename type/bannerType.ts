type BannerTitle = {
  line1: string
  line2?: string
  align?: string
}

export type BannerType = {
  level?: string
  image?: string | undefined
  title?: BannerTitle
  miniTitle?: BannerTitle
  description?: string
  intoBanner?: boolean
  video?: string
  thumbnail?: string
  className?: string
  height?: string
}