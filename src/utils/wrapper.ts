import { Endpoint, Variables } from "../types/mod.ts"
import { TwitterAuthToken as Token } from "../param/token.ts"
import { getGuestToken } from "../twitter/guest/get_guest_token.ts"
import { getQueryIds } from "../twitter/query/get_query_ids.ts"

/**
 *
 * @param endpoint
 * @param variables
 * @param guestToken
 * @returns
 */
const QLRequest = async (endpoint: Endpoint, variables: Variables, guestToken: string) => {
    // first get query ids
    const queries = await getQueryIds()
    // get the corresponding query id
    const queryId = queries.filter((query) => query.operationName === endpoint.operationName)[0].queryId

    const url = new URL([endpoint.host.host, queryId, endpoint.operationName].join("/")) //+ `?variables=${JSON.stringify(variables)}`

    const headers: HeadersInit = {
        Authorization: `Bearer ${Token}`,
        "x-guest-token": guestToken,
    }

    try {
        const variableJSON = JSON.stringify(variables)
        url.search = new URLSearchParams({ variables: variableJSON }).toString()
        const res = await fetch(url, {
            method: endpoint.method,
            headers: headers,
        })

        return res
    } catch (err) {
        throw Error("Failed to request graphql endpoint: " + err)
    }
}

const LegacyRequest = async (endpoint: Endpoint, variables?: Variables) => {
    const headers: HeadersInit = {
        Authorization: `Bearer ${Token}`,
    }

    const url = endpoint.host.host + endpoint.path

    try {
        const res = await fetch(url, {
            method: endpoint.method,
            headers: headers,
        })

        return res
    } catch (err) {
        throw Error("Failed to fetch:" + err)
    }
}

/**
 *
 * @param endpoint
 * @param variables
 * @returns
 */
export const TQLRequest = async (endpoint: Endpoint, variables?: Variables) => {
    switch (endpoint.host.type) {
        case "gql": {
            const guestToken = await getGuestToken()
            const res = await QLRequest(endpoint, variables ?? {}, guestToken)
            return res
        }
        case "v1.1": {
            const res = await LegacyRequest(endpoint, variables)
            return res
        }
        default:
            throw Error("Unknown host type.")
    }
}
