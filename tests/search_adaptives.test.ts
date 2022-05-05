import { getSearchAdaptive } from "../src/twitter/mod.ts";
import { assertNotEquals } from "../deps.ts";

Deno.test("search adaptive", async () => {
  const result = await getSearchAdaptive({
    q: "from:@twitter",
    count: 1,
  });

  assertNotEquals(result.timeline.instructions.length, 0);
});
