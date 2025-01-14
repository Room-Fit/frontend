import ExceptionHandler from "axios-exception-handler";

import { MATCH_QUERY_KEY_FACTORY } from "@/features/match/service/keys";
import { api } from "@/shared/lib";
import { useQuery } from "@tanstack/react-query";

export type LookUpDetailResponse = {
    id: number;
    title: string;
    dormitory: string;
    currentQuota: number;
    maxQuota: number;
    createdAt: string;
    author: {
        id: number;
        nickname: string;
    };
    participants: Array<{
        id: number;
        nickname: string;
    }>;
};

const fetchMatchDetail = async (id: number) => {
    try {
        const response = await api.get<LookUpDetailResponse>(`/api/v1/chat/${id}/participants`);
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 핏글입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
};

export const useMatchDetail = (id: number) => {
    const { data } = useQuery({
        queryKey: MATCH_QUERY_KEY_FACTORY.READ_MATCH_DETAIL_BY_ID(id),
        queryFn: () => fetchMatchDetail(id),
        enabled: !!id,
    });

    return {
        data,
    };
};
