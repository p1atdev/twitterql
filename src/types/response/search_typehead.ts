import { TQLResponse } from "./base.ts"

export interface SearchTypeheadRes extends TQLResponse {
    num_results: number
    users: User[]
    topics: Topic[]
    events?: any[]
    lists?: any[]
    ordered_sections: string[]
    oneclick?: any[]
    hashtags?: any[]
    completed_in: number
    query: string
}

export interface Topic {
    topic: string
    rounded_score: number
    tokens: Token[]
    inline: boolean
    result_context?: ResultContext
    topic_type?: string
    original_query?: string
}

export interface ResultContext {
    display_string: string
    types: TypeElement[]
}

export interface TypeElement {
    type: TypeEnum
}

export enum TypeEnum {
    Bio = "bio",
    FollowRelationship = "follow_relationship",
    NumOfFollowers = "num_of_followers",
    NumTweets = "num_tweets",
}

export interface Token {
    token: string
}

export interface User {
    id: number
    id_str: string
    verified: boolean
    is_dm_able: boolean
    is_blocked: boolean
    can_media_tag: boolean
    name: string
    screen_name: string
    profile_image_url: string
    profile_image_url_https: string
    location: string
    is_protected: boolean
    rounded_score: number
    social_proof: number
    connecting_user_count: number
    connecting_user_ids: string[]
    social_proofs_ordered: any[]
    social_context: SocialContext
    tokens: Token[]
    inline: boolean
    result_context: ResultContext
}

export interface SocialContext {
    following: boolean
    followed_by: boolean
}
