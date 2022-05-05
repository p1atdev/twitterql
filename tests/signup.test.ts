import {
  OnboardingBeginVerification,
  OnboardingParam,
  OnboardingRes,
  OnboardingTaskSignUp,
  TwitterQLClient,
} from "../mod.ts";
import { assertEquals } from "../deps.ts";

Deno.test("Begin verification of sign up", async () => {
  const client = new TwitterQLClient();

  await client.setup();

  const taskParam: OnboardingParam.TaskSignUpParam = {
    input_flow_data: {
      flow_context: {
        debug_overrides: {},
        start_location: {
          location: "splash_screen",
        },
      },
      requested_variant: '{"signup_type":"phone_email"}',
    },
    subtask_versions: {
      contacts_live_sync_permission_prompt: 0,
      cta: 4,
      email_verification: 1,
      topics_selector: 1,
      wait_spinner: 1,
    },
  };

  const task = await client.request<OnboardingRes.TaskSignUpRes>({
    endpoint: OnboardingTaskSignUp,
    variables: taskParam,
  });

  // console.log(task);

  const verificationParam: OnboardingParam.BeginVerificationParam = {
    email: "howeh46245@xasems.com",
    display_name: "sixajol160",
    flow_token: task.flow_token,
  };

  // console.log(task.flow_token);
  // console.log(verificationParam);

  const verification = await client.request<OnboardingRes.BeginVerificationRes>(
    {
      endpoint: OnboardingBeginVerification,
      variables: verificationParam,
    },
  );

  console.log(verification);
});
