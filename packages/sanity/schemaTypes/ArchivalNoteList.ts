
export default {
    title: 'Archival note list',
    name: 'archivalNoteList',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            readOnly: true,
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'List',
            name: 'list',
            type: 'array',
            of: [{ 
                title: 'Item',
                name: 'item',
                type: 'reference',
                to: [{ type: 'archivalNote' }]
            }],
        }
    ],
}
