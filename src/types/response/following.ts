import { TQLResponse } from "./base.ts"

export interface FollowingRes extends TQLResponse {
    data: Data
}

export interface Data {
    user: User
}

export interface User {
    result: UserResult
}

export interface UserResult {
    __typename: Typename
    timeline: ResultTimeline
}

export enum Typename {
    User = "User",
}

export interface ResultTimeline {
    timeline: TimelineTimeline
}

export interface TimelineTimeline {
    instructions: Instruction[]
}

export interface Instruction {
    type: string
    direction?: string
    entries?: Entry[]
}

export interface Entry {
    entryId: string
    sortIndex: string
    content: Content
}

export interface Content {
    entryType: EntryType
    itemContent?: ItemContent
    clientEventInfo?: ClientEventInfo
    value?: string
    cursorType?: string
}

export interface ClientEventInfo {
    component: Component
    element: Element
}

export enum Component {
    FollowingSgs = "FollowingSgs",
}

export enum Element {
    User = "user",
}

export enum EntryType {
    TimelineTimelineCursor = "TimelineTimelineCursor",
    TimelineTimelineItem = "TimelineTimelineItem",
}

export interface ItemContent {
    itemType: ItemType
    user_results: UserResults
    userDisplayType: Typename
}

export enum ItemType {
    TimelineUser = "TimelineUser",
}

export interface UserResults {
    result: UserResultsResult
}

export interface UserResultsResult {
    __typename: Typename
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel
    has_nft_avatar: boolean
    legacy: Legacy
    super_follow_eligible: boolean
    super_followed_by: boolean
    super_following: boolean
    professional?: Professional
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {
    blocked_by: boolean
    blocking: boolean
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities
    fast_followers_count: number
    favourites_count: number
    follow_request_sent: boolean
    followed_by: boolean
    followers_count: number
    following: boolean
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    muting: boolean
    name: string
    normal_followers_count: number
    notifications: boolean
    pinned_tweet_ids_str: string[]
    profile_banner_extensions?: ProfileExtensions
    profile_banner_url?: string
    profile_image_extensions: ProfileExtensions
    profile_image_url_https: string
    profile_interstitial_type: string
    protected: boolean
    screen_name: string
    statuses_count: number
    translator_type: TranslatorType
    url?: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: any[]
}

export interface Entities {
    description: Description
    url?: Description
}

export interface Description {
    urls: URL[]
}

export interface URL {
    display_url: string
    expanded_url: string
    url: string
    indices: number[]
}

export interface ProfileExtensions {
    mediaColor: MediaColor
}

export interface MediaColor {
    r: R
}

export interface R {
    ok?: Ok
}

export interface Ok {
    palette: Palette[]
}

export interface Palette {
    percentage: number
    rgb: RGB
}

export interface RGB {
    blue: number
    green: number
    red: number
}

export enum TranslatorType {
    None = "none",
    Regular = "regular",
}

export interface Professional {
    rest_id: string
    professional_type: string
    category: Category[]
}

export interface Category {
    id: number
    name: string
}
