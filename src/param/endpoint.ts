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
}
