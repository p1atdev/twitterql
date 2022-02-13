import { getUserTweets, getUserByScreenName } from "../src/twitter/mod.ts"

const userByScreenName = await getUserByScreenName({
    screen_name: "Nintendo",
})

console.log(userByScreenName)

const tweets = await getUserTweets({
    userId: userByScreenName.data.user.result.rest_id,
    count: 10,
})

console.dir(tweets, { depth: 10 })

console.dir(
    tweets.data.user.result.timeline.timeline.instructions[0].entries[0].content.itemContent.tweet_results.result.core
        .user_results.result.legacy.description,
    { depth: 10 }
)
