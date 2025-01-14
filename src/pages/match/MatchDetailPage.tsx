import { useEffect, useState } from "react";

import { BaseScreen } from "@/apps/Screen";

// import { fetchMatchDetail } from "@/__mocks__/fetchMatchDetail";
import { ChatProfileCard } from "@/entities/profile/ui/ChatProfileCard/ChatProfileCard";
import { MatchInfo, MatchInfoProps } from "@/features/match/ui/MatchInfo";
import defaultImage from "@/shared/assets/bg-background.webp";
import { BackDropImage } from "@/shared/components/BackDropImage";
import { NavPrevious } from "@/shared/components/NavPrevious";
import { api } from "@/shared/lib";
import { ActivityComponentType } from "@stackflow/react";

export interface MatchDetailPageParams {
    id?: number;
}

const MatchDetailPage: ActivityComponentType<MatchDetailPageParams> = ({ params }) => {
    // const mock__matchDetailResponse = fetchMatchDetail(params.id as number);
    const [data, setData] = useState<MatchInfoProps>({
        id: 0,
        title: "",
        dormitory: "",
        currentQuota: 0,
        maxQuota: 0,
        author: {
            id: 0,
            nickname: "",
        },
        createdAt: "",
    });
    useEffect(() => {
        if (params.id) {
            api.get(`/api/v1/chat/${params.id}/participants`)
                .then((res) => {
                    setData(res.data[0]);
                })
                .catch((error) => {
                    console.error("API 호출 실패:", error);
                });
        }
    }, [params.id]);
    return (
        <BaseScreen>
            <NavPrevious />

            <BackDropImage width="100%" height="220px" src={defaultImage}>
                <MatchInfo
                    title={data.title}
                    dormitory={data.dormitory}
                    currentQuota={data.currentQuota}
                    maxQuota={data.maxQuota}
                    author={data.author}
                    createdAt={data.createdAt}
                    id={data.id}
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
