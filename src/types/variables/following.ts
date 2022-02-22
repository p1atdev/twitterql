import { Variables } from "../endpoint.ts"

export interface FollowingParam extends Variables {
    /**
     * rest id
     */
    userId: string
    /**
     *  number of results
     */
    count: number // 20
    includePromotedContent?: boolean // false
    withSuperFollowsUserFields?: true
    withDownvotePerspective?: boolean // false
    withReactionsMetadata?: boolean // false
    withReactionsPerspective?: boolean // false
    withSuperFollowsTweetFields?: true
    __fs_dont_mention_me_view_api_enabled?: boolean // false
    __fs_interactive_text_enabled?: boolean // false
    __fs_responsive_web_uc_gql_enabled?: boolean // false
}
