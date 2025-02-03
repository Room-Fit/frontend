import { createSurveyResponse } from "@/features/profile/service/createSurveyResponse";
import { readRecentSurvey } from "@/features/profile/service/readRecentSurvey";
import { readSurveyReplyById } from "@/features/profile/service/readSurveyReplyById";

export const profileService = {
    readSurveyReplyById,
    readRecentSurvey,
    createSurveyResponse,
};
