# TwitterQL

The unofficial twitter graphql api sdk.

# Example

```ts
import { getUserTweets, getUserByScreenName } from "https://deno.land/x/twitterql@0.0.2/src/twitter/mod.ts"

const userByScreenName = await getUserByScreenName({
    screen_name: "twitter",
})

console.log(userByScreenName)

const tweets = await getUserTweets({
    userId: userByScreenName.data.user.result.rest_id,
    count: 100,
})

console.dir(tweets, { depth: 10 })
```

Results:

```bash
# userByScreenName
{
  data: {
    user: {
      result: {
        __typename: "User",
        id: "VXNlcjoxMDUyNDc2NTMyMjkwMDIzNDI1",
        rest_id: "1052476532290023425",
        affiliates_highlighted_label: [Object],
        has_nft_avatar: false,
        legacy: [Object],
        super_follow_eligible: false,
        super_followed_by: false,
        super_following: false,
        legacy_extended_profile: [Object],
        is_profile_translatable: false
      }
    }
  }
}

# tweets
{
  data: {
    user: {
      result: {
        __typename: "User",
        timeline: {
          timeline: {
            instructions: [
              {
                type: "TimelineAddEntries",
                entries: [
                  {
                    entryId: "tweet-1492131691665956869",
                    sortIndex: "1492131691665956869",
                    content: [Object]
                  },
                  ...
                ]
              }
            ]
          },
        },
        responseObjects: {
            feedbackActions: [
            {
                key: "1958064354",
                value: {
                feedbackType: "RichBehavior",
                feedbackUrl: "/2/timeline/feedback.json?feedback_type=RichBehavior&action_metadata=FcQBOQwA",
                encodedFeedbackRequest: "LBUeHBXEATkMAAAA",
                hasUndoAction: true,
                richBehavior: [Object]
                }
            },
            ...
```

# TODO
 