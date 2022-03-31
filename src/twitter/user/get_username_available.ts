import { TQLRequest } from "../../utils/wrapper.ts";
import { UserNameAvailable } from "../../param/mod.ts";
import { UserNameAvailableRes } from "../../types/response/username_available.ts";
import { UserNameAvailableParam } from "../../types/variables/username_available.ts";

export const getUserNameAvailable = async (query: UserNameAvailableParam) => {
  try {
    const res = await TQLRequest(UserNameAvailable, {
      full_name: query.username,
      suggest: true,
      ...query,
    });

    const response: UserNameAvailableRes = await res.json();

    return response;
  } catch {
    throw Error("Failed to get UserNameAvailable.");
  }
};
