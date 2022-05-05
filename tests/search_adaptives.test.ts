import { TwitterQLClient } from "../mod.ts";
import { SearchAdaptive } from "../src/param/mod.ts";
import { SearchAdaptiveParam, SearchAdaptiveRes } from "../src/types/mod.ts";
import { assertNotEquals } from "../deps.ts";

Deno.test("search adaptive", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  const param: SearchAdaptiveParam = {
    q: "from:@twitter",
    count: 1,
  };

  const result = await client.request<SearchAdaptiveRes>({
    endpoint: SearchAdaptive,
    variables: param,
  });

  assertNotEquals(result.timeline.instructions.length, 0);
});
