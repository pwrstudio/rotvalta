import { ReferenceDecorator } from './decorators'

export default {
    type: 'object',
    name: 'contentEditor',
    options: { collapsible: false, collapsed: false },
    fields: [
        {
            title: 'Content editor',
            name: 'content',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'Reference', value: 'reference', component: ReferenceDecorator }
                    ],
                    marks: {
                        decorators: [
                            {
                                title: 'Strong',
                                value: 'strong'
                            },
                            {
                                title: 'Emphasis',
                                value: 'em'
                            },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'string'
                                    }
                                ]
                            },
                        ]
                    },
                },
                {
                    type: 'object',
                    name: 'horizontalRule',
                    title: 'Horizontal Rule',
                    fields: [
                        {
                            name: 'spacer',
                            type: 'boolean',
                            title: 'Add spacing',
                            description: 'Add vertical spacing around the line',
                            initialValue: true
                        }
                    ],
                    preview: {
                        select: {
                            spacer: 'spacer'
                        },
                        prepare: ({ spacer }) => ({
                            title: 'Horizontal Rule',
                            subtitle: spacer ? 'With spacing' : 'No spacing'
                        })
                    }
                }
            ]
        }
    ]
}