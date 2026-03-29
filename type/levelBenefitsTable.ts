

// export type LevelBenefitsTableType = {
//   title: {
//     line1: string
//     line2: string
//   }
//   points: {
//     content: string;
//     personal: string;
//     coaches?: string;
//   }[]

import { StaticImageData } from "next/image";

// }

export type LevelBenefitsTableType = {
  title: {
    line1: string;
    line2: string;
  };
  bgColor?: string
  headers: string[];   // 👈 NEW
  points: {
    content: string;
    values: string[];  // 👈 NEW (dynamic columns)
  }[];
    dynamicColumn?: string;
  introPage?: boolean
  videos?: {
    video?: string;
    title?: string;
    thumbnail?: StaticImageData
  }[];
  videoTitle?: string
  button?: {
    text?: string
    href?: string
  }

};