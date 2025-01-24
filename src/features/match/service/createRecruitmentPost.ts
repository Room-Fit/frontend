import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";

export type RecruitmentPost = {
    name: string;
    description: string;
    type: "PRIVATE" | "GROUP";
    dormitory:
        | "봉사관"
        | "화목관"
        | "향토관"
        | "첨성관"
        | "명의관"
        | "누리관"
        | "보람관"
        | "선의관"
        | "경애관(상주)"
        | "근면관(상주)"
        | "청운관(상주)"
        | "노악관(상주)";
    maxQuota: number;
};

export const MAX_RECRUITEMENT_NUMBER = 6;

export const createRecruitmentPost = async ({
    name,
    type,
    description,
    dormitory,
    maxQuota,
}: RecruitmentPost) => {
    try {
        const { data: response } = await api.post<BaseResponse<RecruitmentPost>>("/api/v1/room", {
            type,
            name,
            dormitory,
            description,
            maxQuota,
        });
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(400, "잘못된 요청입니다.")
            .addCase(401, "로그인이 필요한 서비스입니다.")
            .addCase(403, "글쓰기 권한이 없습니다.")
            .addCase(404, "존재하지 않는 페이지입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .addDefaultCase("알 수 없는 오류가 발생하였습니다.")
            .handle();
    }
};
