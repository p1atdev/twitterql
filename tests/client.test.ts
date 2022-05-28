import { TwitterQLClient } from "../mod.ts";
import { UserByScreenName, UserTweetsAndReplies } from "../src/param/mod.ts";
import {
  UserByScreenNameParam,
  UserByScreenNameRes,
  UserTweetsAndRepliesParam,
  UserTweetsAndRepliesRes,
} from "../src/types/mod.ts";
import { assertEquals, assertExists } from "../deps.ts";

Deno.test("client setup", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  //   console.log("guestId:", client.guestId);
  assertExists(client.guestId, "guestId should exist but it doesn't");
});

Deno.test("get user by screen name", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  const variables: UserByScreenNameParam = {
    screen_name: "twitter",
  };

  const res = await client.request<UserByScreenNameRes>({
    endpoint: UserByScreenName,
    variables: variables,
  });

  // console.log("res:", res.data.user?.result.rest_id);

  assertExists(res.data.user, "user should exist but it doesn't");
  assertEquals(
    res.data.user!.result.rest_id,
    "783214",
  );
});

Deno.test("get user tweets and replies", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  const variables: UserTweetsAndRepliesParam = {
    userId: "783214",
    count: 20,
  };

  const res = await client.request<UserTweetsAndRepliesRes>({
    endpoint: UserTweetsAndReplies,
    variables: variables,
  });

  console.dir(res, { depth: 10 });

  assertExists(res.data.user, "user should exist but it doesn't");
  assertExists(
    res.data.user.result.timeline.timeline.instructions,
    "timeline should exist but it doesn't",
  );
});
