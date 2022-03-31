import { TQLResponse } from "./base.ts";

export interface TweetDetailRes extends TQLResponse {
  data?: Data;
}

export interface Data {
  threaded_conversation_with_injections?: ThreadedConversationWithInjections;
  threaded_conversation_with_injections_v2?:
    ThreadedConversationWithInjectionsV2;
}

export interface ThreadedConversationWithInjections {
  instructions?: Instruction[];
}

export interface Instruction {
  type?: string;
  entries?: Entry[];
  direction?: string;
}

export interface Entry {
  entryId?: string;
  sortIndex?: string;
  content?: Content;
}

export interface Content {
  entryType?: EntryType;
  itemContent?: ContentItemContent;
  items?: ItemElement[];
  displayType?: DisplayType;
  clientEventInfo?: ContentClientEventInfo;
}

export interface ContentClientEventInfo {
  details?: PurpleDetails;
}

export interface PurpleDetails {
  conversationDetails?: ConversationDetails;
}

export interface ConversationDetails {
  conversationSection?: ConversationSection;
}

export enum ConversationSection {
  HighQuality = "HighQuality",
}

export enum DisplayType {
  VerticalConversation = "VerticalConversation",
}

export enum EntryType {
  TimelineTimelineItem = "TimelineTimelineItem",
  TimelineTimelineModule = "TimelineTimelineModule",
}

export interface ContentItemContent {
  itemType?: string;
  tweet_results?: TweetResults;
  tweetDisplayType?: TweetDisplayType;
  hasModeratedReplies?: boolean;
  value?: string;
  cursorType?: string;
}

export enum TweetDisplayType {
  Tweet = "Tweet",
}

export interface TweetResults {
  result?: TweetResultsResult;
}

export interface TweetResultsResult {
  __typename?: TweetDisplayType;
  rest_id?: string;
  core?: Core;
  legacy?: FluffyLegacy;
  quick_promote_eligibility?: QuickPromoteEligibility;
}

export interface Core {
  user_results?: UserResults;
}

export interface UserResults {
  result?: UserResultsResult;
}

export interface UserResultsResult {
  __typename?: Typename;
  id?: string;
  rest_id?: string;
  affiliates_highlighted_label?: AffiliatesHighlightedLabel;
  has_nft_avatar?: boolean;
  legacy?: PurpleLegacy;
  super_follow_eligible?: boolean;
  super_followed_by?: boolean;
  super_following?: boolean;
  professional?: Professional;
}

export enum Typename {
  User = "User",
}

export interface AffiliatesHighlightedLabel {}

export interface PurpleLegacy {
  blocked_by?: boolean;
  blocking?: boolean;
  can_dm?: boolean;
  can_media_tag?: boolean;
  created_at?: string;
  default_profile?: boolean;
  default_profile_image?: boolean;
  description?: string;
  entities?: PurpleEntities;
  fast_followers_count?: number;
  favourites_count?: number;
  follow_request_sent?: boolean;
  followed_by?: boolean;
  followers_count?: number;
  following?: boolean;
  friends_count?: number;
  has_custom_timelines?: boolean;
  is_translator?: boolean;
  listed_count?: number;
  location?: string;
  media_count?: number;
  muting?: boolean;
  name?: string;
  normal_followers_count?: number;
  notifications?: boolean;
  pinned_tweet_ids_str?: string[];
  profile_banner_extensions?: ProfileExtensions;
  profile_banner_url?: string;
  profile_image_extensions?: ProfileExtensions;
  profile_image_url_https?: string;
  profile_interstitial_type?: string;
  protected?: boolean;
  screen_name?: string;
  statuses_count?: number;
  translator_type?: TranslatorType;
  verified?: boolean;
  want_retweets?: boolean;
  withheld_in_countries?: any[];
}

export interface PurpleEntities {
  description?: Description;
}

export interface Description {
  urls?: URL[];
}

