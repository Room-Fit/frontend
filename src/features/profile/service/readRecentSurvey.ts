import ExceptionHandler from "axios-exception-handler";

import { FormSchema } from "@/entities/form/types";
import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";

export type ReadRecentSurveyResponseBody = FormSchema;

export async function readRecentSurvey() {
    try {
        const { data: response } =
            await api.get<BaseResponse<ReadRecentSurveyResponseBody>>("/api/v1/survey");
        return response.data;
    } catch (err) {
        ExceptionHandler(err).handle();
    }
}
