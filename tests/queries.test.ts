import { getQueryIds } from "../src/twitter/query/get_query_ids.ts";
import { assertNotEquals } from "../deps.ts";

Deno.test("fetch queries", async () => {
  const queries = await getQueryIds();

  assertNotEquals(queries.length, 0);
});
