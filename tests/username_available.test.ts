import { getUserNameAvailable } from "../src/twitter/mod.ts";
import { assertEquals } from "../deps.ts";

Deno.test("check if username is available", async () => {
  const userNameAvailable = await getUserNameAvailable({
    username: "twitter",
  });

  assertEquals(userNameAvailable.reason, "contains_banned_word");
});
