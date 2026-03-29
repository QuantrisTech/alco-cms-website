import { BannerType } from "./bannerType"
import { ContentSectionType } from "./contentSection"
import { LevelBenefitsTableType } from "./levelBenefitsTable"
import { LevelCertificationType } from "./levelCertification"
import { LevelContentType } from "./levelContent"
import { LevelGraduatesExperienceType } from "./levelGraduatesExperience"
import { LevelIntroWithVideoType } from "./levelIntroWithVideo"
import { LevelProgramIncludesType } from "./levelProgramIncludes"

export type ProgramType = {
  slug: string
  title?: string
  description?: string
  BannerData: BannerType
  LevelIntroWithVideoData : LevelIntroWithVideoType
  LevelCertificationData : LevelCertificationType
  ContentSectionData? : ContentSectionType
  LevelProgramIncludesData : LevelProgramIncludesType
  ContentSectionContentListData?: ContentSectionType
  LevelBenefitsTableData : LevelBenefitsTableType
  ContentSectionImgContentListData?: ContentSectionType
  LevelContentData : LevelContentType
  LevelGraduatesExperienceData : LevelGraduatesExperienceType
}

export type ProgramTypeInnerDetail = {
  slug: string
  BannerData: BannerType
  LevelBenefitsTableData1 : LevelBenefitsTableType
  LevelBenefitsTableData2?: LevelBenefitsTableType
  LevelBenefitsTableData3?: LevelBenefitsTableType
}

export type CourseTypeInnerDetail = {
  slug: string
  BannerData: BannerType
  LevelBenefitsTableData1 : LevelBenefitsTableType
  LevelBenefitsTableData2?: LevelBenefitsTableType
  LevelBenefitsTableData3?: LevelBenefitsTableType
}