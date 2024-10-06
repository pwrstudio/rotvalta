import type { SanityImageCrop, SanityImageHotspot } from '@sanity-types';
import { internalGroqTypeReferenceTo } from '@sanity-types';

export type Labels = {
    archivalNotes: {
        se: string;
        en: string;
    };
    fieldNotes: {
        se: string;
        en: string;
    };
    conversations: {
        se: string;
        en: string;
    };
};

export type Logo = {
    title?: string
    link?: string
    logo?: {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      _type: 'image'
    }
    _type: 'logo'
    _key: string
}