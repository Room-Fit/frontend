import ExceptionHandler from "axios-exception-handler";

import { useFlow } from "@/apps/stackflow";

import { FormSchema, Option } from "@/entities/form/types";
import { PROFILE_QUERY_KEY_FACTORY } from "@/features/profile/service/keys";
import { api, queryClient } from "@/shared/lib";
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
    const { push } = useFlow();
    return useMutation({
        mutationFn: () => createSurveyResponse(body),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: PROFILE_QUERY_KEY_FACTORY.READ_RECENT_SURVEY(),
            });
            push("MatchListPage", {});
        },
    });
};
