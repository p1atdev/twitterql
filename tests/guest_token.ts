import { getGuestToken } from "../src/twitter/mod.ts"

const guestToken = await getGuestToken()

console.log(guestToken)
