import { Endpoint } from "../types/mod.ts"
import { LegacyHost, v2Host, GraphQLHost, iHost } from "./url.ts"

/**
 * User name by screen name endpoint
 * @type {Endpoint}
 */
export const UserByScreenName: Endpoint = {
    host: GraphQLHost,
    operationName: "UserByScreenName",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * User name by rest id endpoint
 * @type {Endpoint}
 */
export const UserByRestId: Endpoint = {
    host: GraphQLHost,
    operationName: "UserByRestId",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * User tweets endpoint
 * @param {Endpoint}
 */
export const UserTweets: Endpoint = {
    host: GraphQLHost,
    operationName: "UserTweets",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * User tweets and replies endpoint
 * @param {Endpoint}
 */
export const UserTweetsAndReplies: Endpoint = {
    host: GraphQLHost,
    operationName: "UserTweetsAndReplies",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * User verified avatars endpoint
 * よくわからない
 * @param {Endpoint}
 */
export const UsersVerifiedAvatars: Endpoint = {
    host: GraphQLHost,
    operationName: "UsersVerifiedAvatars",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * Biz profile fetch user
 * @param {Endpoint}
 */
export const BizProfileFetchUser: Endpoint = {
    host: GraphQLHost,
    operationName: "BizProfileFetchUser",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * Tweet detail
 * @param {Endpoint}
 */
export const TweetDetail: Endpoint = {
    host: GraphQLHost,
    operationName: "TweetDetail",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * Fetch scheduled tweets
 * @param {Endpoint}
 */
export const FetchScheduledTweets: Endpoint = {
    host: GraphQLHost,
    operationName: "FetchScheduledTweets",
    method: "GET",
    needAuth: true,
    needOAuth: true,
}

/**
 * Fetch draft tweets
 * @param {Endpoint}
 */
export const FetchDraftTweets: Endpoint = {
    host: GraphQLHost,
    operationName: "FetchDraftTweets",
    method: "GET",
    needAuth: true,
    needOAuth: true,
}

/**
 * Guest token
 * @type {Endpoint}
 */
export const GuestToken: Endpoint = {
    host: LegacyHost,
    path: "/guest/activate.json",
    method: "POST",
    needAuth: false,
    needOAuth: false,
}

/**
 * Trusted DM inbox
 */
export const DMInboxTimelineTrusted: Endpoint = {
    host: LegacyHost,
    path: "/dm/inbox_timeline/trusted.json",
    method: "GET",
    needAuth: true,
    needOAuth: true,
}

/**
 * Untrusted DM inbox
 */
export const DMInboxTimelineUntrusted: Endpoint = {
    host: LegacyHost,
    path: "/dm/inbox_timeline/untrusted.json",
    method: "GET",
    needAuth: true,
    needOAuth: true,
}

/**
 * Search typehead
 * @type {Endpoint}
 */
export const SearchTypehead: Endpoint = {
    host: LegacyHost,
    path: "/search/typeahead.json",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}

/**
 * If a user name is registered or not
 * @type {Endpoint}
 */
export const UserNameAvailable: Endpoint = {
    host: iHost,
    path: "/users/username_available.json",
    method: "GET",
    needAuth: true,
    needOAuth: false,
}
