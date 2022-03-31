import { TQLResponse } from "./base.ts";

export interface UserNameAvailableRes extends TQLResponse {
  valid: boolean;
  reason: string;
  msg: string;
  desc?: string;
  suggestions: Suggestion[];
}

export interface Suggestion {
  suggestion: string;
  sources: string[];
  technique: string;
}
