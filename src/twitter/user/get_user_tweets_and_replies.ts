import { TQLRequest } from "../../utils/wrapper.ts"
import { UserTweetsAndReplies } from "../../param/mod.ts"
import { UserTweetsAndRepliesParam } from "../../types/variables/user_tweets_and_replies.ts"
import { UserTweetsAndRepliesRes } from "../../types/response/user_tweets_and_replies.ts"

export const getUserTweetsAndReplies = async (variables: UserTweetsAndRepliesParam) => {
    const res = await TQLRequest(UserTweetsAndReplies, {
        includePromotedContent: true,
        withCommunity: true,
        withSuperFollowsUserFields: true,
        withDownvotePerspective: false,
        withReactionsMetadata: false,
        withReactionsPerspective: false,
        withSuperFollowsTweetFields: true,
        withVoice: true,
        withV2Timeline: false,
        __fs_interactive_text: false,
        __fs_responsive_web_uc_gql_enabled: false,
        __fs_dont_mention_me_view_api_enabled: false,
        ...variables,
    })
    // console.log(res)

    const response: UserTweetsAndRepliesRes = await res.json()
    return response
}
