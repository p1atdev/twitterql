import { getUserByScreenName, getUserTweets } from "../src/twitter/mod.ts";

const userByScreenName = await getUserByScreenName({
  screen_name: "discord",
});

console.log(userByScreenName);

if (!userByScreenName.data.user) {
  throw console.error("User does not exist");
}

const tweets = await getUserTweets({
  userId: userByScreenName.data.user.result.rest_id,
  count: 500,
});

console.dir(tweets, { depth: 10 });

const instructions = tweets.data.user.result.timeline.timeline.instructions;
console.dir(instructions, { depth: 10 });

console.dir(
  instructions[1].entries[0].content.itemContent.tweet_results.result.core
    .user_results.result.legacy.description,
  {
    depth: 10,
  },
);
