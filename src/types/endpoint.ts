// import { Query } from "./query.ts"

export interface Variables {}

export type Endpoint = {
  host: Host;
  path?: string;
  variables?: Variables;
  initialVariables?: Variables;
  method: Method;
  needAuth: boolean;
  needOAuth: boolean;
  operationName?: string;
};

export type Host = {
  type: APIType;
  host: string;
};

export type APIType = "v1.1" | "v2" | "gql" | "i";
export type Method =
  | "GET"
  | "POST"
  | "DELETE"
  | "PUT"
  | "PATCH"
  | "HEAD"
  | "OPTIONS";

// export type TQLResponse = {}
// export type TQLRequest = (guestId?: string, queries?: Query[], variables?: Variables) => Promise<TQLResponse>

// export class Endpoint {
//     /**
//      * v1とかv2とかgraphqlとか
//      */
//     host: Host
//     path?: string
//     variables?: Variables
//     method: Method
//     needAuth: boolean
//     needOAuth: boolean
//     operationName?: string

//     request: TQLRequest

//     constructor(
//         host: Host,
//         path?: string,
//         variables?: Variables,
//         method: Method = "GET",
//         needAuth: boolean = false,
//         needOAuth: boolean = false,
//         operationName?: string,
//         request: TQLRequest = () => Promise.resolve({})
//     ) {
//         this.host = host
//         this.path = path
//         this.variables = variables
//         this.method = method
//         this.needAuth = needAuth
//         this.needOAuth = needOAuth
//         this.operationName = operationName
//         this.request = request
//     }
// }
