import { Variables } from "../endpoint.ts";

export interface UsersVerifiedAvatarsParam extends Variables {
  userIds: string[];
}

export const initialUsersVerifiedAvatarsParam: Variables = {};
