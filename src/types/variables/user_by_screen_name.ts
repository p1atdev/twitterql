import { Variables } from "../endpoint.ts";

/**
 * The parameter that is needed to get the user's details by screen name
 */
export interface UserByScreenNameParam extends Variables {
  screen_name: string; // "revoltchat"
  withSafetyModeUserFields?: boolean; // true
  withSuperFollowsUserFields?: boolean; // true
}

export const initialUserByScreenNameParam: Variables = {
  withSafetyModeUserFields: true,
  withSuperFollowsUserFields: true,
};
