import {
  TwitterQLClient,
  UserByRestId,
  UserByRestIdParam,
  UserByRestIdRes,
  UserByScreenName,
  UserByScreenNameParam,
  UserByScreenNameRes,
} from "../mod.ts";
import { assertEquals, assertExists } from "../deps.ts";

Deno.test("get user", async () => {
  const client = new TwitterQLClient();
  await client.setup();

  const userByScreenNameReq: UserByScreenNameParam = {
    screen_name: "twitter",
  };

  const userByScreenNameRes = await client.request<UserByScreenNameRes>({
    endpoint: UserByScreenName,
    variables: userByScreenNameReq,
  });

  const userByRestIdReq: UserByRestIdParam = {
    userId: userByScreenNameRes.data.user!.result.rest_id,
  };

  const userByRestIdRes = await client.request<UserByRestIdRes>({
    endpoint: UserByRestId,
    variables: userByRestIdReq,
  });

  assertExists(userByScreenNameRes.data.user);
  assertExists(userByRestIdRes.data.user);

  assertExists(userByScreenNameRes.data.user.result.rest_id);

  assertEquals(
    userByScreenNameRes.data.user.result.rest_id,
    userByRestIdRes.data.user.result.rest_id,
  );
});
