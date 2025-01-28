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
    return (
        <BaseScreen>
            <NavPrevious />

            <BackDropImage width="100%" height="220px" src={defaultImage}>
                <MatchInfo
                    name={data?.name ?? ""}
                    dormitory={data?.dormitory ?? ""}
                    currentQuota={data?.currentQuota ?? 0}
                    maxQuota={data?.maxQuota ?? 0}
                    // author={data?.author ?? { id: 0, nickname: "" }}
                    // createdAt={data?.createdAt ?? ""}
                    id={data?.id ?? 0}
                />
            </BackDropImage>

            <div className="flex flex-col gap-5 p-6">
                <ChatProfileCard id={1} name={"김룸핏"} description="경북대학교 컴퓨터학부" />
                <ChatProfileCard id={2} name={"김룸핏"} description="경북대학교 컴퓨터학부" />
                <ChatProfileCard id={3} name={"김룸핏"} description="경북대학교 컴퓨터학부" />
            </div>
        </BaseScreen>
    );
};

export default MatchDetailPage;
