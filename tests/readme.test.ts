import {
  TwitterQLClient,
  UserByScreenName,
  UserByScreenNameParam,
  UserByScreenNameRes,
  UserTweets,
  //   UserTweetsParam,
  UserTweetsRes,
} from "../mod.ts";

const client = new TwitterQLClient();

await client.setup();

const variables: UserByScreenNameParam = {
  screen_name: "twitter",
};

const user = await client.request<UserByScreenNameRes>({
  endpoint: UserByScreenName,
  variables: variables,
});

console.dir(user, { depth: 5 });

const tweets = await client.request<UserTweetsRes>({
  endpoint: UserTweets,
  variables: {
    userId: user.data.user!.result.rest_id,
    count: 10,
  },
});

console.dir(tweets, { depth: 5 });
