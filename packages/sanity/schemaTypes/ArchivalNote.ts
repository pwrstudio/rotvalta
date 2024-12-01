import { MdArchive } from "react-icons/md"

export default {
    title: 'Archival note',
    name: 'archivalNote',
    type: 'document',
    icon: MdArchive,
    groups: [
        {
            name: 'en',
            title: 'English',
        },
        {
            name: 'se',
            title: 'Swedish',
        },
    ],
    initialValue: {
        layout: "text-and-image",
        imageSize: "medium",
        videoAspectRatio: "16-9"
    },
    fields: [
        {
            title: 'Title (Swedish)',
            name: 'title_se',
            type: 'string',
            group: 'se',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Title (English)',
            name: 'title_en',
            type: 'string',
            group: 'en',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Main image',
            description: 'Shown in frontpage timeline and, depending on layout option, in the pop-up', 
            name: 'mainImage',
            type: 'image',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Image size',
            description: 'Size of image in frontpage timeline display',
            name: 'imageSize',
            type: 'string',
            options: {
                layout: "radio",
                list: [
                    { title: 'Small', value: 'small' },
                    { title: 'Medium', value: 'medium' },
                    { title: 'Large', value: 'large' },
                ],
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Layout',
            name: 'layout',
            description: 'Determines what is shown in the pop-up',
            type: 'string',
            options: {
                layout: "radio",
                list: [
                    { title: 'Text and image', value: 'text-and-image' },
                    { title: 'Only image', value: 'only-image' },
                    { title: 'Only text', value: 'only-text' },
                    { title: 'Video', value: 'video' },
                    { title: 'Audio', value: 'audio' },
                    { title: 'Audio and image', value: 'audio-and-image' }
                ],
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Video url',
            description: 'URL for vimeo or youtube video.',
            name: 'videoUrl',
            type: 'url',
            hidden: ({document}) => document?.layout !== 'video'
        },
        {
            title: 'Video aspect ratio',
            name: 'videoAspectRatio',
            type: 'string',
            options: {
                layout: "radio",
                list: [
                    { title: '16:9', value: '16-9' },
                    { title: '4:3', value: '4-3' },
                ],
            },
            hidden: ({document}) => document?.layout !== 'video'
        },
        {
            title: 'Audio file (mp3 format)',
            name: 'audioFile',
            type: 'file',
            options: {
                accept: 'audio/*',
            },
            hidden: ({document}) => !['audio', 'audio-and-image'].includes(document?.layout ?? "")
        },
        {
            title: "Audio title",
            name: "audioTitle",
            type: "string",
            hidden: ({document}) => !['audio', 'audio-and-image'].includes(document?.layout ?? "")
        },
        {
            title: 'Content (Swedish)',
            name: 'content_se',
            type: 'contentEditor',
            group: 'se',
            hidden: ({document}) => !['text-and-image', 'only-text'].includes(document?.layout ?? "")
        },
        {
            title: 'Content (English)',
            name: 'content_en',
            type: 'contentEditor',
            group: 'en',
            hidden: ({document}) => !['text-and-image', 'only-text'].includes(document?.layout ?? "")
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title_en',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ],
}
