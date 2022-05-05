import { Endpoint } from "../types/mod.ts";
import { GraphQLHost, iHost, LegacyHost, v2Host } from "./url.ts";
import {
  initialCommunityTweetsTimelineParam,
  initialEmailAvailableParam,
  initialFetchDraftTweetsParam,
  initialFollowingParam,
  initialSearchAdaptiveParam,
  initialTweetDetailParam,
  initialUserByRestIdParam,
  initialUserByScreenNameParam,
  initialUserNameAvailableParam,
  initialUsersVerifiedAvatarsParam,
  initialUserTweetsAndRepliesParam,
  initialUserTweetsParam,
  OnboardingParam,
} from "../types/mod.ts";

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
  initialVariables: initialUserByScreenNameParam,
};

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
  initialVariables: initialUserByRestIdParam,
};

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
  initialVariables: initialUserTweetsParam,
};

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
  initialVariables: initialUserTweetsAndRepliesParam,
};

/**
 * Favoriters of tweet
 * @param {Endpoint}
 */
export const Favoriters: Endpoint = {
  host: GraphQLHost,
  operationName: "Favoriters",
  method: "GET",
  needAuth: true,
  needOAuth: false,
  initialVariables: initialFetchDraftTweetsParam,
};

/**
 * Favoriters of retweet
 * @param {Endpoint}
 */
export const Retweeters: Endpoint = {
  host: GraphQLHost,
  operationName: "Retweeters",
  method: "GET",
  needAuth: true,
  needOAuth: false,
  initialVariables: initialFetchDraftTweetsParam,
};

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
  initialVariables: initialUsersVerifiedAvatarsParam,
};

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
  initialVariables: initialUserByRestIdParam,
};

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
  initialVariables: initialTweetDetailParam,
};

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
  initialVariables: initialFetchDraftTweetsParam,
};

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
  initialVariables: initialFetchDraftTweetsParam,
};

/**
 * Followings of user
 * @param {Endpoint}
 */
export const Following: Endpoint = {
  host: GraphQLHost,
  operationName: "Following",
  method: "GET",
  needAuth: true,
  needOAuth: false,
  initialVariables: initialFollowingParam,
};

/**
 * Community timeline
 */
export const CommunityTweetsTimeline: Endpoint = {
  host: GraphQLHost,
  operationName: "CommunityTweetsTimeline",
  method: "GET",
  needAuth: true,
  needOAuth: false,
  initialVariables: initialCommunityTweetsTimelineParam,
};

/**
 * Basic search endpoint
 * @param {Endpoint}
 */
export const SearchAdaptive: Endpoint = {
  host: v2Host,
  path: "/search/adaptive.json",
  method: "GET",
  needAuth: true,
  needOAuth: false,
  initialVariables: initialSearchAdaptiveParam,
};

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
};

/**
 * Trusted DM inbox
 */
export const DMInboxTimelineTrusted: Endpoint = {
  host: LegacyHost,
  path: "/dm/inbox_timeline/trusted.json",
  method: "GET",
  needAuth: true,
  needOAuth: true,
};

/**
 * Untrusted DM inbox
 */
export const DMInboxTimelineUntrusted: Endpoint = {
  host: LegacyHost,
  path: "/dm/inbox_timeline/untrusted.json",
  method: "GET",
  needAuth: true,
  needOAuth: true,
};

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
};

/**
 * Tasks of onboarding (sign up)
 * @type {Endpoint}
 */
export const OnboardingTaskSignUp: Endpoint = {
  host: LegacyHost,
  path: "/onboarding/task.json?flow_name=signup",
  method: "POST",
  needAuth: true,
  needOAuth: false,
};

/**
 * Begin verification of sign up
 * @type {Endpoint}
 */
export const OnboardingBeginVerification: Endpoint = {
  host: LegacyHost,
  path: "/onboarding/begin_verification.json",
  method: "POST",
  needAuth: true,
  needOAuth: false,
  initialVariables: OnboardingParam.initialBeginVerificationParam,
};

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
  initialVariables: initialUserNameAvailableParam,
};

/**
 * If a email is available
 * @type {Endpoint}
 */
export const EmailAvailable: Endpoint = {
  host: iHost,
  path: "/users/email_available.json",
  method: "GET",
  needAuth: true,
  needOAuth: false,
  initialVariables: initialEmailAvailableParam,
};
