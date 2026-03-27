

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

// }

export type LevelBenefitsTableType = {
  title: {
    line1: string;
    line2: string;
  };
  headers: string[];   // 👈 NEW
  points: {
    content: string;
    values: string[];  // 👈 NEW (dynamic columns)
  }[];
  introPage?: boolean
  videos?: {
    video?: string;
    title?: string;
    thumbnail?: string
  }[];
  videoTitle?: string

};