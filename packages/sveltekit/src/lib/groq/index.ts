/** 
 *  GROQ queries for Sanity CMS
 *  https://www.sanity.io/docs/groq
 */
export const queries = {
    homepage: '*[_id == "homepage"][0] {..., pages[]->{...}}',
    // singleUser: '*[_type == "user" && username == $username][0]',
}