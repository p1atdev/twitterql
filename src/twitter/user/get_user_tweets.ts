import { TQLRequest } from "../../utils/wrapper.ts";
import { UserTweets } from "../../param/mod.ts";
import { UserTweetsParam } from "../../types/variables/user_tweets.ts";
import { UserTweetsRes } from "../../types/response/user_tweets.ts";

export const getUserTweets = async (variables: UserTweetsParam) => {
  const res = await TQLRequest(UserTweets, {
    includePromotedContent: true,
    withQuickPromoteEligibilityTweetFields: true,
    withSuperFollowsUserFields: true,
    withBirdwatchPivots: false,
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
  });
  // console.log(res)

  const response: UserTweetsRes = await res.json();
  return response;
};
