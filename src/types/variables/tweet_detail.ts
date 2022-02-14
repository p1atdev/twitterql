import { Variables } from "../endpoint.ts"

export interface TweetDetailParam extends Variables {
    focalTweetId: string
    cursor?: string
    with_rux_injections?: boolean
    includePromotedContent?: boolean
    withCommunity?: boolean
    withQuickPromoteEligibilityTweetFields?: boolean
    withBirdwatchNotes?: boolean
    withSuperFollowsUserFields?: boolean
    withBirdwatchPivots?: boolean
    withDownvotePerspective?: boolean
    withReactionsMetadata?: boolean
    withReactionsPerspective?: boolean
    withSuperFollowsTweetFields?: boolean
    withVoice?: boolean
    withV2Timeline?: boolean
    __fs_interactive_text?: boolean
    __fs_responsive_web_uc_gql_enabled?: boolean
    __fs_dont_mention_me_view_api_enabled?: boolean
}
