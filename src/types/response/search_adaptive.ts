import { TQLResponse } from "./base.ts"

export interface SearchAdaptiveRes extends TQLResponse {
    globalObjects: GlobalObjects
    timeline: Timeline
}

export interface GlobalObjects {
    tweets: { [key: string]: TweetValue }
    users: { [key: string]: The74594552_Value }
    moments: Broadcasts
    cards: Broadcasts
    places: Broadcasts
    media: Broadcasts
    broadcasts: Broadcasts
    topics: Broadcasts
    lists: Broadcasts
}

export interface Broadcasts {}

export interface TweetValue {
    created_at: string
    id: number
    id_str: string
    full_text: string
    truncated: boolean
    display_text_range: number[]
    entities: TweetEntities
    extended_entities?: ExtendedEntities
    source: string
    in_reply_to_status_id: null
    in_reply_to_status_id_str: null
    in_reply_to_user_id: null
    in_reply_to_user_id_str: null
    in_reply_to_screen_name: null
    user_id: number
    user_id_str: string
    geo: null
    coordinates: null
    place: null
    contributors: null
    is_quote_status: boolean
    retweet_count: number
    favorite_count: number
    reply_count: number
    quote_count: number
    conversation_id: number
    conversation_id_str: string
    favorited: boolean
    retweeted: boolean
    possibly_sensitive: boolean
    possibly_sensitive_editable: boolean
    lang: Lang
    supplemental_language: null
    ext: TweetEXT
    card?: Card
}

export interface Card {
    name: string
    url: string
    card_type_url: string
    binding_values: BindingValues
    users?: Users
    card_platform: CardPlatform
}

export interface BindingValues {
    player_url?: CardID
    cover_player_url?: CardID
    thank_you_text?: CardID
    card_id?: CardID
    cta_one?: CardID
    cover_player_stream_content_type?: CardID
    cover_player_stream_url?: CardID
    cover_player_height?: CardID
    cover_player_width?: CardID
    cover_content_duration_seconds?: CardID
    player_stream_content_type?: CardID
    player_stream_url?: CardID
    player_height?: CardID
    player_width?: CardID
    content_duration_seconds?: CardID
    site?: Site
    title?: CardID
    cta_one_tweet?: CardID
    cover_player_image_small?: CoverPlayerImage
    cover_player_image?: CoverPlayerImage
    cover_player_image_large?: CoverPlayerImage
    cover_player_image_x_large?: CoverPlayerImage
    cover_player_image_color?: PlayerImageColor
    cover_player_image_original?: CoverPlayerImage
    player_image_small?: CoverPlayerImage
    player_image?: CoverPlayerImage
    player_image_large?: CoverPlayerImage
    player_image_x_large?: CoverPlayerImage
    player_image_color?: PlayerImageColor
    player_image_original?: CoverPlayerImage
    card_url: CardURL
    unified_card?: CardID
}

export interface CardID {
    type: CardIDType
    string_value: string
}

export enum CardIDType {
    String = "STRING",
}

export interface CardURL {
    type: CardIDType
    string_value: string
    scribe_key: string
}

export interface CoverPlayerImage {
    type: CoverPlayerImageType
    image_value: ImageValue
}

export interface ImageValue {
    url: string
    width: number
    height: number
    alt: null
}

export enum CoverPlayerImageType {
    Image = "IMAGE",
}

export interface PlayerImageColor {
    type: string
    image_color_value: ProfileBannerExtensionsMediaColor
}

export interface ProfileBannerExtensionsMediaColor {
    palette: Palette[]
}

export interface Palette {
    rgb: RGB
    percentage: number
}

export interface RGB {
    red: number
    green: number
    blue: number
}

export interface Site {
    type: string
    user_value: UserValue
    scribe_key: string
}

export interface UserValue {
    id_str: string
    path: any[]
}

export interface CardPlatform {
    platform: Platform
}

