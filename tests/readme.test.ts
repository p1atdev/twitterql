import {
  TwitterQLClient,
  UserByScreenName,
  UserByScreenNameParam,
  UserByScreenNameRes,
  UserTweets,
  //   UserTweetsParam,
  UserTweetsRes,
} from "../mod.ts";
import { assertExists } from "../deps.ts";

Deno.test("Readme", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  const variables: UserByScreenNameParam = {
    screen_name: "twitter",
  };

  const user = await client.request<UserByScreenNameRes>({
    endpoint: UserByScreenName,
    variables: variables,
  });

  assertExists(user.data.user);

  const tweets = await client.request<UserTweetsRes>({
    endpoint: UserTweets,
    variables: {
      userId: user.data.user!.result.rest_id,
      count: 10,
    },
  });

  assertExists(tweets.data.user.result.timeline.timeline.instructions.length);
});
