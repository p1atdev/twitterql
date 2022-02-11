import { Endpoint, Variables } from "../types/mod.ts"
import { TwitterAuthToken as Token } from "../param/token.ts"
import { getGuestToken } from "../twitter/mod.ts"
import { getQueryIds } from "../twitter/query/get_query_ids.ts"

/**
 *
 * @param endpoint
 * @param variables
 * @param guestToken
 * @returns
 */
const QLRequest = async (endpoint: Endpoint, variables: Variables) => {
    // first get query ids
    const queries = await getQueryIds()
    // get the corresponding query id
    const queryId = queries.filter((query) => query.operationName === endpoint.operationName)[0].queryId

    const url = new URL([endpoint.host.host, queryId, endpoint.operationName].join("/")) //+ `?variables=${JSON.stringify(variables)}`

    const headers: HeadersInit = {
        Authorization: `Bearer ${Token}`,
    }

    if (endpoint.needAuth) {
        const guestToken = await getGuestToken()
        headers["x-guest-token"] = guestToken
    }

    console.log(headers)

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

    if (endpoint.needAuth) {
        const guestToken = await getGuestToken()
        headers["x-guest-token"] = guestToken
    }

    // const query = (() => {
    //     if (variables) {
    //         // set query params
    //         const queryParams = new URLSearchParams()
    //         Object.entries(variables).forEach(([key, value]) => {
    //             queryParams.set(key, value)
    //         })
    //         return `?${queryParams.toString()}`
    //     } else {
    //         return ""
    //     }
    // })()

    const url = endpoint.host.host + endpoint.path //+ query

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

const MiscRequest = async (endpoint: Endpoint, variables?: Variables) => {
    const headers: HeadersInit = {
        Authorization: `Bearer ${Token}`,
    }

    if (endpoint.needAuth) {
        const guestToken = await getGuestToken()
        headers["x-guest-token"] = guestToken
    }

    const query = (() => {
        if (variables) {
            // set query params
            const queryParams = new URLSearchParams()
            Object.entries(variables).forEach(([key, value]) => {
                queryParams.set(key, value)
            })
            return `?${queryParams.toString()}`
        } else {
            throw Error("MiscRequest requires variables.")
        }
    })()

    const url = endpoint.host.host + endpoint.path + query

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
            const res = await QLRequest(endpoint, variables ?? {})
            return res
        }
        case "v1.1": {
            const res = await LegacyRequest(endpoint, variables)
            return res
        }
        // case "v2": {
        //     break
        // }
        case "i": {
            const res = await MiscRequest(endpoint, variables)
            return res
        }
        default:
            throw Error("Unknown host type.")
    }
}
