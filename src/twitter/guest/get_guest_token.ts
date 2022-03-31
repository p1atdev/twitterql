import { TQLRequest } from "../../utils/wrapper.ts";
import { GuestToken } from "../../param/mod.ts";
import { GuestTokenRes } from "../../types/response/guest_token.ts";

export const getGuestToken = async () => {
  // console.log("[*] Fetching guest token")
  try {
    const res = await TQLRequest(GuestToken);

    const response: GuestTokenRes = await res.json();

    return response.guest_token;
  } catch {
    throw Error("Failed to get guest token.");
  }
};
