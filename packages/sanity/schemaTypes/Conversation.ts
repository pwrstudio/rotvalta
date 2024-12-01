import { MdFeedback } from "react-icons/md"

export default {
    title: 'Conversation',
    name: 'conversation',
    type: 'document',
    icon: MdFeedback,
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
            description: 'URL for vimeo or youtube video',
            name: 'videoUrl',
            type: 'url',
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
            }
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
        }
    ],
}
