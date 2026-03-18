import { BannerData } from "./bannerType"
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
  BannerData: BannerData
  LevelIntroWithVideoData : LevelIntroWithVideoType
  LevelCertificationData : LevelCertificationType
  LevelProgramIncludesData : LevelProgramIncludesType
  LevelBenefitsTableData : LevelBenefitsTableType
  LevelContentData : LevelContentType
  LevelGraduatesExperienceData : LevelGraduatesExperienceType
}