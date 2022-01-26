import { TQLResponse } from "./base.ts"

export interface UserTweetsRes extends TQLResponse {
    data: Data
}

export interface Data {
    user: User
}

export interface User {
    result: Result
}

export interface Result {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: AffiliatesHighlightedLabel
    has_nft_avatar: boolean
    legacy: Legacy
    super_follow_eligible: boolean
    super_followed_by: boolean
    super_following: boolean
    legacy_extended_profile: AffiliatesHighlightedLabel
    is_profile_translatable: boolean
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: Entities
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    profile_banner_extensions: ProfileExtensions
    profile_banner_url: string
    profile_image_extensions: ProfileExtensions
    profile_image_url_https: string
    profile_interstitial_type: string
    protected: boolean
    screen_name: string
    statuses_count: number
    translator_type: string
    url: string
    verified: boolean
    withheld_in_countries: any[]
}

export interface Entities {
    description: Description
    url: Description
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
    ok: Ok
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
