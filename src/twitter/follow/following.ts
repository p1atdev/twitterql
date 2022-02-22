import { TQLRequest } from "../../utils/wrapper.ts"
import { Query } from "../../types/mod.ts"
import { Following } from "../../param/mod.ts"
import { FollowingParam } from "../../types/variables/following.ts"
import { FollowingRes } from "../../types/response/following.ts"

export const getFollowings = async (variables: FollowingParam, guestToken?: string, queries?: Query[]) => {
    const res = await TQLRequest(
        Following,
        {
            includePromotedContent: false,
            withSuperFollowsUserFields: true,
            withDownvotePerspective: false,
            withReactionsMetadata: false,
            withReactionsPerspective: false,
            withSuperFollowsTweetFields: true,
            __fs_dont_mention_me_view_api_enabled: false,
            __fs_interactive_text_enabled: false,
            __fs_responsive_web_uc_gql_enabled: false,
            ...variables,
        },
        queries,
        undefined,
        guestToken
    )
    // console.log(res)

    const response: FollowingRes = await res.json()
    return response
}
