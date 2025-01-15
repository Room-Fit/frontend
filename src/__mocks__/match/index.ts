import { lookupDetailHandler } from "@/__mocks__/match/lookupDetail";
import { lookupListHandler } from "@/__mocks__/match/lookupList";
import { writeRecruitmentHandler } from "@/__mocks__/match/writeRecruiment";

export const matchHandlers = [
    ...lookupDetailHandler,
    ...lookupListHandler,
    ...writeRecruitmentHandler,
];
