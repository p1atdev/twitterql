import { getSearchTypehead } from "../src/twitter/mod.ts";

const results = await getSearchTypehead({
  q: "@twitter",
  result_type: "users",
});

console.dir(results, { depth: 10 });

const shadowBanned = await getSearchTypehead({
  q: "@ojitan_55",
  result_type: "users",
});

console.dir(shadowBanned, { depth: 10 });
