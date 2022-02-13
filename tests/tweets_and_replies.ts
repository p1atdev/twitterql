import { getUserTweetsAndReplies, getUserByScreenName } from "../src/twitter/mod.ts"

const user = await getUserByScreenName({
    screen_name: "claudionatale1",
})

if (!user.data.user) {
    throw new Error("user not found")
}

const tweetsAndReplies = await getUserTweetsAndReplies({
    userId: user.data.user.result.rest_id,
    count: 10,
})

console.dir(tweetsAndReplies, { depth: 30 })
