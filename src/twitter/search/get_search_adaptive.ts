import { TQLRequest } from "../../utils/wrapper.ts";
import { SearchAdaptive } from "../../param/mod.ts";
import {
  SearchAdaptiveExtType as Ext,
  SearchAdaptiveParam,
  SetExtType,
} from "../../types/variables/search_adaptive.ts";
import { SearchAdaptiveRes } from "../../types/response/search_adaptive.ts";

export const getSearchAdaptive = async (
  variables: SearchAdaptiveParam,
  guestToken?: string,
) => {
  const res = await TQLRequest(
    SearchAdaptive,
    {
      include_profile_interstitial_type: 1,
      include_blocking: 1,
      include_blocked_by: 1,
      include_followed_by: 1,
      include_want_retweets: 1,
      include_mute_edge: 1,
      include_can_dm: 1,
      include_can_media_tag: 1,
      include_ext_has_nft_avatar: 1,
      skip_status: 1,
      cards_platform: "Web-12",
      include_cards: 1,
      include_ext_alt_text: true,
      include_quote_count: true,
      include_reply_count: 1,
      tweet_mode: "extended",
      include_entities: true,
      include_user_entities: true,
      include_ext_media_color: true,
      include_ext_media_availability: true,
      include_ext_sensitive_media_warning: true,
      send_error_codes: true,
      simple_quoted_tweet: true,
      query_source: "typed_query",
      pc: 1,
      spelling_corrections: 1,
      ext: SetExtType([Ext.hasNftAvatar, Ext.highlightedLabel, Ext.mediaStats]),
      ...variables,
    },
    undefined,
    undefined,
    guestToken,
  );
  const response: SearchAdaptiveRes = await res.json();
  return response;
};
