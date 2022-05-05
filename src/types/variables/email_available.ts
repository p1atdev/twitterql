import { Variables } from "../endpoint.ts";

export interface EmailAvailableParam extends Variables {
  email: string;
}

export const initialEmailAvailableParam: Variables = {};
