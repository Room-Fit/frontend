import { Info } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../../../shared/ui/avatar";

export interface UserCardProps {
    index: number;
    nickname: string;
    imgSrc?: string;
    status: "PENDING" | "ACCEPTED";
}

export const ParticipatingUserCard = ({ index, nickname, imgSrc, status }: UserCardProps) => {
    return (
        <div className="flex items-center justify-between border-[1px] rounded-lg p-1.5 h-[46px]">
            <div className="flex items-center w-full gap-2 ml-2">
                <h1 className="font-bold">{index}</h1>
                <Avatar className="w-8 h-8">
                    <AvatarImage src={imgSrc} alt={nickname} />
                    <AvatarFallback>{nickname[0]}</AvatarFallback>
                </Avatar>
                <h1 className="">{nickname}</h1>
            </div>
            <div className="flex items-center h-full mr-2">
                <div className="inline-flex justify-center text-black rounded-md bg-accent w-[70px] h-full items-center">
                    {status === "PENDING" ? "수락대기" : "수락완료"}
                </div>
                <Info size={20} className="ml-1" />
            </div>
        </div>
    );
};
