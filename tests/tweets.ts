import { getUserTweets, getUserByScreenName } from "../src/twitter/mod.ts"

const userByScreenName = await getUserByScreenName({
    screen_name: "twitter",
})

console.log(userByScreenName)

const tweets = await getUserTweets({
    userId: userByScreenName.data.user.result.rest_id,
    count: 100,
})

console.dir(tweets, { depth: 10 })
