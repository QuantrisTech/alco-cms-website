import { BannerType } from "./bannerType"
import { CertificateItem } from "./certificatetypes";
import { ContentSectionType } from "./contentSection"
import { GalleryItem } from "./gallery"
import { LevelBenefitsTableType } from "./levelBenefitsTable"

type Faq = {
  question: string;
  answer: React.ReactNode;
};

type CertificatesSectionConfig = {
  data: CertificateItem[]
  heading?: string
  subheading?: string
  badge?: string
}

export type AboutType = {
  slug: string
  title?: string
  description?: string
  BannerData: BannerType
    CertificatesSectionData?: CertificatesSectionConfig
  LevelBenefitsTableData?: LevelBenefitsTableType
  galleryData?: GalleryItem;
  FaqsData?: Faq[];
  ContentSectionData1?: ContentSectionType;
  ContentSectionData2?: ContentSectionType;
  ContentSectionData3?: ContentSectionType;
  ContentSectionData4?: ContentSectionType;
  ContentSectionDataFeatureImage?: ContentSectionType
}