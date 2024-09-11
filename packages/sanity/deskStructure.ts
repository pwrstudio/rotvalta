// ICONS
import { MdHome } from "react-icons/md"

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
            // S.listItem()
            //     .title('Pages')
            //     .icon(MdPages)
            //     .child(
            //         S.documentList()
            //             .title('Pages')
            //             .showIcons(true)
            //             .filter('_type == $type')
            //             .params({ type: 'page' })
            //     ),
        ]);