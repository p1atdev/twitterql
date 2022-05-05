import {
  getUserByScreenName,
  getUserTweetsAndReplies,
} from "../src/twitter/mod.ts";
import { assertExists, assertNotEquals } from "../deps.ts";

Deno.test("tweets and replies", async () => {
  const user = await getUserByScreenName({
    screen_name: "claudionatale1",
  });

  assertExists(user.data.user);

  const tweetsAndReplies = await getUserTweetsAndReplies({
    userId: user.data.user.result.rest_id,
    count: 10,
  });

  assertNotEquals(
    tweetsAndReplies.data.user.result.timeline.timeline.instructions.length,
    0,
  );
});
