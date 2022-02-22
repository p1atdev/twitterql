import { TQLRequest } from "../../utils/wrapper.ts"
import { SearchTypehead } from "../../param/mod.ts"
import {
    SearchTypeheadParam,
    SearchTypeheadResultType as ResultType,
    SetResultType,
} from "../../types/variables/search_typehead.ts"
import { SearchTypeheadRes } from "../../types/response/search_typehead.ts"

export const getSearchTypehead = async (variables: SearchTypeheadParam, guestToken?: string) => {
    const res = await TQLRequest(
        SearchTypehead,
        {
            src: "search_box",
            result_type: SetResultType([ResultType.Events, ResultType.Users, ResultType.Topics]),
            ...variables,
        },
        undefined,
        undefined,
        guestToken
    )
    // console.log(SetResultType([ResultType.Events, ResultType.Users, ResultType.Topics]))

    const response: SearchTypeheadRes = await res.json()
    return response
}
