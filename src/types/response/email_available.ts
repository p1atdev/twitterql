import { TQLResponse } from "./base.ts";

export interface EmailAvailableRes extends TQLResponse {
  valid: boolean;
  msg: string;
  taken: boolean;
}
