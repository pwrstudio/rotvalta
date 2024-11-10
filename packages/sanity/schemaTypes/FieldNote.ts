import { MdNature } from "react-icons/md"

export default {
    title: 'Field note',
    name: 'fieldNote',
    type: 'document',
    icon: MdNature,
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
            name: 'mainImage',
            type: 'image',
        },
        {
            title: 'Video url',
            description: 'URL for vimeo or youtube video. Setting this overrides the main image in the pop up.',
            name: 'videoUrl',
            type: 'url',
        },
        {
            title: "Hide media in pop-up",
            description: "Toggle this to only show text in the pop-up",
            name: "hideMediaInPopup",
            type: "boolean",
        },
        {
            title: 'Content (Swedish)',
            name: 'content_se',
            type: 'contentEditor',
            group: 'se',
        },
        {
            title: 'Content (English)',
            name: 'content_en',
            type: 'contentEditor',
            group: 'en',
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
