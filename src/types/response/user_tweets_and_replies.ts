import { TQLResponse } from "./base.ts";

export interface UserTweetsAndRepliesRes extends TQLResponse {
  data: Data;
}

export interface Data {
  user: User;
}

export interface User {
  result: UserResult;
}

export interface UserResult {
  __typename: Typename;
  timeline: ResultTimeline;
}

export enum Typename {
  User = "User",
}

export interface ResultTimeline {
  timeline: TimelineTimeline;
}

export interface TimelineTimeline {
  instructions: Instruction[];
  responseObjects: ResponseObjects;
}

export interface Instruction {
  type: string;
  entries?: Entry[];
}

export interface Entry {
  entryId: string;
  sortIndex: string;
  content: Content;
}

export interface Content {
  entryType: EntryType;
  items?: ItemElement[];
  metadata?: Metadata;
  displayType?: string;
  clientEventInfo?: ContentClientEventInfo;
  itemContent?: ContentItemContent;
  header?: Header;
  footer?: Footer;
  value?: string;
  cursorType?: string;
  stopOnEmptyResponse?: boolean;
}

export interface ContentClientEventInfo {
  component: Component;
  details?: PurpleDetails;
}

export enum Component {
  SuggestOrganicConversation = "suggest_organic_conversation",
  SuggestTopicsModule = "suggest_topics_module",
  SuggestWhoToFollow = "suggest_who_to_follow",
}

export interface PurpleDetails {
  timelinesDetails: PurpleTimelinesDetails;
}

export interface PurpleTimelinesDetails {
  injectionType: string;
  controllerData?: string;
}

export enum EntryType {
  TimelineTimelineCursor = "TimelineTimelineCursor",
  TimelineTimelineItem = "TimelineTimelineItem",
  TimelineTimelineModule = "TimelineTimelineModule",
}

export interface Footer {
  displayType: string;
  text: string;
  url: string;
}

export interface Header {
  displayType: string;
  text: string;
  sticky: boolean;
  socialContext?: SocialContext;
}

export interface SocialContext {
  type: string;
  contextType: string;
  text: string;
}

export interface ContentItemContent {
  itemType: ItemType;
  tweet_results: PurpleTweetResults;
  tweetDisplayType: TweetDisplayType;
  promotedMetadata?: PurplePromotedMetadata;
}

export enum ItemType {
  TimelineTopic = "TimelineTopic",
  TimelineTweet = "TimelineTweet",
  TimelineUser = "TimelineUser",
}

export interface PurplePromotedMetadata {
  advertiser_results: SerResults;
  disclosureType: string;
  experimentValues: ExperimentValue[];
  impressionId: string;
  clickTrackingInfo?: ClickTrackingInfo;
}

export interface SerResults {
  result: AdvertiserResultsResult;
}

