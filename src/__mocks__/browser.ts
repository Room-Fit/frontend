import { signInHandlers } from "@/__mocks__/auth/signIn";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(...signInHandlers);
