// import { JSONStream } from "../src/utils/json.ts";
// import { TQLRequest } from "../src/utils/wrapper.ts";
// import { Query } from "../src/types/mod.ts";

// import { UserTweetsAndReplies } from "../src/param/mod.ts";
// import { UserTweetsAndRepliesParam } from "../src/types/variables/user_tweets_and_replies.ts";
// import { UserTweetsAndRepliesRes } from "../src/types/response/user_tweets_and_replies.ts";

// import { getUserByScreenName } from "../src/twitter/user/get_user_by_screen_name.ts";

// const getUserTweetsAndReplies = async (
//   variables: UserTweetsAndRepliesParam,
//   guestToken?: string,
//   queries?: Query[],
// ) => {
//   const res = await TQLRequest(
//     UserTweetsAndReplies,
//     {
//       includePromotedContent: true,
//       withCommunity: true,
//       withSuperFollowsUserFields: true,
//       withDownvotePerspective: false,
//       withReactionsMetadata: false,
//       withReactionsPerspective: false,
//       withSuperFollowsTweetFields: true,
//       withVoice: true,
//       withV2Timeline: false,
//       __fs_interactive_text: false,
//       __fs_responsive_web_uc_gql_enabled: false,
//       __fs_dont_mention_me_view_api_enabled: false,
//       ...variables,
//     },
//     queries,
//     undefined,
//     guestToken,
//   );

//   // console.log(await res.json())
//   // console.log(res.body?.getReader())

//   // if (res.body) {
//   //     const stream = new JSONStream(res.body)

//   //     stream.once("object", (object: any) => {
//   //         // do something with each object
//   //         console.dir(object, { depth: 20 })
//   //     })
//   // }

//   // const text = await res.text()
//   // const json: UserTweetsAndRepliesRes = JSON.parse(text)

//   // console.log(json)

//   console.log(await res.json());
// };

// Deno.test("json stream", async () => {
//   const user = await getUserByScreenName({ screen_name: "discord" });

//   // console.log(user.data.user)

//   await getUserTweetsAndReplies({
//     userId: user.data.user!.result.rest_id,
//     count: 50000,
//   });

//   // const res = await fetch("https://jsonplaceholder.typicode.com/photos")
//   // const text = await res.text()
//   // // if (res.body) {
//   // //     const stream = new JSONStream(res.body)

//   // //     stream.once("object", (object: any) => {
//   // //         // do something with each object
//   // //         console.dir(object, { depth: 20 })
//   // //     })
//   // // }
//   // console.log(text)
// });
