export type OurProgramSlideType = {
  title: string
  description: string
  href?: string
  button?: {
    text: string
    // link: string
  }
  image?: {
    src: string
    alt: string
  }
}

export type OurProgramData = {
    title: string
    description: string
    slides?: OurProgramSlideType[]
}