import ExceptionHandler from "axios-exception-handler";

import { MATCH_QUERY_KEY_FACTORY } from "@/features/match/service/keys";
import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useQuery } from "@tanstack/react-query";

export type ReadMatchList = {
    id: number;
    name: string;
    description: string;
    dormitory: string;
    currentQuota: number;
    maxQuota: number;
    status: "RECRUITING" | "RECRUITMENT_COMPLETE" | "MATCH_COMPLETE";
};

const readAllMatch = async () => {
    try {
        const { data: response } = await api.get<BaseResponse<ReadMatchList[]>>("/api/v1/room");
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 핏글입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
};

export const useMatchList = () => {
    return useQuery({
        queryKey: [MATCH_QUERY_KEY_FACTORY.READ_ALL_MATCH],
        queryFn: readAllMatch,
    });
};
