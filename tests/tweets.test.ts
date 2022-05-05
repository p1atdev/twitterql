import { getUserByScreenName, getUserTweets } from "../src/twitter/mod.ts";
import { assertExists, assertNotEquals } from "../deps.ts";

Deno.test("get tweets", async () => {
  const userByScreenName = await getUserByScreenName({
    screen_name: "discord",
  });

  assertExists(userByScreenName.data.user);

  const tweets = await getUserTweets({
    userId: userByScreenName.data.user.result.rest_id,
    count: 500,
  });

  const instructions = tweets.data.user.result.timeline.timeline.instructions;

  assertExists(instructions.length);

  assertNotEquals(instructions.length, 0);
});