export interface Platform {
    device: Device
    audience: Audience
}

export interface Audience {
    name: string
    bucket: null
}

export interface Device {
    name: string
    version: string
}

export interface Users {
    "74594552": The74594552_Value
}

export interface The74594552_Value {
    id: number
    id_str: string
    name: string
    screen_name: string
    location: string
    description: string
    url: string
    entities: UserEntities
    protected: boolean
    followers_count: number
    fast_followers_count: number
    normal_followers_count: number
    friends_count: number
    listed_count: number
    created_at: string
    favourites_count: number
    utc_offset: null
    time_zone: null
    geo_enabled: boolean
    verified: boolean
    statuses_count: number
    media_count: number
    lang: null
    contributors_enabled: boolean
    is_translator: boolean
    is_translation_enabled: boolean
    profile_background_color: string
    profile_background_image_url: string
    profile_background_image_url_https: string
    profile_background_tile: boolean
    profile_image_url: string
    profile_image_url_https: string
    profile_banner_url: string
    profile_image_extensions_sensitive_media_warning: null
    profile_image_extensions_media_availability: null
    profile_image_extensions_alt_text: null
    profile_image_extensions_media_color: ProfileBannerExtensionsMediaColor
    profile_image_extensions: ProfileExtensions
    profile_banner_extensions_sensitive_media_warning: null
    profile_banner_extensions_media_availability: null
    profile_banner_extensions_alt_text: null
    profile_banner_extensions_media_color: ProfileBannerExtensionsMediaColor
    profile_banner_extensions: ProfileExtensions
    profile_link_color: string
    profile_sidebar_border_color: string
    profile_sidebar_fill_color: string
    profile_text_color: string
    profile_use_background_image: boolean
    has_extended_profile: boolean
    default_profile: boolean
    default_profile_image: boolean
    pinned_tweet_ids: number[]
    pinned_tweet_ids_str: string[]
    has_custom_timelines: boolean
    can_dm: null
    following: null
    follow_request_sent: null
    notifications: null
    muting: null
    blocking: null
    blocked_by: null
    want_retweets: null
    advertiser_account_type: string
    advertiser_account_service_levels: AdvertiserAccountServiceLevel[]
    profile_interstitial_type: string
    business_profile_state: string
    translator_type: string
    withheld_in_countries: any[]
    followed_by: null
    ext_has_nft_avatar: boolean
    ext: UserEXT
    require_some_consent: boolean
}

export enum AdvertiserAccountServiceLevel {
    Analytics = "analytics",
    Dso = "dso",
    MediaStudio = "media_studio",
    Mms = "mms",
}

export interface UserEntities {
    url: Description
    description: Description
}

export interface Description {
    urls: URL[]
}

export interface URL {
    url: string
    expanded_url: string
    display_url: string
    indices: number[]
}

export interface UserEXT {
    superFollowMetadata: PurpleSuperFollowMetadata
    highlightedLabel: SuperFollowMetadata
    hasNftAvatar: HasNftAvatar
}

export interface HasNftAvatar {
    r: HasNftAvatarR
    ttl: number
}

export interface HasNftAvatarR {
    ok: boolean
}

export interface SuperFollowMetadata {
    r: HighlightedLabelR
    ttl: number
}

export interface HighlightedLabelR {
    ok: Broadcasts
}

export interface PurpleSuperFollowMetadata {
    r: PurpleR
    ttl: number
}

export interface PurpleR {
    ok: Ok
}

export interface Ok {
    superFollowEligible: boolean
    superFollowing: boolean
    superFollowedBy: boolean
    exclusiveTweetFollowing: boolean
}

export interface ProfileExtensions {
    mediaStats: ProfileBannerExtensionsMediaStats
}

export interface ProfileBannerExtensionsMediaStats {
    r: MediaStatsR
    ttl: number
}

export interface MediaStatsR {
    missing: null
}

