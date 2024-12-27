import { CirclePlus, HeartHandshake, MessagesSquare, User } from "lucide-react";

export const navBottom = [
    {
        path: "/match",
        label: "룸메 찾기",
        icon: HeartHandshake,
    },
    {
        path: "/match/create",
        label: "룸메 구하기",
        icon: CirclePlus,
    },
    {
        path: "/chat",
        label: "채팅",
        icon: MessagesSquare,
    },
    {
        path: "/mypage",
        label: "마이페이지",
        icon: User,
    },
];
