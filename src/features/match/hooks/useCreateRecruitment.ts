import { useFlow } from "@/apps/stackflow";

import { MATCH_QUERY_KEY_FACTORY } from "@/features/match/service";
import {
    createRecruitmentPost,
    RecruitmentPost,
} from "@/features/match/service/createRecruitmentPost";
import { queryClient } from "@/shared/lib";
import { useMutation } from "@tanstack/react-query";

export const useCreateRecruitment = () => {
    const { push } = useFlow();

    const mutation = useMutation({
        mutationFn: createRecruitmentPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: MATCH_QUERY_KEY_FACTORY.READ_ALL_MATCH });
            push("MatchListPage", {});
        },
    });
    const handleSubmit = async (formData: RecruitmentPost) => {
        mutation.mutate(formData);
    };
    return { handleSubmit };
};
