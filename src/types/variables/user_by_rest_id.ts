import { Variables } from "../endpoint.ts";

/**
 * The parameter that is needed to get the user's details by rest id
 */
export interface UserByRestIdParam extends Variables {
  userId: string; // "1132026168591441921"
  withSafetyModeUserFields?: boolean; // true
  withSuperFollowsUserFields?: boolean; // true
}

export const initialUserByRestIdParam: Variables = {
  withSafetyModeUserFields: true, // true
  withSuperFollowsUserFields: true, // true
};
