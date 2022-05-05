import { getSearchTypehead } from "../src/twitter/mod.ts";
import { assertEquals, assertNotEquals } from "../deps.ts";

Deno.test("search typehead", async () => {
  const results = await getSearchTypehead({
    q: "@twitter",
    result_type: "users",
  });

  assertNotEquals(results.users.length, 0);
});

Deno.test("search typehead (shadowbanned)", async () => {
  const shadowBanned = await getSearchTypehead({
    q: "@ojitan_55",
    result_type: "users",
  });

  assertEquals(shadowBanned.users.length, 0);
});
