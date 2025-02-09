import { toast } from "react-toastify";

import { BaseScreen } from "@/apps/Screen";

import { ChatProfileCard } from "@/entities/chat/ui/ChatProfileCard/ChatProfileCard";
import { useAuth } from "@/features/auth/store/useAuth";
import { usePostJoinChatRoom } from "@/features/match/service/joinChatRoom";
import { useMatchDetail } from "@/features/match/service/readMatchDetail";
import { EnterChatRoomButton } from "@/features/match/ui/EnterChatRoomButton";
import { MatchInfo } from "@/features/match/ui/MatchInfo";
import defaultImage from "@/shared/assets/bg-background.webp";
import { BackDropImage } from "@/shared/components/BackDropImage";
import { NavPrevious } from "@/shared/components/NavPrevious";
import { parseJwt } from "@/shared/lib/decodeJWT";
import { ActivityComponentType } from "@stackflow/react";

export interface MatchDetailPageParams {
    id: number;
}

const INCREASE_PARTICIPANT_COUNT = 1;

const MatchDetailPage: ActivityComponentType<MatchDetailPageParams> = ({ params }) => {
    const { data } = useMatchDetail(params.id);
    const { accessToken } = useAuth.getState();
    const user = accessToken ? parseJwt(accessToken) : null;
    const { mutate: joinChatRoom } = usePostJoinChatRoom(params.id);
    // TODO JWT토큰을 parse없이 해서 내 정보를 가질 수 있도록 수정 필요

    if (!user || !accessToken) return null;
    if (!data) return null;

    const JoinChatRoomHandler = (nickname: string) => {
        if (data.participants.find((user) => user.nickname === nickname)) {
            toast.error("이미 참여중인 채팅방입니다.");
            return;
        }
        if (data.participants.length + INCREASE_PARTICIPANT_COUNT > data.maxQuota) {
            toast.error("채팅방 최대 인원을 초과했습니다.");
            return;
        }
        joinChatRoom();
    };

    return (
        <BaseScreen>
            <NavPrevious />

            <BackDropImage width="100%" height="220px" src={defaultImage}>
                <MatchInfo
                    name={data.name}
                    dormitory={data.dormitory}
                    currentQuota={data.currentQuota}
                    maxQuota={data.maxQuota}
                    id={data.id}
                />
            </BackDropImage>

            <div className="flex flex-col gap-5 p-6">
                {data.participants.map((participant) => (
                    <ChatProfileCard
                        key={participant.id}
                        id={participant.id}
                        nickname={participant.nickname}
                        college={participant.college}
                    />
                ))}
            </div>
            <div className="flex justify-around px-3 ">
                <EnterChatRoomButton
                    theme="bg-primary"
                    content="채팅 참여하기"
                    onClick={() => JoinChatRoomHandler(user.nickname)}
                />
                <EnterChatRoomButton
                    theme="bg-white border border-primary text-primary"
                    content="룸메이트 요청"
                    onClick={() => console.log("asd")}
                />
            </div>
        </BaseScreen>
    );
};

export default MatchDetailPage;
