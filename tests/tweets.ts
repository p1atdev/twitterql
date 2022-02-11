import { getUserTweets, getUserByScreenName } from "../src/twitter/mod.ts"

const userByScreenName = await getUserByScreenName({
    screen_name: "p1atdev",
})

const tweets = await getUserTweets({
    userId: userByScreenName.data.user.result.rest_id,
    count: 100,
})

console.dir(tweets, { depth: Number.MAX_SAFE_INTEGER })
