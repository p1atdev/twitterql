import { getGuestToken } from "../src/twitter/mod.ts";
import { assertExists } from "../deps.ts";

Deno.test("get guest token", async () => {
  const guestToken = await getGuestToken();

  assertExists(guestToken);
});