export interface URL {
  display_url?: string;
  expanded_url?: string;
  url?: string;
  indices?: number[];
}

export interface ProfileExtensions {
  mediaColor?: MediaColor;
}

export interface MediaColor {
  r?: R;
}

export interface R {
  ok?: EXTMediaColor;
}

export interface EXTMediaColor {
  palette?: Palette[];
}

export interface Palette {
  percentage?: number;
  rgb?: RGB;
}

export interface RGB {
  blue?: number;
  green?: number;
  red?: number;
}

export enum TranslatorType {
  None = "none",
}

export interface Professional {
  rest_id?: string;
  professional_type?: string;
  category?: Category[];
}

export interface Category {
  id?: number;
  name?: string;
}

export interface FluffyLegacy {
  created_at?: string;
  conversation_id_str?: string;
  display_text_range?: number[];
  entities?: FluffyEntities;
  extended_entities?: ExtendedEntities;
  favorite_count?: number;
  favorited?: boolean;
  full_text?: string;
  is_quote_status?: boolean;
  lang?: Lang;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quote_count?: number;
  reply_count?: number;
  retweet_count?: number;
  retweeted?: boolean;
  source?: string;
  user_id_str?: string;
  id_str?: string;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
}

export interface FluffyEntities {
  media?: Media[];
  user_mentions?: UserMention[];
  urls?: any[];
  hashtags?: Hashtag[];
  symbols?: any[];
}

export interface Hashtag {
  indices?: number[];
  text?: string;
}

export interface Media {
  display_url?: string;
  expanded_url?: string;
  id_str?: string;
  indices?: number[];
  media_url_https?: string;
  type?: string;
  url?: string;
  features?: Features;
  sizes?: Sizes;
  original_info?: OriginalInfo;
  media_key?: string;
  ext_media_color?: EXTMediaColor;
  ext_media_availability?: EXTMediaAvailability;
}

export interface EXTMediaAvailability {
  status?: string;
}

export interface Features {
  large?: OrigClass;
  medium?: OrigClass;
  small?: OrigClass;
  orig?: OrigClass;
}

export interface OrigClass {
  faces?: any[];
}

export interface OriginalInfo {
  height?: number;
  width?: number;
  focus_rects?: FocusRect[];
}

export interface FocusRect {
  x?: number;
  y?: number;
  w?: number;
  h?: number;
}

export interface Sizes {
  large?: ThumbClass;
  medium?: ThumbClass;
  small?: ThumbClass;
  thumb?: ThumbClass;
}

export interface ThumbClass {
  h?: number;
  w?: number;
  resize?: Resize;
}

export enum Resize {
  Crop = "crop",
  Fit = "fit",
}

export interface UserMention {
  id_str?: string;
  name?: string;
  screen_name?: string;
  indices?: number[];
}

export interface ExtendedEntities {
  media?: Media[];
}

export enum Lang {
  Ja = "ja",
}

export interface QuickPromoteEligibility {
  eligibility?: Eligibility;
}

export enum Eligibility {
  IneligibleNotProfessional = "IneligibleNotProfessional",
}

export interface ItemElement {
  entryId?: string;
  item?: ItemItem;
}

export interface ItemItem {
  itemContent?: ItemItemContent;
  clientEventInfo?: ItemClientEventInfo;
}

export interface ItemClientEventInfo {
  details?: FluffyDetails;
}

export interface FluffyDetails {
  conversationDetails?: ConversationDetails;
  timelinesDetails?: TimelinesDetails;
}

export interface TimelinesDetails {
  controllerData?: string;
}

export interface ItemItemContent {
  itemType?: ItemType;
  tweet_results?: TweetResults;
  tweetDisplayType?: TweetDisplayType;

  value?: string;
  cursorType?: string;
  displayTreatment?: { actionText: string };
}

export enum ItemType {
  // TODO: ここをちゃんとする
  TimelineTweet = "TimelineTweet",
}

