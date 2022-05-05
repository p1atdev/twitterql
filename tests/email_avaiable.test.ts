import {
  EmailAvailable,
  // EmailAvailableParam,
  EmailAvailableRes,
  TwitterQLClient,
} from "../mod.ts";
import { assertEquals } from "../deps.ts";

Deno.test("Whether an email is taken", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  const res = await client.request<EmailAvailableRes>({
    endpoint: EmailAvailable,
    variables: {
      email: "twitter@example.com",
    },
  });

  assertEquals(res.valid, false);
  assertEquals(res.taken, true);
});
