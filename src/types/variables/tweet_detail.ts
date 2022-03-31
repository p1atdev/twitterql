import { Variables } from "../endpoint.ts";

export interface TweetDetailParam extends Variables {
  focalTweetId: string;
  cursor?: string;
  with_rux_injections?: boolean;
  includePromotedContent?: boolean;
  withCommunity?: boolean;
  withQuickPromoteEligibilityTweetFields?: boolean;
  withBirdwatchNotes?: boolean;
  withSuperFollowsUserFields?: boolean;
  withBirdwatchPivots?: boolean;
  withDownvotePerspective?: boolean;
  withReactionsMetadata?: boolean;
  withReactionsPerspective?: boolean;
  withSuperFollowsTweetFields?: boolean;
  withVoice?: boolean;
  withV2Timeline?: boolean;
  __fs_interactive_text?: boolean;
  __fs_responsive_web_uc_gql_enabled?: boolean;
  __fs_dont_mention_me_view_api_enabled?: boolean;
}

export const initialTweetDetailParam: Variables = {
  with_rux_injections: false,
  includePromotedContent: false,
  withCommunity: false,
  withQuickPromoteEligibilityTweetFields: false,
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
};
