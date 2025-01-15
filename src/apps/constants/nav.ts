import { CirclePlus, HeartHandshake, LucideProps, MessagesSquare, User } from "lucide-react";

import { ActivityName } from "@/apps/stackflow";

export type NavBottomActivities = Omit<ActivityName, "MatchDetailPage">;

type NavBottomItem = {
    activityName: NavBottomActivities;
    path: string;
    label: string;
    icon: React.ComponentType<LucideProps>;
};

export const navBottom: NavBottomItem[] = [
    {
        activityName: "MatchListPage",
        path: "/match",
        label: "룸메 찾기",
        icon: HeartHandshake,
    },
    {
        activityName: "CreateMatchPage",
        path: "/match/create",
        label: "룸메 구하기",
        icon: CirclePlus,
    },
    {
        activityName: "ChatRoomListPage",
        path: "/chat",
        label: "채팅",
        icon: MessagesSquare,
    },
    {
        activityName: "MyPage",
        path: "/mypage",
        label: "마이페이지",
        icon: User,
    },
];
