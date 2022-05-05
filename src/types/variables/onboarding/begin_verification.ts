import { Variables } from "../../endpoint.ts";

export interface BeginVerificationParam extends Variables {
  email: string;
  display_name: string;
  flow_token: string;
}

export const initialBeginVerificationParam: Variables = {};
