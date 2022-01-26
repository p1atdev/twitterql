import { TQLRequest } from "../../utils/wrapper.ts"
import { UserTweets } from "../../param/mod.ts"
import { UserTweetsParam } from "../../types/variables/user_tweets.ts"
import { UserTweetsRes } from "../../types/response/user_tweets.ts"

export const getUserTweets = async (variables: UserTweetsParam) => {
    const res = await TQLRequest(UserTweets, variables)
    // console.log(res)

    const response: UserTweetsRes = await res.json()
    return response
}
