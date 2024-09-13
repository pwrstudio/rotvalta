/** 
 *  GROQ queries for Sanity CMS
 *  https://www.sanity.io/docs/groq
 */
export const queries = {
    homepage: '*[_id == "homepage"][0]',
    pageList: '*[_id == "page-list"][0] {..., list[]->{...}}',
    archivalNoteList: '*[_id == "archival-note-list"][0] {..., list[]->{...}}',
    fieldNoteList: '*[_id == "field-note-list"][0] {..., list[]->{...}}',
    conversationList: '*[_id == "conversation-list"][0] {..., list[]->{...}}'
}