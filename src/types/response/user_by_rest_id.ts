import { TQLResponse } from "./base.ts"

export interface UserByRestIdRes extends TQLResponse {
    data: Data
}

export interface Data {
    user: User
}

export interface User {
    result: Result
}

export interface Result {
    typename: string
    id: string
    restID: string
    affiliatesHighlightedLabel: AffiliatesHighlightedLabel
    hasNftAvatar: boolean
    legacy: Legacy
    superFollowEligible: boolean
    superFollowedBy: boolean
    superFollowing: boolean
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {
    createdAt: string
    defaultProfile: boolean
    defaultProfileImage: boolean
    description: string
    entities: Entities
    fastFollowersCount: number
    favouritesCount: number
    followersCount: number
    friendsCount: number
    hasCustomTimelines: boolean
    isTranslator: boolean
    listedCount: number
    location: string
    mediaCount: number
    name: string
    normalFollowersCount: number
    pinnedTweetIDSStr: string[]
    profileBannerExtensions: ProfileExtensions
    profileBannerURL: string
    profileImageExtensions: ProfileExtensions
    profileImageURLHTTPS: string
    profileInterstitialType: string
    protected: boolean
    screenName: string
    statusesCount: number
    translatorType: string
    url: string
    verified: boolean
    withheldInCountries: any[]
}

export interface Entities {
    description: Description
    url: Description
}

export interface Description {
    urls: URL[]
}

export interface URL {
    displayURL: string
    expandedURL: string
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
