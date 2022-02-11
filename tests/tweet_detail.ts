import { getTweetDetail } from "../src/twitter/mod.ts"

const tweetDetail = await getTweetDetail({
    focalTweetId: "1490671229787082755",
})

console.dir(tweetDetail, { depth: 10 })
