import { getQueryIds } from "../src/twitter/query/get_query_ids.ts"

const queries = await getQueryIds()

console.log(queries)
