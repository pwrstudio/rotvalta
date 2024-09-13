// ICONS
import { MdHome, MdNature, MdList, MdEditDocument, MdArchive, MdFeedback } from "react-icons/md"

export default (S: any) =>
    S.list()
        .title("Rotvälta")
        .items([
            S.listItem()
                .title("Homepage")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id('homepage')
                        .schemaType("homepage")
                        .documentId("homepage")
                ),
            S.divider(),
            // PAGES
            S.listItem()
            .title("Page list")
            .icon(MdList)
            .child(
                S.editor()
                    .id('page-list')
                    .schemaType("pageList")
                    .documentId("page-list")
            ),
            S.listItem()
                .title('Pages')
                .icon(MdEditDocument)
                .child(
                    S.documentList()
                        .title('Pages')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'page' })
                ),
            S.divider(),
            // ARCHIVAL NOTES
            S.listItem()
                .title("Archival note list")
                .icon(MdList)
                .child(
                    S.editor()
                        .id('archival-note-list')
                        .schemaType("archivalNoteList")
                        .documentId("archival-note-list")
                ),
            S.listItem()
                .title('Archival notes')
                .icon(MdArchive)
                .child(
                    S.documentList()
                        .title('Archival notes')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'archivalNote' })
                ),
            S.divider(),
            // FIELD NOTES
            S.listItem()
                .title("Field note list")
                .icon(MdList)
                .child(
                    S.editor()
                        .id('field-note-list')
                        .schemaType("fieldNoteList")
                        .documentId("field-note-list")
                ),
            S.listItem()
                .title('Field notes')
                .icon(MdNature)
                .child(
                    S.documentList()
                        .title('Field notes')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'fieldNote' })
                ),
            S.divider(),
            // CONVERSATIONS
            S.listItem()
                .title("Conversation list")
                .icon(MdList)
                .child(
                    S.editor()
                        .id('conversation-list')
                        .schemaType("conversationList")
                        .documentId("conversation-list")
                ),
            S.listItem()
                .title('Conversations')
                .icon(MdFeedback)
                .child(
                    S.documentList()
                        .title('Conversations')
                        .showIcons(true)
                        .filter('_type == $type')
                        .params({ type: 'conversation' })
                ),
        ]);