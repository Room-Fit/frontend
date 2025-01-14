import { lookupDetailHandler } from "@/__mocks__/match/lookupDetail";
import { lookupListHandler } from "@/__mocks__/match/lookupList";

export const matchHandlers = [...lookupDetailHandler, ...lookupListHandler];
