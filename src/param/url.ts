import { Host } from "../types/endpoint.ts";
/**
 * Twitter GraphQL API's host
 * @type {string}
 */
export const GraphQLHost: Host = {
  type: "gql",
  host: "https://twitter.com/i/api/graphql",
};

/**
 * Twitter normal v1.1 API's host
 */
export const LegacyHost: Host = {
  type: "v1.1",
  host: "https://api.twitter.com/1.1",
};

// /**
//  * Twitter v1.1 API's host
//  */
// export const v1_1Host: Host = {
//   type: "v1.1",
//   host: "https://twitter.com/i/api/1.1",
// };

/**
 * Twitter v2 API's host
 */
export const v2Host: Host = {
  type: "v2",
  host: "https://twitter.com/i/api/2",
};

/**
 * Twitter Miscellaneous API's host
 */
export const iHost: Host = {
  type: "i",
  host: "https://twitter.com/i/api/i",
};
