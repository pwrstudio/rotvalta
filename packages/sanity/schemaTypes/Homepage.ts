
export default {
    title: 'Homepage',
    name: 'homepage',
    type: 'document',
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
            title: 'Sub title (Swedish)',
            name: 'subTitle_se',
            type: 'string',
            group: 'se',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Sub title (English)',
            name: 'subTitle_en',
            type: 'string',
            group: 'en',
            validation: (Rule: any) => Rule.required()
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
            title: 'Logos',
            name: 'logos',
            type: 'array',
            of: [{ 
                title: 'Logo',
                name: 'logo',
                type: 'object',
                fields: [
                    {
                        title: 'Title',
                        name: 'title',
                        type: 'string',
                        validation: (Rule: any) => Rule.required()
                    },
                    {
                        title: 'Link',
                        name: 'link',
                        type: 'url',
                        validation: (Rule: any) => Rule.required()
                    },
                    {
                        title: 'Logo',
                        name: 'logo',
                        type: 'image',
                        validation: (Rule: any) => Rule.required()
                    },
                ] 
            }],
        },
        {
            title: 'Pages',
            name: 'pages',
            type: 'array',
            of: [{ 
                title: 'Page',
                name: 'page',
                type: 'reference',
                to: [{ type: 'page' }]
            }],
        }
    ],
}
