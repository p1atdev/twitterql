import { TQLResponse } from "./base.ts"

export interface FetchDraftTweetsRes extends TQLResponse {
    data: Data
}

export interface Data {
    viewer: Viewer
}

export interface Viewer {
    draft_list: DraftList
}

export interface DraftList {
    response_data: ResponseDatum[]
}

export interface ResponseDatum {
    rest_id: string
    user_results: UserResults
    tweet_create_request: TweetCreateRequest
}

export interface TweetCreateRequest {
    type: string
    status: string
    exclude_reply_user_ids: string[]
    media_ids: string[]
    auto_populate_reply_metadata: boolean
}

export interface UserResults {
    result: Result
}

export interface Result {
    __typename: string
    rest_id: string
}
