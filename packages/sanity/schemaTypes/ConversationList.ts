
export default {
    title: 'Conversation list',
    name: 'conversationList',
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
            title: 'Title',
            name: 'title',
            type: 'string',
            readOnly: true,
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Label (Swedish)",
            name: "label_se",
            type: "string",
            group: 'se',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Label (English)",
            name: "label_en",
            type: "string",
            group: 'en',
            validation: (Rule: any) => Rule.required()
        },
        {
            title: 'Show conversations',
            name: 'showConversations',
            type: 'boolean'
        },
        {
            title: 'List',
            name: 'list',
            type: 'array',
            of: [{ 
                title: 'Item',
                name: 'item',
                type: 'reference',
                to: [{ type: 'conversation' }]
            }],
        }
    ],
}
