import {
    getUserByScreenName,
    getUserTweets,
    getSearchTypehead,
    getGuestToken,
    getQueryIds,
} from "../src/twitter/mod.ts"

const guestToken = await getGuestToken()
const queries = await getQueryIds()

const targetUserName = "twitter"
// @ojitan_55 is suggestion banned

console.log(`@${targetUserName} is shadow banned?`)

const targetUser = await getUserByScreenName(
    {
        screen_name: targetUserName,
    },
    guestToken,
    queries
)

if (targetUser.data.user) {
    console.log("[1] User exists")
} else {
    throw console.error("[!?] User does not exist")
}

const searchResults = await getSearchTypehead(
    {
        q: `@${targetUserName}`,
        result_type: "users",
    },
    guestToken
)

if (searchResults.users.length == 0) {
    console.log("[2] User is not in search results")
    console.log("[*] User is suggestion-banned 😢")
} else {
    console.log("[2] User is in search results")
    console.log("[*] User is not suggestion-banned 😄")
}
