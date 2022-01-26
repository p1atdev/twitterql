import { getUserTweets, getUserByScreenName } from "../src/twitter/mod.ts"

const userByScreenName = await getUserByScreenName({
    screen_name: "p1atdev",
    withSafetyModeUserFields: true,
    withSuperFollowsUserFields: true,
})

const tweets = await getUserTweets({
    userId: userByScreenName.data.user.result.rest_id,
    count: 100,
    includePromotedContent: true, //true
    withQuickPromoteEligibilityTweetFields: true, //true
    withSuperFollowsUserFields: true, //true
    withBirdwatchPivots: true, //false
    withDownvotePerspective: true, //false
    withReactionsMetadata: true, //false
    withReactionsPerspective: true, //false
    withSuperFollowsTweetFields: true, //true
    withVoice: true, //true
    withV2Timeline: true, //false
    __fs_interactive_text: true, //false
    __fs_responsive_web_uc_gql_enabled: true, //false
    __fs_dont_mention_me_view_api_enabled: true, //false
})

console.log(tweets)
