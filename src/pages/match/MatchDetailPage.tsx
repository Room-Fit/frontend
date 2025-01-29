import { BaseScreen } from "@/apps/Screen";

import { ChatProfileCard } from "@/entities/chat/ui/ChatProfileCard/ChatProfileCard";
import { useMatchDetail } from "@/features/match/service/readMatchDetail";
import { MatchInfo } from "@/features/match/ui/MatchInfo";
import defaultImage from "@/shared/assets/bg-background.webp";
import { BackDropImage } from "@/shared/components/BackDropImage";
import { NavPrevious } from "@/shared/components/NavPrevious";
import { ActivityComponentType } from "@stackflow/react";

export interface MatchDetailPageParams {
    id: number;
}

const MatchDetailPage: ActivityComponentType<MatchDetailPageParams> = ({ params }) => {
    const { data } = useMatchDetail(params.id);
    console.log(data);
    return (
        <BaseScreen>
            <NavPrevious />

            <BackDropImage width="100%" height="220px" src={defaultImage}>
                <MatchInfo
                    name={data?.name ?? ""}
                    dormitory={data?.dormitory ?? ""}
                    currentQuota={data?.currentQuota ?? 0}
                    maxQuota={data?.maxQuota ?? 0}
                    id={data?.id ?? 0}
                />
            </BackDropImage>

            <div className="flex flex-col gap-5 p-6">
                {data?.participants.map((participant) => (
                    <ChatProfileCard
                        key={participant.id}
                        id={participant.id}
                        nickname={participant.nickname}
                        college={participant.college}
                    />
                ))}
            </div>
        </BaseScreen>
    );
};

export default MatchDetailPage;
