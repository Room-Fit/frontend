import ExceptionHandler from "axios-exception-handler";

import { MATCH_QUERY_KEY_FACTORY } from "@/features/match/service/keys";
import { ReadMatchList } from "@/features/match/service/readAllMatch";
import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useQuery } from "@tanstack/react-query";

export type ReadMatchById = {
    participants: Array<{
        id: number;
        nickname: string;
        college: string;
    }>;
} & ReadMatchList;

const readMatchDetail = async (id: number) => {
    try {
        const { data: response } = await api.get<BaseResponse<ReadMatchById>>(
            `/api/v1/room/${id}/participants`,
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 핏글입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
};

export const useMatchDetail = (id: number) => {
    const { data: response } = useQuery({
        queryKey: MATCH_QUERY_KEY_FACTORY.READ_MATCH_DETAIL_BY_ID(id),
        queryFn: () => readMatchDetail(id),
        enabled: !!id,
    });

    return {
        data: response,
        participants: response?.participants,
    };
};
