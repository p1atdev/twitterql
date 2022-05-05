import { getTweetDetail } from "../src/twitter/mod.ts";
import { assertEquals, assertExists } from "../deps.ts";

Deno.test("get a tweet", async () => {
  const tweetDetail = await getTweetDetail({
    focalTweetId: "20",
  });

  const instructions = tweetDetail.data
    ?.threaded_conversation_with_injections_v2?.instructions;

  assertExists(
    instructions,
  );

  const entry = instructions.find((instruction) => {
    return instruction.entries?.some((entry) => {
      return entry.content.entryType === "TimelineTimelineItem";
    });
  });

  assertExists(entry);

  const results = entry.entries![0].content.itemContent!.tweet_results;

  assertExists(results);

  assertEquals(
    results.result.legacy.full_text,
    "just setting up my twttr",
  );
});
