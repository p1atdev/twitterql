export interface Variables {}

export type Endpoint = {
    host: Host
    path?: string
    variables?: Variables
    method: Method
    needAuth: boolean
    operationName?: string
}

export type Host = {
    type: APIType
    host: string
}

export type APIType = "v1.1" | "v2" | "gql"
export type Method = "GET" | "POST" | "DELETE" | "PUT" | "PATCH" | "HEAD" | "OPTIONS"
