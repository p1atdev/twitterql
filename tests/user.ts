// import { Variables } from "../src/types/endpoint.ts"
// import { getGuestToken } from "../src/twitter/guest/get_guest_token.ts"
import {
  getGuestToken,
  getQueryIds,
  getUserByRestId,
  getUserByScreenName,
} from "../src/twitter/mod.ts";

const guestToken = await getGuestToken();
const queries = await getQueryIds();

const userByScreenName = await getUserByScreenName(
  {
    screen_name: "kuroda_osafune",
  },
  guestToken,
  queries,
);

const userByRestId = await getUserByRestId({
  userId: userByScreenName.data.user!.result.rest_id,
});

console.dir(userByScreenName, { depth: 40 });
console.dir(userByRestId, { depth: 40 });
console.log(userByScreenName.data.user!.result.rest_id);
