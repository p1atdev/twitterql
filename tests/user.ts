// import { Variables } from "../src/types/endpoint.ts"
// import { getGuestToken } from "../src/twitter/guest/get_guest_token.ts"
import { getUserByScreenName, getUserByRestId } from "../src/twitter/mod.ts"

// const guestToken = await getGuestToken()

// console.log(guestToken)
// await getTweetDetail()

const userByScreenName = await getUserByScreenName({
    screen_name: "p1atdev",
    withSafetyModeUserFields: true,
    withSuperFollowsUserFields: true,
})

const userByRestId = await getUserByRestId({
    userId: userByScreenName.data.user.result.rest_id,
    withSafetyModeUserFields: true,
    withSuperFollowsUserFields: true,
})

console.log(userByScreenName)
console.log(userByRestId)
