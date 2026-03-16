import { BannerData } from "./bannerType"
import { LevelIntroWithVideoType } from "./levelIntroWithVideo"

export type ProgramType = {
  slug: string
  title?: string
  description?: string
  BannerData: BannerData
  LevelIntroWithVideoData : LevelIntroWithVideoType

}