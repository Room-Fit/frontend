import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { useQuery } from "@tanstack/react-query";

export type LookUpResponse = {
    id: number;
    title: string;
    description: string;
    dormitory: string;
    currentQuota: number;
    maxQuota: number;
};

const fetchMatchList = async () => {
    try {
        const response = await api.get<LookUpResponse[]>("/api/v1/chat");
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 핏글입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
        throw err;
    }
};

export const useMatchList = () => {
    return useQuery({
        queryKey: ["matchList"],
        queryFn: fetchMatchList,
    });
};
