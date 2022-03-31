import { getSearchAdaptive } from "../src/twitter/mod.ts";

const result = await getSearchAdaptive({
  q: "from:@RyogaooWW",
  count: 1,
});

console.dir(result, { depth: 20 });
