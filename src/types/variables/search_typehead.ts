import { Variables } from "../endpoint.ts";

export interface SearchTypeheadParam extends Variables {
  /**
   * Search word
   */
  q: string;

  /**
   * default: search_box
   */
  src?: string;

  /**
   * default: [Events, Users, Topics]
   */
  result_type?: string;
}

export enum SearchTypeheadResultType {
  Events = "events",
  Users = "users",
  Topics = "topics",
  Hashtags = "hashtags",
  Lists = "lists",
}

export function SetResultType(types: SearchTypeheadResultType[]): string {
  return types.map((type) => type.toString()).join(",");
}

export const initialSearchTypeheadParam: Variables = {
  src: "search_box",
  result_type: SetResultType([
    SearchTypeheadResultType.Events,
    SearchTypeheadResultType.Users,
    SearchTypeheadResultType.Topics,
  ]),
};
