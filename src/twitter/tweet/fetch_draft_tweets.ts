import { TQLRequest } from "../../utils/wrapper.ts"
import { FetchDraftTweets } from "../../param/mod.ts"
import { FetchDraftTweetsParam } from "../../types/variables/fetch_draft_tweets.ts"
import { FetchDraftTweetsRes } from "../../types/response/fetch_draft_tweets.ts"

export const fetchDraftTweets = async (variables: FetchDraftTweetsParam, OAuthToken: string) => {
    const res = await TQLRequest(
        FetchDraftTweets,
        {
            ...variables,
        },
        undefined,
        OAuthToken
    )
    // console.log(res)

    const response: FetchDraftTweetsRes = await res.json()
    return response
}