export interface AdvertiserResultsResult {
  __typename: Typename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  has_nft_avatar: boolean;
  legacy: PurpleLegacy;
  professional?: Professional;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export type AffiliatesHighlightedLabel = Record<never, never>;

export interface PurpleLegacy {
  blocked_by: boolean;
  blocking: boolean;
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: PurpleEntities;
  fast_followers_count: number;
  favourites_count: number;
  follow_request_sent: boolean;
  followed_by: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  muting: boolean;
  name: string;
  normal_followers_count: number;
  notifications: boolean;
  pinned_tweet_ids_str: string[];
  profile_banner_extensions?: ProfileExtensions;
  profile_banner_url?: string;
  profile_image_extensions?: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: TranslatorType;
  url?: string;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: any[];
}

export interface PurpleEntities {
  description: Description;
  url?: Description;
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
  ok: EXTMediaColor;
}

export interface EXTMediaColor {
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

export enum TranslatorType {
  None = "none",
}

export interface Professional {
  rest_id: string;
  professional_type: string;
  category: Category[];
}

export interface Category {
  id: number;
  name: string;
}

export interface ClickTrackingInfo {
  urlParams: ExperimentValue[];
}

export interface ExperimentValue {
  key: Key;
  value: string;
}

export enum Key {
  BottomPadding = "bottom_padding",
  DisplayDisplayStyle = "display.display_style",
  Twclid = "twclid",
  WebsiteCardVariation = "website_card_variation",
}

export enum TweetDisplayType {
  EmphasizedPromotedTweet = "EmphasizedPromotedTweet",
  Tweet = "Tweet",
}

export interface PurpleTweetResults {
  result: PurpleResult;
}

export interface PurpleResult {
  __typename: TweetDisplayType;
  rest_id: string;
  core: PurpleCore;
  legacy: FluffyLegacy;
  card?: Card;
}

export interface Card {
  rest_id: string;
  legacy: CardLegacy;
}

export interface CardLegacy {
  binding_values: BindingValue[];
  card_platform: CardPlatform;
  name: Name;
  url: string;
  user_refs: any[];
}

export interface BindingValue {
  key: Name;
  value: BindingValueValue;
}

export enum Name {
  CardURL = "card_url",
  UnifiedCard = "unified_card",
}

export interface BindingValueValue {
  string_value: string;
  type: ValueType;
  scribe_key?: Name;
}

export enum ValueType {
  String = "STRING",
}

export interface CardPlatform {
  platform: Platform;
}

export interface Platform {
  audience: Audience;
  device: Device;
}

export interface Audience {
  name: string;
}

export interface Device {
  name: string;
  version: string;
}

export interface PurpleCore {
  user_results: SerResults;
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
  lang: Lang;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  scopes?: Scopes;
  source: string;
  user_id_str: string;
  id_str: string;
  retweeted_status_result?: RetweetedStatusResult;
  extended_entities?: PurpleExtendedEntities;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  conversation_control?: ConversationControl;
  limited_actions?: string;
  self_thread?: SelfThread;
}

export interface ConversationControl {
  policy: string;
  conversation_owner: ConversationOwner;
}

export interface ConversationOwner {
  legacy: ConversationOwnerLegacy;
}

export interface ConversationOwnerLegacy {
  screen_name: string;
}

export interface FluffyEntities {
  user_mentions: UserMention[];
  urls: URL[];
  hashtags: Hashtag[];
  symbols: any[];
  media?: PurpleMedia[];
}

export interface Hashtag {
  indices: number[];
  text: string;
}

export interface PurpleMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: MediaType;
  url: string;
  features: Features;
  sizes: Sizes;
  original_info: PurpleOriginalInfo;
  media_key?: string;
  ext_media_color?: EXTMediaColor;
  ext_media_availability?: EXTMediaAvailability;
}

export interface EXTMediaAvailability {
  status: string;
}

export interface Features {
  large: OrigClass;
  medium: OrigClass;
  small: OrigClass;
  orig: OrigClass;
  all?: All;
}

export interface All {
  tags: Tag[];
}

export interface Tag {
  user_id: string;
  name: string;
  screen_name: string;
  type: Element;
}

export enum Element {
  Topic = "topic",
  User = "user",
}

export interface OrigClass {
  faces: FocusRect[];
}

export interface FocusRect {
  x: number;
  y: number;
  h: number;
  w: number;
}

export interface PurpleOriginalInfo {
  height: number;
  width: number;
  focus_rects: FocusRect[];
}

export interface Sizes {
  large: ThumbClass;
  medium: ThumbClass;
  small: ThumbClass;
  thumb: ThumbClass;
}

export interface ThumbClass {
  h: number;
  w: number;
  resize: Resize;
}

export enum Resize {
  Crop = "crop",
  Fit = "fit",
}

export enum MediaType {
  Photo = "photo",
}

export interface UserMention {
  id_str: string;
  name: string;
  screen_name: string;
  indices: number[];
}

export interface PurpleExtendedEntities {
  media: PurpleMedia[];
}

export enum Lang {
  En = "en",
  Ja = "ja",
  Und = "und",
}

export interface RetweetedStatusResult {
  result: RetweetedStatusResultResult;
}

export interface RetweetedStatusResultResult {
  __typename: TweetDisplayType;
  rest_id: string;
  core: PurpleCore;
  legacy: TentacledLegacy;
}

export interface TentacledLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: TentacledEntities;
  extended_entities: FluffyExtendedEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: Lang;
  possibly_sensitive: boolean;
  possibly_sensitive_editable: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  user_id_str: string;
  id_str: string;
  self_thread: SelfThread;
}

export interface TentacledEntities {
  media: FluffyMedia[];
  user_mentions: UserMention[];
  urls: URL[];
  hashtags: Hashtag[];
  symbols: any[];
}

export interface FluffyMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: MediaType;
  url: string;
  features: AffiliatesHighlightedLabel;
  sizes: Sizes;
  original_info: FluffyOriginalInfo;
}

export interface FluffyOriginalInfo {
  height: number;
  width: number;
}

export interface FluffyExtendedEntities {
  media: TentacledMedia[];
}

export interface TentacledMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: string;
  url: string;
  additional_media_info: AdditionalMediaInfo;
  ext_media_color: EXTMediaColor;
  mediaStats: MediaStats;
  ext_media_availability: EXTMediaAvailability;
  features: AffiliatesHighlightedLabel;
  sizes: Sizes;
  original_info: FluffyOriginalInfo;
  video_info: VideoInfo;
}

export interface AdditionalMediaInfo {
  monetizable: boolean;
}

