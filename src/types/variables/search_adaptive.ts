import { Variables } from "../endpoint.ts"

export type SearchAdaptiveExt = "mediaStats" | "highlightedLabel" | "hasNftAvatar" | "voiceInfo" | "superFollowMetadata"

export enum SearchAdaptiveExtType {
    mediaStats = "mediaStats",
    highlightedLabel = "highlightedLabel",
    hasNftAvatar = "hasNftAvatar",
    voiceInfo = "voiceInfo",
    superFollowMetadata = "superFollowMetadata",
}

export function SetExtType(types: SearchAdaptiveExtType[]): string {
    return types.map((type) => type.toString()).join(",")
}

export interface SearchAdaptiveParam extends Variables {
    /**
     * search query
     */
    q: string
    /**
     * result count
     */
    count: number // 20
    include_profile_interstitial_type?: number // 1
    include_blocking?: number // 1
    include_blocked_by?: number // 1
    include_followed_by?: number // 1
    include_want_retweets?: number // 1
    include_mute_edge?: number // 1
    include_can_dm?: number // 1
    include_can_media_tag?: number // 1
    include_ext_has_nft_avatar?: number // 1
    skip_status?: number // 1
    cards_platform?: "Web-12"
    include_cards?: number // 1
    include_ext_alt_text?: boolean // true
    include_quote_count?: boolean // true
    include_reply_count?: number // 1
    tweet_mode?: "extended"
    include_entities?: boolean // true
    include_user_entities?: boolean // true
    include_ext_media_color?: boolean // true
    include_ext_media_availability?: boolean // true
    include_ext_sensitive_media_warning?: boolean // true
    send_error_codes?: boolean // true
    simple_quoted_tweet?: boolean // true
    query_source?: "typed_query"
    pc?: number // 1
    spelling_corrections?: number // 1
    ext?: string // "mediaStats,highlightedLabel,hasNftAvatar,voiceInfo,superFollowMetadata"
}
