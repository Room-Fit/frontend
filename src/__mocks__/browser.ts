import { authHandlers } from "@/__mocks__/auth";
import { setupWorker } from "msw/browser";

const handlers = [...authHandlers];

export const worker = setupWorker(...handlers);
