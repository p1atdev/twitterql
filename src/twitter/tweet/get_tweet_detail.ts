import { TQLRequest } from "../../utils/wrapper.ts"
import { TweetDetail } from "../../param/mod.ts"
import { TweetDetailParam } from "../../types/variables/tweet_detail.ts"
import { TweetDetailRes } from "../../types/response/tweet_detail.ts"

export const getTweetDetail = async (variables: TweetDetailParam) => {
    const res = await TQLRequest(TweetDetail, {
        with_rux_injections: false,
        includePromotedContent: true,
        withCommunity: false,
        withQuickPromoteEligibilityTweetFields: true,
        withBirdwatchNotes: false,
        withSuperFollowsUserFields: true,
        withBirdwatchPivots: true,
        withDownvotePerspective: false,
        withReactionsMetadata: false,
        withReactionsPerspective: true,
        withSuperFollowsTweetFields: true,
        withVoice: true,
        withV2Timeline: true,
        __fs_interactive_text: false,
        __fs_responsive_web_uc_gql_enabled: false,
        __fs_dont_mention_me_view_api_enabled: false,
        ...variables,
    })
    // console.log(res)

    const response: TweetDetailRes = await res.json()
    return response
}
