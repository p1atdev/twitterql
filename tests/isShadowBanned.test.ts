import { TwitterQLClient } from "../mod.ts";
import {
  SearchTypehead,
  TweetDetail,
  UserByScreenName,
  UserTweetsAndReplies,
} from "../src/param/mod.ts";
import {
  SearchTypeheadRes,
  TweetDetailRes,
  UserByScreenNameRes,
  UserTweetsAndRepliesRes,
} from "../src/types/mod.ts";
import { assertExists, assertNotEquals } from "../deps.ts";

Deno.test("shadow ban checker", async () => {
  const client = new TwitterQLClient();
  await client.setup();

  const targetUserName = "discord";

  console.log(`@${targetUserName} is shadow banned?`);

  const targetUser = await client.request<UserByScreenNameRes>({
    endpoint: UserByScreenName,
    variables: {
      screen_name: targetUserName,
    },
  });

  assertExists(targetUser.data.user);

  const restId = targetUser.data.user.result.rest_id;

  assertExists(restId);

  const searchResults = await client.request<SearchTypeheadRes>({
    endpoint: SearchTypehead,
    variables: {
      q: `@${targetUserName}`,
      result_type: "users",
    },
  });

  assertExists(searchResults.users);

  assertNotEquals(searchResults.users.length, 0);

  const tweetsAndReplies = await client.request<UserTweetsAndRepliesRes>({
    endpoint: UserTweetsAndReplies,
    variables: {
      userId: restId,
      count: 50000,
    },
  });

  assertExists(tweetsAndReplies.data.user.result);

  const replies = tweetsAndReplies.data.user.result.timeline.timeline
    .instructions
    .flatMap((instruction) => {
      return instruction.entries;
    })
    .filter((entry) => {
      return entry?.content.itemContent?.tweetDisplayType === "Tweet";
    })
    .map((tweet) => {
      return tweet?.content.itemContent?.tweet_results;
    })
    .map((tweetResult) => {
      if (tweetResult?.result.legacy.in_reply_to_screen_name) {
        return tweetResult;
      }
    });

  const replySourceTweetIds = replies
    .map((reply) => {
      return {
        user: reply?.result.legacy.in_reply_to_screen_name,
        tweet: reply?.result.legacy.in_reply_to_status_id_str,
      };
    })
    .filter((reply) => {
      return reply?.user && reply?.tweet;
    });

  const targetReplyTweet = replies.find((reply) => {
    return reply ? true : false;
  })?.result.legacy.id_str;

  assertExists(targetReplyTweet);

  const replyTreeInstruction = await (async () => {
    for (let i = 0; i < 10; i++) {
      try {
        const targetReplyTweetSource = replySourceTweetIds[i];

        if (!targetReplyTweetSource.tweet) {
          continue;
        }

        const tweetDetail = await client.request<TweetDetailRes>({
          endpoint: TweetDetail,
          variables: {
            focalTweetId: targetReplyTweetSource.tweet,
          },
        });

        const replyTreeInstruction = tweetDetail.data
          ?.threaded_conversation_with_injections_v2?.instructions;

        if (!replyTreeInstruction) {
          continue;
        }

        return replyTreeInstruction;
      } catch (error) {
        console.log(error);
        continue;
      }
    }
    return null;
  })();

  assertExists(replyTreeInstruction);

  const filteredReplyTree = replyTreeInstruction
    .flatMap((instruction) => {
      return instruction.entries;
    })
    .flatMap((entry) => {
      return entry?.content.items?.map((item) => {
        return item.item.itemContent.tweet_results?.result.legacy;
      });
    })
    .filter((reply) => {
      return reply?.id_str === targetReplyTweet;
    });

  // @twitter is not banned
  assertNotEquals(filteredReplyTree.length, 0);

  if (filteredReplyTree.length === 0) {
    const cursors = replyTreeInstruction
      .flatMap((instruction) => {
        return instruction.entries;
      })
      .flatMap((entry) => {
        return entry?.content.items?.filter((item) => {
          return item.item.itemContent.itemType === "TimelineTimelineCursor";
        });
      });
    if (cursors.length === 0) {
      // ghost banned
      console.log("[*] User is ghost banned 😢");
    } else {
      // maybe reply deboosting
      console.log("[*] User is reply deboosting 😢");
    }
  } else {
    // not banned

    console.log("[*] User is not any reply banned 😄");
  }
});
