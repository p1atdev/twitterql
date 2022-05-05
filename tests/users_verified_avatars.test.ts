import {
  getUserByScreenName,
  getUsersVerifiedAvatars,
} from "../src/twitter/mod.ts";
import { assertEquals, assertExists } from "../deps.ts";

Deno.test("check if user has verified avatar", async () => {
  const user = await getUserByScreenName({
    screen_name: "TwitterBlue",
  });

  assertExists(user.data.user);

  const avatars = await getUsersVerifiedAvatars({
    userIds: [user.data.user.result.rest_id],
  });

  assertExists(avatars.data.usersResults[0]);

  assertEquals(avatars.data.usersResults[0].result.has_nft_avatar, true);
});
