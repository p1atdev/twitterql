import { TwitterQLClient } from "../../mod.ts";
import { CommunityTweetsTimeline } from "../../src/param/mod.ts";
import {
  CommunityTweetsTimelineParam,
  CommunityTweetsTimelineRes,
} from "../../src/types/mod.ts";
import { assertEquals, assertExists } from "../../deps.ts";

Deno.test("get community timeline", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  const variables: CommunityTweetsTimelineParam = {
    count: 20,
    communityId: "1496620213709672448",
    withCommunity: true,
  };

  const res = await client.request<CommunityTweetsTimelineRes>({
    endpoint: CommunityTweetsTimeline,
    variables: variables,
  });

  assertExists(res.data.community);
  assertEquals(
    res.data.community.community_timeline.timeline.instructions.length,
    20,
  );
});
