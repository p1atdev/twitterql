import { getUserNameAvailable } from "../src/twitter/mod.ts";

const userNameAvailable = await getUserNameAvailable({
  username: "SHUEISHA_PR",
});

console.dir(userNameAvailable, { depth: Number.MAX_SAFE_INTEGER });
