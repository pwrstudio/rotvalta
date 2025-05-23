/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type ConversationList = {
  _id: string
  _type: 'conversationList'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  label_se?: string
  label_en?: string
  showConversations?: boolean
  list?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'conversation'
  }>
}

export type Conversation = {
  _id: string
  _type: 'conversation'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title_se?: string
  title_en?: string
  mainImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  videoUrl?: string
  videoAspectRatio?: '16-9' | '4-3'
  content_se?: ContentEditor
  content_en?: ContentEditor
  slug?: Slug
}

export type FieldNoteList = {
  _id: string
  _type: 'fieldNoteList'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  label_se?: string
  label_en?: string
  list?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'fieldNote'
  }>
}

export type ArchivalNoteList = {
  _id: string
  _type: 'archivalNoteList'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  label_se?: string
  label_en?: string
  list?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'archivalNote'
  }>
}

export type PageList = {
  _id: string
  _type: 'pageList'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  list?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'page'
  }>
}

export type FieldNote = {
  _id: string
  _type: 'fieldNote'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title_se?: string
  title_en?: string
  mainImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  imageSize?: 'small' | 'medium' | 'large'
  layout?:
    | 'text-and-image'
    | 'only-image'
    | 'only-text'
    | 'video'
    | 'video-and-text'
    | 'audio'
    | 'audio-and-text'
    | 'audio-and-image'
    | 'audio-image-and-text'
  videoUrl?: string
  videoAspectRatio?: '16-9' | '4-3'
  audioFile?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.fileAsset'
    }
    media?: unknown
    _type: 'file'
  }
  audioTitle?: string
  content_se?: ContentEditor
  content_en?: ContentEditor
  slug?: Slug
}

export type ArchivalNote = {
  _id: string
  _type: 'archivalNote'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title_se?: string
  title_en?: string
  mainImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  imageSize?: 'small' | 'medium' | 'large'
  layout?:
    | 'text-and-image'
    | 'only-image'
    | 'only-text'
    | 'video'
    | 'video-and-text'
    | 'audio'
    | 'audio-and-text'
    | 'audio-and-image'
    | 'audio-image-and-text'
  videoUrl?: string
  videoAspectRatio?: '16-9' | '4-3'
  audioFile?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.fileAsset'
    }
    media?: unknown
    _type: 'file'
  }
  audioTitle?: string
  content_se?: ContentEditor
  content_en?: ContentEditor
  slug?: Slug
}

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title_se?: string
  title_en?: string
  mainImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  layout?: 'text-and-image' | 'only-image' | 'only-text' | 'video' | 'audio' | 'audio-and-image'
  videoUrl?: string
  videoAspectRatio?: '16-9' | '4-3'
  audioFile?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.fileAsset'
    }
    media?: unknown
    _type: 'file'
  }
  audioTitle?: string
  content_se?: ContentEditor
  content_en?: ContentEditor
  slug?: Slug
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Homepage = {
  _id: string
  _type: 'homepage'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title_se?: string
  title_en?: string
  subTitle_se?: string
  subTitle_en?: string
  content_se?: ContentEditor
  content_en?: ContentEditor
  logos?: Array<{
    title?: string
    link?: string
    logo?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    _type: 'logo'
    _key: string
  }>
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type ContentEditor = {
  _type: 'contentEditor'
  content?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'reference'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        spacer?: boolean
        _type: 'horizontalRule'
        _key: string
      }
  >
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | Geopoint
  | ConversationList
  | Conversation
  | FieldNoteList
  | ArchivalNoteList
  | PageList
  | FieldNote
  | ArchivalNote
  | Page
  | Slug
  | SanityFileAsset
  | Homepage
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
  | ContentEditor
export declare const internalGroqTypeReferenceTo: unique symbol
