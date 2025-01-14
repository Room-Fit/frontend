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
    const response = await api.get<LookUpDetailResponse>(`/api/v1/chat/${id}/participants`);
    return response.data;
};

export const useMatchDetail = (id: number) => {
    const { data } = useQuery<LookUpDetailResponse>({
        queryKey: MATCH_QUERY_KEY_FACTORY.READ_MATCH_DETAIL_BY_ID(id),
        queryFn: () => fetchMatchDetail(id),
        enabled: !!id,
    });

    return {
        data,
    };
};
