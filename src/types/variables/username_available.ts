import { Variables } from "../endpoint.ts";

export interface UserNameAvailableParam extends Variables {
  full_name?: string;
  suggest?: boolean;
  username: string;
}

export const initialUserNameAvailableParam: Variables = {
  suggest: true,
};
