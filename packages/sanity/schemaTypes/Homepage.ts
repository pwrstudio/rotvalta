
export default {
    title: 'Homepage',
    name: 'homepage',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Sub title',
            name: 'subTitle',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Content',
            name: 'content',
            type: 'contentEditor'
        }
    ],
}
