import { MATCH_QUERY_KEY_FACTORY } from "@/features/match/service/keys";
import { matchService } from "@/features/match/service/service";
import { useQuery } from "@tanstack/react-query";

export const useMatchDetailById = (id: number) => {
    return useQuery({
        queryKey: MATCH_QUERY_KEY_FACTORY.READ_MATCH_DETAIL_BY_ID(id),
        queryFn: () => matchService.readMatchDetailById(id),
    });
};
