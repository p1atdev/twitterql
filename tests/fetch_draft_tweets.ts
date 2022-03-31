import { fetchDraftTweets } from "../src/twitter/mod.ts";

const oauthToken = "4d0801b2a48618104d27c58de68e6adff1c49764";

const tweets = await fetchDraftTweets(
  {
    ascending: true,
  },
  oauthToken,
);

console.dir(tweets, { depth: 10 });
