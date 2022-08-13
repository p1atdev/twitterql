# TwitterQL

The unofficial twitter graphql api sdk.

# Notice

This module is now deprecated. This is because the module was incorrectly designed and was unable to keep up with changes in the API specification.
**Please use [Whisper](https://github.com/p1atdev/whisper) instead.**

---

# Example

```ts
// ./main.ts

import {
  TwitterQLClient,
  UserByScreenName,
  UserByScreenNameParam,
  UserByScreenNameRes,
  UserTweets,
  //   UserTweetsParam,
  UserTweetsRes,
} from "https://deno.land/x/twitterql@0.2.0/src/twitter/mod.ts";

const client = new TwitterQLClient();

await client.setup();

const variables: UserByScreenNameParam = {
  screen_name: "twitter",
};

const user = await client.request<UserByScreenNameRes>({
  endpoint: UserByScreenName,
  variables: variables,
});

console.dir(user, { depth: 10 });

const tweets = await client.request<UserTweetsRes>({
  endpoint: UserTweets,
  variables: {
    userId: user.data.user!.result.rest_id,
    count: 10,
  },
});

console.dir(tweets, { depth: 10 });
```

```bash
deno run --allow-net --unstable ./main.ts
```

Results:

```bash
{
  data: {
    user: {
      result: {
        __typename: "User",
        id: "VXNlcjo3ODMyMTQ=",
        rest_id: "783214",
        affiliates_highlighted_label: {},
        has_nft_avatar: false,
        legacy: {
          created_at: "Tue Feb 20 14:35:54 +0000 2007",
          default_profile: false,
          default_profile_image: false,
          description: "What's happening?!",
          entities: [Object],
          fast_followers_count: 0,
          favourites_count: 6263,
          followers_count: 61157937,
          friends_count: 1,
          has_custom_timelines: true,
          is_translator: false,
          listed_count: 87709,
          location: "everywhere",
          media_count: 2441,
          name: "Twitter",
          normal_followers_count: 61157937,
          pinned_tweet_ids_str: [Array],
          profile_banner_extensions: [Object],
          profile_banner_url: "https://pbs.twimg.com/profile_banners/783214/1646075315",
          profile_image_extensions: [Object],
          profile_image_url_https: "https://pbs.twimg.com/profile_images/1488548719062654976/u6qfBBkF_normal.jpg",
          profile_interstitial_type: "",
          protected: false,
          screen_name: "Twitter",
          statuses_count: 15007,
          translator_type: "regular",
          url: "https://t.co/DAtOo6uuHk",
          verified: true,
          withheld_in_countries: [Array]
        },
        super_follow_eligible: false,
        super_followed_by: false,
        super_following: false,
        legacy_extended_profile: { birthdate: [Object] },
        is_profile_translatable: false
      }
    }
  }
}
{
  data: { user: { result: { __typename: "User", timeline: { timeline: [Object] } } } }
}
```

# TODO

More convenient way to use the client.