export interface MediaStats {
  viewCount: number;
}

export interface VideoInfo {
  aspect_ratio: number[];
  duration_millis: number;
  variants: Variant[];
}

export interface Variant {
  content_type: string;
  url: string;
  bitrate?: number;
}

export interface SelfThread {
  id_str: string;
}

export interface Scopes {
  followers: boolean;
}

export interface ItemElement {
  entryId: string;
  dispensable?: boolean;
  item: ItemItem;
}

export interface ItemItem {
  itemContent: ItemItemContent;
  clientEventInfo: ItemClientEventInfo;
  feedbackInfo?: FeedbackInfo;
}

export interface ItemClientEventInfo {
  component: Component;
  details: FluffyDetails;
  element?: Element;
}

export interface FluffyDetails {
  timelinesDetails: FluffyTimelinesDetails;
}

export interface FluffyTimelinesDetails {
  injectionType?: string;
  controllerData: string;
  sourceData?: string;
}

export interface FeedbackInfo {
  feedbackKeys: string[];
  feedbackMetadata: FeedbackMetadata;
}

export enum FeedbackMetadata {
  FcQBOQwA = "FcQBOQwA",
}

export interface ItemItemContent {
  itemType: ItemType;
  tweet_results?: FluffyTweetResults;
  tweetDisplayType?: TweetDisplayType;
  user_results?: SerResults;
  userDisplayType?: Typename;
  promotedMetadata?: FluffyPromotedMetadata;
  socialContext?: SocialContext;
  topic?: Topic;
  topicFunctionalityType?: TopicFunctionalityType;
  topicDisplayType?: TopicDisplayType;
}

export interface FluffyPromotedMetadata {
  advertiser_results: SerResults;
  disclosureType: string;
  experimentValues: ExperimentValue[];
  impressionId: string;
}

export interface Topic {
  description: string;
  following: boolean;
  icon_url: string;
  id: string;
  name: string;
  not_interested: boolean;
}

export enum TopicDisplayType {
  Pill = "Pill",
}

export enum TopicFunctionalityType {
  Recommendation = "Recommendation",
}

export interface FluffyTweetResults {
  result: FluffyResult;
}

export interface FluffyResult {
  __typename: TweetDisplayType;
  rest_id: string;
  core: FluffyCore;
  legacy: IndigoLegacy;
}

export interface FluffyCore {
  user_results: UserResults;
}

export interface UserResults {
  result: TentacledResult;
}

export interface TentacledResult {
  __typename: Typename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  has_nft_avatar: boolean;
  legacy: StickyLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export interface StickyLegacy {
  blocked_by: boolean;
  blocking: boolean;
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: StickyEntities;
  fast_followers_count: number;
  favourites_count: number;
  follow_request_sent: boolean;
  followed_by: boolean;
  followers_count: number;
  following: boolean;
  friends_count: number;
  has_custom_timelines: boolean;
  is_translator: boolean;
  listed_count: number;
  location: string;
  media_count: number;
  muting: boolean;
  name: string;
  normal_followers_count: number;
  notifications: boolean;
  pinned_tweet_ids_str: any[];
  profile_banner_extensions?: ProfileExtensions;
  profile_banner_url?: string;
  profile_image_extensions?: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: TranslatorType;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: any[];
}

export interface StickyEntities {
  description: Description;
}

export interface IndigoLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: FluffyEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: Lang;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  source: string;
  user_id_str: string;
  id_str: string;
  extended_entities?: PurpleExtendedEntities;
  in_reply_to_screen_name?: string;
  in_reply_to_status_id_str?: string;
  in_reply_to_user_id_str?: string;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
}

export interface Metadata {
  conversationMetadata?: ConversationMetadata;
  gridCarouselMetadata?: GridCarouselMetadata;
}

export interface ConversationMetadata {
  allTweetIds: string[];
  enableDeduplication: boolean;
}

export interface GridCarouselMetadata {
  numRows: number;
}

export interface ResponseObjects {
  feedbackActions: FeedbackAction[];
  immediateReactions: any[];
}

export interface FeedbackAction {
  key: string;
  value: FeedbackActionValue;
}

export interface FeedbackActionValue {
  feedbackType: FeedbackType;
  feedbackUrl: string;
  encodedFeedbackRequest: string;
  hasUndoAction: boolean;
  richBehavior: RichBehavior;
}

export enum FeedbackType {
  RichBehavior = "RichBehavior",
}

export interface RichBehavior {
  type: RichBehaviorType;
  topic: Topic;
}

export enum RichBehaviorType {
  TimelineRichFeedbackBehaviorMarkNotInterestedTopic =
    "TimelineRichFeedbackBehaviorMarkNotInterestedTopic",
}
