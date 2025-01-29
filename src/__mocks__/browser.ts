import { matchHandlers } from "@/__mocks__/match";
import { setupWorker } from "msw/browser";

const handlers = [...matchHandlers];

export const worker = setupWorker(...handlers);
