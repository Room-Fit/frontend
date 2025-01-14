// import { authHandlers } from "@/__mocks__/auth";
import { matchHandlers } from "@/__mocks__/match";
import { setupWorker } from "msw/browser";

// const handlers = [...authHandlers];
const handlers = [...matchHandlers];

export const worker = setupWorker(...handlers);
