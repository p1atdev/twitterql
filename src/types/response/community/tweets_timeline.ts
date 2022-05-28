import { TQLResponse } from "../base.ts";

export interface CommunityTweetsTimelineRes extends TQLResponse {
  data: Data;
}

export interface Data {
  community: DataCommunity;
}

export interface DataCommunity {
  community_timeline: CommunityTimeline;
}

export interface CommunityTimeline {
  timeline: Timeline;
}

export interface Timeline {
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
  itemContent?: ItemContent;
  clientEventInfo?: ClientEventInfo;
  value?: string;
  cursorType?: string;
  stopOnEmptyResponse?: boolean;
}

export interface ClientEventInfo {
  component: Component;
  details: Details;
}

export enum Component {
  SuggestCommunityTweet = "suggest_community_tweet",
}

export interface Details {
  timelinesDetails: TimelinesDetails;
}

export interface TimelinesDetails {
  injectionType: InjectionType;
  controllerData: string;
}

export enum InjectionType {
  CommunityTweet = "CommunityTweet",
}

export enum EntryType {
  TimelineTimelineCursor = "TimelineTimelineCursor",
  TimelineTimelineItem = "TimelineTimelineItem",
}

export interface ItemContent {
  itemType: ItemType;
  tweet_results: TweetResults;
  tweetDisplayType: TweetDisplayType;
}

export enum ItemType {
  TimelineTweet = "TimelineTweet",
}

export enum TweetDisplayType {
  Tweet = "Tweet",
}

export interface TweetResults {
  result: TweetResultsResult;
}

export interface TweetResultsResult {
  __typename: TweetDisplayType;
  rest_id: string;
  core: Core;
  unmention_info: UnmentionInfo;
  community: ResultCommunity;
  community_relationship: CommunityRelationship;
  legacy: TentacledLegacy;
  quoted_status_result?: QuotedStatusResult;
}

export interface ResultCommunity {
  id_str: string;
  name: string;
  description: string;
  created_at: number;
  default_theme: DefaultTheme;
  custom_theme: CustomTheme;
  actions: Actions;
  admin_results: Results;
  creator_results: Results;
  invites_result: InvitesResult;
  join_policy: JoinPolicy;
  invites_policy: InvitesPolicy;
  members_facepile_results: UserResults[];
  moderator_count: number;
  member_count: number;
  role: Role;
  rules: Rule[];
  custom_banner_media: BannerMedia;
  default_banner_media: BannerMedia;
  viewer_relationship: ViewerRelationship;
  join_requests_result: JoinRequestsResult;
}

export interface Actions {
  join_action_result: JoinActionResult;
  leave_action_result: JoinRequestsResult;
}

export interface JoinActionResult {
  __typename: JoinActionResultTypename;
  reason: string;
  message: string;
}

export enum JoinActionResultTypename {
  CommunityJoinActionUnavailable = "CommunityJoinActionUnavailable",
}

export interface JoinRequestsResult {
  __typename: JoinRequestsResultTypename;
}

export enum JoinRequestsResultTypename {
  CommunityJoinRequestsUnavailable = "CommunityJoinRequestsUnavailable",
  CommunityLeaveAction = "CommunityLeaveAction",
  CommunityUserDefaultModerationState = "CommunityUserDefaultModerationState",
}

export interface Results {
  result: AdminResultsResult;
}

