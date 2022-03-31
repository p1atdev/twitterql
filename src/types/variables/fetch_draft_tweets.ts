import { Variables } from "../endpoint.ts";

export interface FetchDraftTweetsParam extends Variables {
  ascending: boolean; // true
}

export const initialFetchDraftTweetsParam: Variables = {};
