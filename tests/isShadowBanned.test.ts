import {
  getGuestToken,
  getQueryIds,
  getSearchTypehead,
  getTweetDetail,
  getUserByScreenName,
  getUserTweetsAndReplies,
} from "../src/twitter/mod.ts";
import { assertExists, assertNotEquals } from "../deps.ts";

Deno.test("shadow ban checker", async () => {
  const guestToken = await getGuestToken();
  const queries = await getQueryIds();

  const targetUserName = "discord";
  // @ojitan_55 is suggestion banned

  console.log(`@${targetUserName} is shadow banned?`);

  const targetUser = await getUserByScreenName(
    {
      screen_name: targetUserName,
    },
    guestToken,
    queries,
  );

  if (targetUser.data.user) {
    console.log("[1] User exists");
  } else {
    throw console.error("[!?] User does not exist");
  }

  const restId = targetUser.data.user!.result.rest_id;

  const searchResults = await getSearchTypehead(
    {
      q: `@${targetUserName}`,
      result_type: "users",
    },
    guestToken,
  );

  assertExists(searchResults.users);

  if (searchResults.users.length == 0) {
    console.log("[2] User is not in search results");
    console.log("[*] User is suggestion-banned 😢");
  } else {
    console.log("[2] User is in search results");
    console.log("[*] User is not suggestion-banned 😄");
  }

  try {
    const tweetsAndReplies = await getUserTweetsAndReplies(
      {
        userId: restId,
        count: 50000,
      },
      guestToken,
      queries,
    );

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

    if (!targetReplyTweet) {
      console.log("[3] User has no reply");
      throw "[*] Could not determine if user is reply banned";
    }

    const replyTreeInstruction = await (async () => {
      for (let i = 0; i < 10; i++) {
        try {
          const targetReplyTweetSource = replySourceTweetIds[i];

          if (!targetReplyTweetSource.tweet) {
            continue;
          }

          const tweetDetail = await getTweetDetail(
            {
              focalTweetId: targetReplyTweetSource.tweet,
            },
            guestToken,
            queries,
          );

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

    if (!replyTreeInstruction) {
      console.log("[3] User has no reply");
      throw "[*] Could not determine if user is reply banned";
    }

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
  } catch (error) {
    console.log(error);
  }
});