export interface AdminResultsResult {
  __typename: ResultTypename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: UnmentionInfo;
  has_nft_avatar: boolean;
  legacy: PurpleLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export enum ResultTypename {
  User = "User",
}

export type UnmentionInfo = Record<never, never>;

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
  profile_banner_extensions: ProfileExtensions;
  profile_banner_url: string;
  profile_image_extensions: ProfileExtensions;
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

export interface PurpleEntities {
  description: Description;
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
  ok: ColorInfo;
}

export interface ColorInfo {
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

export interface BannerMedia {
  media_info: MediaInfo;
}

export interface MediaInfo {
  color_info: ColorInfo;
  original_img_url: string;
  original_img_width: number;
  original_img_height: number;
  salient_rect?: SalientRect;
}

export interface SalientRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export enum CustomTheme {
  Blue = "Blue",
}

export enum DefaultTheme {
  Red = "Red",
}

export enum InvitesPolicy {
  MemberInvitesAllowed = "MemberInvitesAllowed",
}

export interface InvitesResult {
  __typename: InvitesResultTypename;
  remaining_invite_count: number;
  users_to_invite_slice: UsersToInviteSlice;
}

export enum InvitesResultTypename {
  CommunityInvites = "CommunityInvites",
}

export interface UsersToInviteSlice {
  items: any[];
  slice_info: UnmentionInfo;
}

export enum JoinPolicy {
  Open = "Open",
}

export interface UserResults {
  result: UserResultsResult;
}

export interface UserResultsResult {
  __typename: ResultTypename;
  id: string;
  rest_id: string;
  affiliates_highlighted_label: UnmentionInfo;
  has_nft_avatar: boolean;
  legacy: FluffyLegacy;
  super_follow_eligible: boolean;
  super_followed_by: boolean;
  super_following: boolean;
}

export interface FluffyLegacy {
  blocked_by: boolean;
  blocking: boolean;
  can_dm: boolean;
  can_media_tag: boolean;
  created_at: string;
  default_profile: boolean;
  default_profile_image: boolean;
  description: string;
  entities: FluffyEntities;
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
  profile_image_extensions: ProfileExtensions;
  profile_image_url_https: string;
  profile_interstitial_type: string;
  protected: boolean;
  screen_name: string;
  statuses_count: number;
  translator_type: TranslatorType;
  verified: boolean;
  want_retweets: boolean;
  withheld_in_countries: any[];
  url?: string;
}

export interface FluffyEntities {
  description: Description;
  url?: Description;
}

export enum Role {
  Member = "Member",
}

export interface Rule {
  rest_id: string;
  name: string;
  description: string;
}

export interface ViewerRelationship {
  moderation_state: JoinRequestsResult;
}

export interface CommunityRelationship {
  id: string;
  rest_id: string;
  community: ResultCommunity;
  moderation_state: UnmentionInfo;
}

export interface Core {
  user_results: UserResults;
}

export interface TentacledLegacy {
  created_at: string;
  conversation_id_str: string;
  display_text_range: number[];
  entities: TentacledEntities;
  extended_entities?: PurpleExtendedEntities;
  favorite_count: number;
  favorited: boolean;
  full_text: string;
  is_quote_status: boolean;
  lang: Lang;
  limited_actions: LimitedActions;
  possibly_sensitive?: boolean;
  possibly_sensitive_editable?: boolean;
  quote_count: number;
  reply_count: number;
  retweet_count: number;
  retweeted: boolean;
  scopes: Scopes;
  source: string;
  user_id_str: string;
  id_str: string;
  quoted_status_id_str?: string;
  quoted_status_permalink?: QuotedStatusPermalink;
  self_thread?: SelfThread;
}

export interface TentacledEntities {
  media?: EntitiesMedia[];
  user_mentions: any[];
  urls: URL[];
  hashtags: Hashtag[];
  symbols: any[];
}

export interface Hashtag {
  indices: number[];
  text: string;
}

export interface EntitiesMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_url_https: string;
  type: Type;
  url: string;
  features: Features;
  sizes: Sizes;
  original_info: OriginalInfo;
  media_key?: string;
  ext_media_color?: ColorInfo;
  ext_media_availability?: EXTMediaAvailability;
}

export interface EXTMediaAvailability {
  status: Status;
}

export enum Status {
  Available = "Available",
  Unavailable = "Unavailable",
}

export interface Features {
  large: OrigClass;
  medium: OrigClass;
  small: OrigClass;
  orig: OrigClass;
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

export interface OriginalInfo {
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

export enum Type {
  Photo = "photo",
}

export interface PurpleExtendedEntities {
  media: PurpleMedia[];
}

export interface PurpleMedia {
  display_url: string;
  expanded_url: string;
  id_str: string;
  indices: number[];
  media_key: string;
  media_url_https: string;
  type: Type;
  url: string;
  ext_media_color: ColorInfo;
  ext_media_availability: EXTMediaAvailability;
  features: Features;
  sizes: Sizes;
  original_info: OriginalInfo;
  ext_alt_text?: string;
}

export enum Lang {
  Ja = "ja",
  En = "en",
  Und = "und",
}

export enum LimitedActions {
  CommunityTweetMember = "community_tweet_member",
}

export interface QuotedStatusPermalink {
  url: string;
  expanded: string;
  display: string;
}

export interface Scopes {
  followers: boolean;
}

export interface SelfThread {
  id_str: string;
}

export interface QuotedStatusResult {
  result: QuotedStatusResultResult;
}

export interface QuotedStatusResultResult {
  __typename: TweetDisplayType;
  rest_id: string;
  core: Core;
  unmention_info: UnmentionInfo;
  legacy: StickyLegacy;
}

export interface StickyLegacy {
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
}

export interface FluffyExtendedEntities {
  media: EntitiesMedia[];
}

export interface ResponseObjects {
  feedbackActions: any[];
  immediateReactions: any[];
}
