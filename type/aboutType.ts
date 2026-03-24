import { BannerType } from "./bannerType"
import { ContentSectionType } from "./contentSection"
import { GalleryItem } from "./gallery"
import { LevelBenefitsTableType } from "./levelBenefitsTable"

export type AboutType = {
  slug: string
  title?: string
  description?: string
  BannerData: BannerType
  LevelBenefitsTableData: LevelBenefitsTableType
  galleryData: GalleryItem;
  ContentSectionData1: ContentSectionType;
  ContentSectionData2: ContentSectionType
}