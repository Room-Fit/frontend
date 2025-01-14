import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { useFlow } from "@/apps/stackflow";

import { useMatchList } from "@/features/match/service/lookup";
import { MatchFilter } from "@/features/match/ui";
import { MatchListItem } from "@/features/match/ui/MatchListItem";

export enum MatchStatus {
    PENDING = "PENDING",
    MATCHING = "MATCHING",
    MATCHED = "MATCHED",
}

export default function MatchListPage() {
    const { push } = useFlow();
    const { data } = useMatchList();

    return (
        <BaseScreen>
            <NavTop>
                <MatchFilter />
            </NavTop>
            <div>
                {data?.map((data) => {
                    return (
                        <MatchListItem
                            title={data.title}
                            dormitory={data.dormitory}
                            description={data.description}
                            currentQuota={data.currentQuota}
                            maxQuota={data.maxQuota}
                            onClick={() => push("MatchDetailPage", { id: data.id })}
                        />
                    );
                })}
            </div>
        </BaseScreen>
    );
}
