import { getUserByScreenName, getUsersVerifiedAvatars } from "../src/twitter/mod.ts"

const user = await getUserByScreenName({
    screen_name: "twitterdev",
})

const avatars = await getUsersVerifiedAvatars({
    userIds: [user.data.user.result.rest_id],
})

console.dir(avatars, { depth: 9999 })
