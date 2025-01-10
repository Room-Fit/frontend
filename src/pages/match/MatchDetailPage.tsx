import { BaseScreen } from "@/apps/Screen";

import { fetchMatchDetail } from "@/__mocks__/fetchMatchDetail";
import { ChatProfileCard } from "@/entities/profile/ui/ChatProfileCard/ChatProfileCard";
import { MatchInfo } from "@/features/match/ui/MatchInfo";
import defaultImage from "@/shared/assets/bg-background.webp";
import { BackDropImage } from "@/shared/components/BackDropImage";
import { NavPrevious } from "@/shared/components/NavPrevious";
import { ActivityComponentType } from "@stackflow/react";

export interface MatchDetailPageParams {
    id?: number;
}

const MatchDetailPage: ActivityComponentType<MatchDetailPageParams> = ({ params }) => {
    const mock__matchDetailResponse = fetchMatchDetail(params.id as number);

    return (
        <BaseScreen>
            <NavPrevious />

            <BackDropImage width="100%" height="220px" src={defaultImage}>
                <MatchInfo
                    title={mock__matchDetailResponse.title}
                    dormitory={mock__matchDetailResponse.dormitory}
                    currentQuota={mock__matchDetailResponse.currentQuota}
                    maxQuota={mock__matchDetailResponse.maxQuota}
                    author={mock__matchDetailResponse.author}
                    createdAt={mock__matchDetailResponse.createdAt}
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
