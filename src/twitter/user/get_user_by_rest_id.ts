import { TQLRequest } from "../../utils/wrapper.ts"
import { UserByRestId } from "../../param/mod.ts"
import { UserByRestIdParam } from "../../types/variables/user_by_rest_id.ts"
import { UserByRestIdRes } from "../../types/response/user_by_rest_id.ts"

export const getUserByRestId = async (variables: UserByRestIdParam) => {
    const res = await TQLRequest(UserByRestId, {
        withSafetyModeUserFields: true,
        withSuperFollowsUserFields: true,
        ...variables,
    })
    // console.log(res)

    const response: UserByRestIdRes = await res.json()
    return response
}
