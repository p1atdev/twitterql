import { Variables } from "../endpoint.ts";

export interface UserTweetsParam extends Variables {
  userId: string;
  count: number;
  includePromotedContent?: boolean; //true
  withQuickPromoteEligibilityTweetFields?: boolean; //true
  withSuperFollowsUserFields?: boolean; //true
  withBirdwatchPivots?: boolean; //false
  withDownvotePerspective?: boolean; //false
  withReactionsMetadata?: boolean; //false
  withReactionsPerspective?: boolean; //false
  withSuperFollowsTweetFields?: boolean; //true
  withVoice?: boolean; //true
  withV2Timeline?: boolean; //false
  __fs_interactive_text?: boolean; //false
  __fs_responsive_web_uc_gql_enabled?: boolean; //false
  __fs_dont_mention_me_view_api_enabled?: boolean; //false
}

export const initialUserTweetsParam: Variables = {
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
};
