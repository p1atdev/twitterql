import { TQLResponse } from "./base.ts";

export interface UserTweetsRes extends TQLResponse {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  result: Result;
}

export interface Result {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  has_nft_avatar: boolean;
  timeline: TimeLine;
  legacy: Legacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
  legacy_extended_profile: AffiliatesHighlightedLabel;
  is_profile_translatable: boolean;
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: Entities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  profile_banner_extensions: ProfileExtensions;
  profile_banner_url: string;
  profile_image_extensions: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  verified: boolean;
  withheld_in_countries: any[];
}

export interface Entities {
  description: Description;
  url: Description;
}

export interface Description {
  urls: URL[];
}

export interface URL {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface ProfileExtensions {
  mediaColor: MediaColor;
}

export interface MediaColor {
  r: R;
}

export interface R {
  ok: Ok;
}

export interface Ok {
  palette: Palette[];
}

export interface Palette {
  percentage: number;
  rgb: RGB;
}

export interface RGB {
  blue: number;
  green: number;
  red: number;
}

export interface TimeLine {
  timeline: Timeline;
}

export interface Timeline {
  instructions: Instruction[];
}

export interface Instruction {
  type: string;
  entries: Entry[];
  responseObjects: ResponseObjects;
}

export interface Entry {
  entryId: string;
  sortIndex: string;
  content: Content;
}

export interface Content {
  entryType: string;
  itemContent: ItemContent;
}

export interface ItemContent {
  itemType: string;
  tweet_results: TweetResults;
  tweetDisplayType: string;
  ruxContext: string;
}

export interface TweetResults {
  result: TweetResultsResult;
}

export interface TweetResultsResult {
  __typename: string;
  rest_id: string;
  core: PurpleCore;
  legacy: FluffyLegacy;
  quick_promote_eligibility: QuickPromoteEligibility;
}

export interface PurpleCore {
  user_results: PurpleUserResults;
}

export interface PurpleUserResults {
  result: PurpleResult;
}

export interface PurpleResult {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  has_nft_avatar: boolean;
  legacy: PurpleLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export interface AffiliatesHighlightedLabel {}

export interface PurpleLegacy {
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: PurpleEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: string[];
  profile_banner_extensions: ProfileExtensions;
  profile_banner_url: string;
  profile_image_extensions: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  url: string;
  verified: boolean;
  withheld_in_countries: any[];
}

export interface PurpleEntities {
  description: Description;
  url: Description;
}

export interface Description {
  urls: URL[];
}

export interface URL {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface ProfileExtensions {
  mediaColor: MediaColor;
}

export interface MediaColor {
  r: R;
}

export interface R {
  ok: Ok;
}

export interface Ok {
  palette: Palette[];
}

export interface Palette {
  percentage: number;
  rgb: RGB;
}

export interface RGB {
  blue: number;
  green: number;
  red: number;
}

export interface RetweetedStatusResultResult {
  __typename: string;
  rest_id: string;
  core: FluffyCore;
  legacy: FluffyLegacy;
}

export interface RetweetedStatusResult {
  result: RetweetedStatusResultResult;
}

export interface FluffyLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: FluffyEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  user_id_str: string;
  id_str: string;
  retweeted_status_result?: RetweetedStatusResult;
  self_thread?: SelfThread;
}

export interface FluffyCore {
  user_results: FluffyUserResults;
}

export interface FluffyUserResults {
  result: FluffyResult;
}

export interface FluffyResult {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  has_nft_avatar: boolean;
  legacy: TentacledLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export interface TentacledLegacy {
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: TentacledEntities;
  fast_followers_count: number;
  favourites_count: number;
  followers_count: number;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  name: string;
  normal_followers_count: number;
  pinned_tweet_ids_str: any[];
  profile_banner_extensions: ProfileExtensions;
  profile_banner_url: string;
  profile_image_extensions: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: string;
  verified: boolean;
  withheld_in_countries: any[];
}

export interface TentacledEntities {
  description: Description;
}

export interface FluffyEntities {
  user_mentions: UserMention[];
  urls: any[];
  hashtags: any[];
  symbols: any[];
}

export interface UserMention {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

export interface SelfThread {
  id_str: string;
}

export interface QuickPromoteEligibility {
  eligibility: string;
}

export interface ResponseObjects {
  feedbackActions: FeedbackAction[];
  immediateReactions: any[];
}

export interface FeedbackAction {
  key: string;
  value: Value;
}

export interface Value {
  feedbackType: string;
  feedbackUrl: string;
  encodedFeedbackRequest: string;
  hasUndoAction: boolean;
  richBehavior: RichBehavior;
}

export interface RichBehavior {
  type: string;
  topic: Topic;
}

export interface Topic {
  description: string;
  following: boolean;
  icon_url: string;
  id: string;
  name: string;
  not_interested: boolean;
}
