import { lookupListHandler } from "@/__mocks__/match/lookupList";
import { writeRecruitmentHandler } from "@/__mocks__/match/writeRecruiment";

export const matchHandlers = [...lookupListHandler, ...writeRecruitmentHandler];
