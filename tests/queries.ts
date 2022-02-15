import { getQueryIds } from "../src/twitter/query/get_query_ids.ts"

const queries = await getQueryIds()

console.log(queries)

function writeJson(path: string, data: object): string {
    try {
        Deno.writeTextFileSync(path, JSON.stringify(data))

        return "Written to " + path
    } catch (e) {
        return e.message
    }
}

writeJson(
    "./queries.json",
    queries.map((query) => {
        return {
            endpoint: query.operationName,
            type: query.operationType,
            random: query.queryId,
        }
    })
)
