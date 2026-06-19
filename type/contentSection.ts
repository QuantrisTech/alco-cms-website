import React from "react";

type ImageType = {
  src: any
  alt: string
};

type contentType = {
  title?: string
  description?: React.ReactNode
  src?: any
  alt?: string
  textAlign?: string
  height?: string
  position?: string
   _id?: string;           // ← add
  is_available?: boolean;
  programId?: string; 
};

type ButtonType = {
  text: string;
  link: string;
};

export type ContentSectionType = {
  title?: string
  description?: React.ReactNode
  underline?: boolean
  miniTitle?: string
  detailContent?: React.ReactNode
  textAlign?: string
  titleColor?: string
  padding?: string
  fullBg?: string
  imagelist?: ImageType[];
  button?: ButtonType;
  contentlist?: contentType[];
  contentlistColumn?: string
  contentlistClass?: string
  contentlisItemClass?: string
  contentlistTitle?: string

};