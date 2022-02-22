// import { Variables } from "../src/types/endpoint.ts"
// import { getGuestToken } from "../src/twitter/guest/get_guest_token.ts"
import { getUserByScreenName, getUserByRestId, getGuestToken, getQueryIds } from "../src/twitter/mod.ts"

const guestToken = await getGuestToken()
const queries = await getQueryIds()

const userByScreenName = await getUserByScreenName(
    {
        screen_name: "deno_land",
    },
    guestToken,
    queries
)

const userByRestId = await getUserByRestId({
    userId: userByScreenName.data.user!.result.rest_id,
})

console.dir(userByScreenName)
console.dir(userByRestId)
console.log(userByScreenName.data.user!.result.rest_id)
