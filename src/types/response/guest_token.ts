import { TQLResponse } from "./base.ts";

export interface GuestTokenRes extends TQLResponse {
  guest_token: string;
}
