import ExceptionHandler from "axios-exception-handler";

import { replyElementMap } from "@/entities/profile/ui/DynamicReply/DynamicReply";
import { PROFILE_QUERY_KEY_FACTORY } from "@/features/profile/service/keys";
import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useQuery } from "@tanstack/react-query";

export type QuestionReply = {
    id: number;
    title: string;
    type: keyof typeof replyElementMap;
    optionDelimiter: string | null;
    options: Array<{ id: number; label: string; value: string }>;
};

export type ReadSurveyReplyByIdResponseBody = {
    id: number;
    title: string;
    description: string;
    questions: Array<QuestionReply>;
};

export async function readSurveyReplyById(userId: number) {
    try {
        const { data: response } = await api.get<BaseResponse<ReadSurveyReplyByIdResponseBody>>(
            "/api/v1/survey/reply",
            { params: { user_id: userId } },
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 프로필입니다")
            .addCase(500, "서버 오류가 발생했습니다")
            .handle();
    }
}

export function useSurveyReplyById(userId: number) {
    const query = useQuery({
        queryKey: PROFILE_QUERY_KEY_FACTORY.READ_SURVEY_REPLY_BY_ID(userId),
        queryFn: () => readSurveyReplyById(userId),
    });
    return { ...query };
}
