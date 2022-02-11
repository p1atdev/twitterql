import { TQLRequest } from "../../utils/wrapper.ts"
import { UsersVerifiedAvatars } from "../../param/mod.ts"
import { UsersVerifiedAvatarsParam } from "../../types/variables/users_verified_avatars.ts"
import { UsersVerifiedAvatarsRes } from "../../types/response/users_verified_avatars.ts"

export const getUsersVerifiedAvatars = async (variables: UsersVerifiedAvatarsParam) => {
    const res = await TQLRequest(UsersVerifiedAvatars, variables)
    // console.log(res)

    const response: UsersVerifiedAvatarsRes = await res.json()
    return response
}
