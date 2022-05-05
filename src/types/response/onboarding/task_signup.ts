import { TQLResponse } from "../base.ts";

export interface TaskSignUpRes extends TQLResponse {
  flow_token: string;
  status: string;
  subtasks: Subtask[];
}

export interface Subtask {
  subtask_id: string;
  callbacks: Callback[];
  open_link?: OpenLink;
  progress_indication?: ProgressIndication;
  sign_up?: SignUp;
  subtask_back_navigation?: string;
  settings_list?: SettingsList;
  sign_up_review?: SignUpReview;
  privacy_options?: PrivacyOptions;
  alert_dialog?: AlertDialog;
  menu_dialog?: MenuDialog;
  phone_verification?: PhoneVerification;
  email_verification?: EmailVerification;
  alert_dialog_suppress_client_events?: AlertDialogSuppressClientEvents;
}

export interface AlertDialog {
  next_link: Link;
  primary_text: Text;
  secondary_text: Text;
  cancel_link: Link;
}

export interface Link {
  link_type: LinkType;
  link_id: string;
  label?: string;
  subtask_navigation_context?: SubtaskNavigationContext;
  subtask_id?: string;
  url?: string;
  suppress_client_events?: boolean;
}

export enum LinkType {
  ChromelessWebLink = "chromeless_web_link",
  Subtask = "subtask",
  Task = "task",
}

export interface SubtaskNavigationContext {
  action: string;
}

export interface Text {
  text: string;
  entities: Entity[];
}

export interface Entity {
  from_index: number;
  to_index: number;
  subtask_data_reference?: SubtaskDataReference;
  navigation_link?: NavigationLink;
}

export interface NavigationLink {
  link_type: LinkType;
  link_id: string;
  subtask_id?: string;
  url?: string;
}

export interface SubtaskDataReference {
  key: string;
  subtask_id: SubtaskID;
}

export enum SubtaskID {
  Signup = "Signup",
}

export interface AlertDialogSuppressClientEvents {
  next_link: DismissLinkElement;
  primary_text: Text;
  dismiss_link: DismissLinkElement;
}

export interface DismissLinkElement {
  link_type: LinkType;
  link_id: string;
  subtask_navigation_context: SubtaskNavigationContext;
  is_destructive?: boolean;
  suppress_client_events?: boolean;
  subtask_id: string;
  label?: string;
}

export interface Callback {
  trigger: Trigger;
  endpoint?: string;
  scribe_config?: ScribeConfig;
}

export interface ScribeConfig {
  page: Page;
  section: Section;
  component: string;
  action: Trigger;
  element?: string;
}

export enum Trigger {
  Impression = "impression",
}

export enum Page {
  Onboarding = "onboarding",
}

export enum Section {
  Signup = "signup",
}

export interface EmailVerification {
  primary_text: Text;
  secondary_text: Text;
  detail_text: Text;
  hint_text: string;
  email: Email;
  name: Email;
  next_link: Link;
  fail_link: Link;
  cancel_link: Link;
  verification_status_polling_enabled: boolean;
}

export interface Email {
  subtask_data_reference: SubtaskDataReference;
}

export interface MenuDialog {
  primary_text: Text;
  primary_action_links: DismissLinkElement[];
  cancel_link: Link;
  dismiss_link: Link;
}

export interface OpenLink {
  link: Link;
  onboarding_callback_path: string;
}

export interface PhoneVerification {
  primary_text: Text;
  secondary_text: Text;
  detail_text: Text;
  hint_text: string;
  phone_number: Email;
  next_link: Link;
  fail_link: Link;
  cancel_link: Link;
  auto_verify_hint_text: string;
  send_via_voice: boolean;
}

export interface PrivacyOptions {
  primary_text: string;
  secondary_text: string;
  discoverable_by_email: boolean;
  discoverable_by_email_label: string;
  discoverable_by_email_detail_text: Text;
  discoverable_by_phone: boolean;
  discoverable_by_phone_label: string;
  discoverable_by_phone_detail_text: Text;
  next_link: Link;
}

export interface ProgressIndication {
  text: Text;
}

export interface SettingsList {
  next_link: Link;
  primary_text: Text;
  settings: Setting[];
  detail_text: Text;
}

export interface Setting {
  primary_text: Text;
  value_type: string;
  value_identifier?: string;
  value_data?: ValueData;
}

export interface ValueData {
  boolean_data: BooleanData;
}

export interface BooleanData {
  initial_value: boolean;
}

export interface SignUp {
  primary_text: string;
  name_hint: string;
  phone_hint: string;
  email_hint: string;
  phone_email_hint: string;
  birthday_hint: string;
  birthday_explanation: string;
  use_phone_text: string;
  use_email_text: string;
  next_link: Link;
  js_instrumentation: JSInstrumentation;
  ignore_birthday: boolean;
  use_device_prefill: boolean;
  email_next_link: Link;
  password_hint: string;
  birthday_type: string;
  allowed_identifiers: string;
}

export interface JSInstrumentation {
  url: string;
}

export interface SignUpReview {
  phone_next_link: Link;
  email_next_link: Link;
  name_edit_link: Link;
  phone_edit_link: Link;
  email_edit_link: Link;
  birthday_edit_link: Link;
  invalid_birthday_link: Link;
  name: Email;
  phone_number: Email;
  email: Email;
  birthday: Email;
  primary_text: string;
  birthday_requirement: BirthdayRequirement;
  detail_text: Text;
  birthday_type: string;
  ignore_birthday: boolean;
}

export interface BirthdayRequirement {
  day: number;
  month: number;
  year: number;
}
