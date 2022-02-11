import { TQLResponse } from "./base.ts"

export interface UsersVerifiedAvatarsRes extends TQLResponse {
    data: Data
}

export interface Data {
    usersResults: UsersResult[]
}

export interface UsersResult {
    result: Result
}

export interface Result {
    __typename: string
    has_nft_avatar: boolean
    rest_id: string
}
