import {
  getGuestToken,
  getQueryIds,
  getUserByRestId,
  getUserByScreenName,
} from "../src/twitter/mod.ts";
import { assertEquals, assertExists } from "../deps.ts";

Deno.test("get user", async () => {
  const guestToken = await getGuestToken();
  const queries = await getQueryIds();

  const userByScreenName = await getUserByScreenName(
    {
      screen_name: "twitter",
    },
    guestToken,
    queries,
  );

  const userByRestId = await getUserByRestId({
    userId: userByScreenName.data.user!.result.rest_id,
  });

  assertExists(userByScreenName.data.user);
  assertExists(userByRestId.data.user);

  assertExists(userByScreenName.data.user.result.rest_id);

  assertEquals(
    userByScreenName.data.user.result.rest_id,
    userByRestId.data.user.result.rest_id,
  );
});
