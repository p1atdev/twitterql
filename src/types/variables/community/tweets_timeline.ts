import { Variables } from "../../endpoint.ts";

export interface CommunityTweetsTimelineParam extends Variables {
  count: number; //20;
  communityId: string; // twitter community id;
  withCommunity: boolean; // true;
  withSuperFollowsUserFields?: boolean; // true;
  withDownvotePerspective?: boolean; // false;
  withReactionsMetadata?: boolean; // false;
  withReactionsPerspective?: boolean; // false;
  withSuperFollowsTweetFields?: boolean; // true;
  __fs_responsive_web_like_by_author_enabled?: boolean; // false;
  __fs_dont_mention_me_view_api_enabled?: boolean; // true;
  __fs_interactive_text_enabled?: boolean; // true;
  __fs_responsive_web_uc_gql_enabled?: boolean; // false;
  __fs_responsive_web_edit_tweet_api_enabled?: boolean; // false;
}

export const initialCommunityTweetsTimelineParam: Variables = {
  withSuperFollowsUserFields: true,
  withDownvotePerspective: false,
  withReactionsMetadata: false,
  withReactionsPerspective: false,
  withSuperFollowsTweetFields: true,
  __fs_responsive_web_like_by_author_enabled: false,
  __fs_dont_mention_me_view_api_enabled: true,
  __fs_interactive_text_enabled: true,
  __fs_responsive_web_uc_gql_enabled: false,
  __fs_responsive_web_edit_tweet_api_enabled: false,
};
