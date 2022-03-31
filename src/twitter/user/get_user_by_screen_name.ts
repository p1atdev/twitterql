import { TQLRequest } from "../../utils/wrapper.ts";
import { Query } from "../../types/mod.ts";

import { UserByScreenName } from "../../param/mod.ts";
import { UserByScreenNameParam } from "../../types/variables/user_by_screen_name.ts";
import { UserByScreenNameRes } from "../../types/response/user_by_screen_name.ts";

export const getUserByScreenName = async (
  variables: UserByScreenNameParam,
  guestToken?: string,
  queries?: Query[],
) => {
  const res = await TQLRequest(
    UserByScreenName,
    {
      withSafetyModeUserFields: true,
      withSuperFollowsUserFields: true,
      ...variables,
    },
    queries,
    undefined,
    guestToken,
  );
  // console.log(res)

  const response: UserByScreenNameRes = await res.json();
  return response;
};