export interface ThreadedConversationWithInjectionsV2 {
  instructions: V2Instruction[];
  metadata: V2Metadata;
}

export interface V2Instruction {
  type: string;
  entries?: V2Entry[];
  direction?: string;
}

export interface V2Entry {
  entryId: string;
  sortIndex: string;
  content: V2Content;
}

export interface V2Content {
  entryType: V2EntryType;
  itemContent?: V2ItemContent;
  items?: V2Item[];
  displayType?: string;
  clientEventInfo?: V2ClientEventInfo;
}

export interface V2ClientEventInfo {
  details: V2Details;
}

export interface V2Details {
  conversationDetails: string[];
}

export enum V2EntryType {
  TimelineTimelineItem = "TimelineTimelineItem",
  TimelineTimelineModule = "TimelineTimelineModule",
  TimelineTweet = "TimelineTweet",
}

export interface V2ItemContent {
  itemType: string;
  tweet_results?: V2TweetResults;
  tweetDisplayType?: string;
  hasModeratedReplies?: boolean;
  value?: string;
  cursorType?: string;
}

export interface V2TweetResults {
  result: V2TweetResultsResult;
}

export interface V2Item {
  entryId: string;
  item: V2ItemItem;
}

export interface V2ItemItem {
  itemContent: V2ItemItemContent;
  clientEventInfo: V2ClientEventInfo;
}

export interface V2ClientEventInfo {
  details: V2Details;
}

export interface V2ItemDetails {
  conversationDetails: V2ConversationDetails;
  timelinesDetails: V2TimelinesDetails;
}

export interface V2ConversationDetails {
  conversationSection: string;
}

export interface V2TimelinesDetails {
  controllerData: string;
}

export interface V2ItemItemContent {
  itemType?: string;
  tweet_results?: V2TweetResults;
  tweetDisplayType?: string; // TODO: ここも型をつける

  value?: string;
  cursorType?: string;
  displayTreatment?: { actionText: string };
}

export interface V2ItemTweetResults {
  result: V2TweetResultsResult;
}

export interface V2TweetResultsResult {
  __typename: string;
  rest_id: string;
  core: V2Core;
  legacy: V2FluffyLegacy;
}

export interface V2Core {
  user_results: V2UserResults;
}

export interface V2UserResults {
  result: V2UserResultsResult;
}

export interface V2UserResultsResult {
  __typename: string;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: V2AffiliatesHighlightedLabel;
  has_nft_avatar: boolean;
  legacy: V2PurpleLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export interface V2AffiliatesHighlightedLabel {}

export interface V2PurpleLegacy {
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: V2PurpleEntities;
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
  profile_image_extensions: V2ProfileImageExtensions;
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

export interface V2PurpleEntities {
  description: V2Description;
  url: V2Description;
}

export interface V2Description {
  urls: V2URL[];
}

export interface V2URL {
  display_url: string;
  expanded_url: string;
  url: string;
  indices: number[];
}

export interface V2ProfileImageExtensions {
  mediaColor: V2MediaColor;
}

export interface V2MediaColor {
  r: V2R;
}

export interface V2R {
  ok: V2Ok;
}

export interface V2Ok {
  palette: V2Palette[];
}

export interface V2Palette {
  percentage: number;
  rgb: V2RGB;
}

export interface V2RGB {
  blue: number;
  green: number;
  red: number;
}

export interface V2FluffyLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: V2FluffyEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  in_reply_to_screen_name: string;
  in_reply_to_status_id_str: string;
  in_reply_to_user_id_str: string;
  is_quote_status: boolean;
  lang: string;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  user_id_str: string;
  id_str: string;
}

export interface V2FluffyEntities {
  user_mentions: V2UserMention[];
  urls: any[];
  hashtags: any[];
  symbols: any[];
}

export interface V2UserMention {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

export interface V2Metadata {
  reader_mode_config: V2ReaderModeConfig;
}

export interface V2ReaderModeConfig {
  is_reader_mode_available: boolean;
}
