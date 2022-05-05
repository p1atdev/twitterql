import { TwitterQLClient } from "../mod.ts";
import { SearchTypehead } from "../src/param/mod.ts";
import { SearchTypeheadParam, SearchTypeheadRes } from "../src/types/mod.ts";
import { assertEquals, assertNotEquals } from "../deps.ts";

Deno.test("search typehead", async () => {
  const client = new TwitterQLClient();
  await client.setup();

  const param: SearchTypeheadParam = {
    q: "@twitter",
    result_type: "users",
  };

  const results = await client.request<SearchTypeheadRes>({
    endpoint: SearchTypehead,
    variables: param,
  });

  assertNotEquals(results.users.length, 0);
});

Deno.test("search typehead (shadowbanned)", async () => {
  const client = new TwitterQLClient();
  await client.setup();

  const param: SearchTypeheadParam = {
    q: "@ojitan_55",
    result_type: "users",
  };

  const shadowBanned = await client.request<SearchTypeheadRes>({
    endpoint: SearchTypehead,
    variables: param,
  });

  assertEquals(shadowBanned.users.length, 0);
});
