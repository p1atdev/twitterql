import { Variables } from "../../endpoint.ts";

export interface TaskSignUpParam extends Variables {
  input_flow_data: InputFlowData;
  subtask_versions: SubtaskVersions;
}

export interface InputFlowData {
  requested_variant: string;
  flow_context: FlowContext;
}

export interface FlowContext {
  debug_overrides: DebugOverrides;
  start_location: StartLocation;
}

export type DebugOverrides = Record<never, never>;

export interface StartLocation {
  location: string;
}

export interface SubtaskVersions {
  contacts_live_sync_permission_prompt: number;
  email_verification: number;
  topics_selector: number;
  wait_spinner: number;
  cta: number;
}
