import { getTweetDetail } from "../src/twitter/mod.ts";

const tweetDetail = await getTweetDetail({
  focalTweetId: "1492073151857295360",
});

console.dir(tweetDetail, { depth: 10 });
