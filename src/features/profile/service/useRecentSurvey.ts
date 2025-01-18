import { profileService } from "@/features/profile/service";
import { PROFILE_QUERY_KEY_FACTORY } from "@/features/profile/service/keys";
import { useQuery } from "@tanstack/react-query";

export const useRecentSurvey = () => {
    const query = useQuery({
        queryKey: PROFILE_QUERY_KEY_FACTORY.READ_RECENT_SURVEY(),
        queryFn: () => profileService.readRecentSurvey(),
    });

    return { ...query };
};
