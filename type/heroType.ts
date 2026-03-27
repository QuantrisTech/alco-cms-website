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
  image: string
}

export type HeroData = HeroItem[]