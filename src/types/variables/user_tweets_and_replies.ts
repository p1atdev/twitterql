import { Variables } from "../endpoint.ts";

export interface UserTweetsAndRepliesParam extends Variables {
  /**
   * NOT user screen name, but rest id
   */
  userId: string;
  count: number;
  includePromotedContent?: boolean; // true
  withCommunity?: boolean; // true
  withSuperFollowsUserFields?: boolean; // true
  withDownvotePerspective?: boolean; // false
  withReactionsMetadata?: boolean; // false
  withReactionsPerspective?: boolean; // false
  withSuperFollowsTweetFields?: boolean; // true
  withVoice?: boolean; // true
  withV2Timeline?: boolean; // false
  __fs_dont_mention_me_view_api_enabled?: boolean; // false
  __fs_interactive_text_enabled?: boolean; // false
  __fs_responsive_web_uc_gql_enabled?: boolean; // false
}

export const initialUserTweetsAndRepliesParam: Variables = {
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
