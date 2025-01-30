import ExceptionHandler from "axios-exception-handler";

import { FormSchema, Option } from "@/entities/form/types";
import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useMutation } from "@tanstack/react-query";

export type CreateSurveyRequestBody = {
    questionReplies: {
        questionId: number;
        replies: Option[];
    }[];
};

export type CreateSurveyResponseBody = {
    id: number;
    title: string;
    description: string;
    questions: {
        id: number;
        title: string;
        type: string;
        optionDelimiter: string | null;
        options: Option[];
    }[];
};

export async function createSurveyResponse(formSchema: FormSchema) {
    const questionReplies = formSchema.questions.map((question) => {
        return { questionId: question.id, replies: question.options };
    });

    const body: CreateSurveyRequestBody = { questionReplies };

    try {
        const { data: response } = await api.post<BaseResponse<CreateSurveyResponseBody>>(
            "/api/v1/survey/reply",
            body,
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(500, "서버 오류가 발생했습니다.")
            .addDefaultCase("설문조사 응답 생성에 실패했습니다.")
            .handle();
    }
}

export const useCreateSurveyResponse = (body: FormSchema) => {
    return useMutation({
        mutationFn: () => createSurveyResponse(body),
        onSuccess: () => {
            // TODO: 요청 성공시 query invalidation
        },
    });
};
