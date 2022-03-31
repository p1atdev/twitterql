import { Variables } from "../endpoint.ts";

export interface FollowingParam extends Variables {
  /**
   * rest id
   */
  userId: string;
  /**
   *  number of results
   */
  count: number; // 20
  includePromotedContent?: boolean; // false
  withSuperFollowsUserFields?: true;
  withDownvotePerspective?: boolean; // false
  withReactionsMetadata?: boolean; // false
  withReactionsPerspective?: boolean; // false
  withSuperFollowsTweetFields?: boolean; // true
  __fs_dont_mention_me_view_api_enabled?: boolean; // false
  __fs_interactive_text_enabled?: boolean; // false
  __fs_responsive_web_uc_gql_enabled?: boolean; // false
}

export const initialFollowingParam: Variables = {
  includePromotedContent: false, // false
  withSuperFollowsUserFields: true,
  withDownvotePerspective: false, // false
  withReactionsMetadata: false, // false
  withReactionsPerspective: false, // false
  withSuperFollowsTweetFields: true,
  __fs_dont_mention_me_view_api_enabled: false, // false
  __fs_interactive_text_enabled: false, // false
  __fs_responsive_web_uc_gql_enabled: false, // false
};