export interface TweetEntities {
    hashtags: Hashtag[]
    symbols: any[]
    user_mentions: UserMention[]
    urls: URL[]
    media?: EntitiesMedia[]
}

export interface Hashtag {
    text: string
    indices: number[]
}

export interface EntitiesMedia {
    id: number
    id_str: string
    indices: number[]
    media_url: string
    media_url_https: string
    url: string
    display_url: string
    expanded_url: string
    type: string
    original_info: OriginalInfo
    sizes: Sizes
}

export interface OriginalInfo {
    width: number
    height: number
    focus_rects: FocusRect[]
}

export interface FocusRect {
    x: number
    y: number
    h: number
    w: number
}

export interface Sizes {
    thumb: Large
    small: Large
    large: Large
    medium: Large
}

export interface Large {
    w: number
    h: number
    resize: Resize
}

export enum Resize {
    Crop = "crop",
    Fit = "fit",
}

export interface UserMention {
    screen_name: string
    name: string
    id: number
    id_str: string
    indices: number[]
}

export interface TweetEXT {
    superFollowMetadata: SuperFollowMetadata
}

export interface ExtendedEntities {
    media: ExtendedEntitiesMedia[]
}

export interface ExtendedEntitiesMedia {
    id: number
    id_str: string
    indices: number[]
    media_url: string
    media_url_https: string
    url: string
    display_url: string
    expanded_url: string
    type: string
    original_info: OriginalInfo
    sizes: Sizes
    media_key: string
    ext_sensitive_media_warning: null
    ext_media_availability: EXTMediaAvailability
    ext_alt_text: null
    ext_media_color: ProfileBannerExtensionsMediaColor
    ext: MediaEXT
}

export interface MediaEXT {
    mediaStats: EXTMediaStats
}

export interface EXTMediaStats {
    r: string
    ttl: number
}

export interface EXTMediaAvailability {
    status: string
}

export enum Lang {
    Ja = "ja",
}

export interface Timeline {
    id: string
    instructions: Instruction[]
}

export interface Instruction {
    addEntries: AddEntries
}

export interface AddEntries {
    entries: Entry[]
}

export interface Entry {
    entryId: string
    sortIndex: string
    content: EntryContent
}

export interface EntryContent {
    timelineModule?: TimelineModule
    item?: ContentItem
    operation?: Operation
}

export interface ContentItem {
    content: PurpleContent
    clientEventInfo: ItemClientEventInfo
}

export interface ItemClientEventInfo {
    component: Component
    element: Element
    details: Details
}

export enum Component {
    Result = "result",
    UserModule = "user_module",
}

export interface Details {
    timelinesDetails: TimelinesDetails
}

export interface TimelinesDetails {
    controllerData: string
}

export enum Element {
    Tweet = "tweet",
    User = "user",
}

export interface PurpleContent {
    tweet: ContentTweet
}

export interface ContentTweet {
    id: string
    displayType: DisplayType
    highlights?: Highlights
}

export enum DisplayType {
    Tweet = "Tweet",
}

export interface Highlights {
    textHighlights: TextHighlight[]
}

export interface TextHighlight {
    startIndex: number
    endIndex: number
}

export interface Operation {
    cursor: Cursor
}

export interface Cursor {
    value: string
    cursorType: string
}

export interface TimelineModule {
    items: ItemElement[]
    displayType: string
    header: Header
    footer: Footer
    clientEventInfo: TimelineModuleClientEventInfo
}

export interface TimelineModuleClientEventInfo {
    component: Component
    element: string
}

export interface Footer {
    text: string
    url: string
    displayType: string
}

export interface Header {
    text: string
    sticky: boolean
    displayType: string
}

export interface ItemElement {
    entryId: string
    item: ItemItem
}

export interface ItemItem {
    content: FluffyContent
    clientEventInfo: ItemClientEventInfo
}

export interface FluffyContent {
    user: ContentUser
}

export interface ContentUser {
    id: string
    displayType: string
}
