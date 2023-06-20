import { handleErrorWithSentry, Replay } from "@sentry/sveltekit";
import * as Sentry from "@sentry/sveltekit";

Sentry.init({
  // sentry.io sveltekit-proper-project
  dsn: "https://d390559ff0764c43b0939b2b51769e8a@o447951.ingest.sentry.io/4505149331472384",

  // local sveltekit
  // dsn: "http://fa1a3f16b9b445c78ce602537f426c34@dev.getsentry.net:8000/4505392340598784",
  // dsn: "http://5a1a130c141647c08b21ec9cba463153@127.0.0.1:8000/8",
  tracesSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // If the entire session is not sampled, use the below sample rate to sample
  // sessions when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // If you don't want to use Session Replay, just remove the line below:
  integrations: [new Replay()],

  debug: true,
});

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
