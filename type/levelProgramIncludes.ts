import React from "react"


export type LevelProgramIncludesType = {
  title: {
    line1: string
    line2?: string
  }
  pointsClass?: string
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