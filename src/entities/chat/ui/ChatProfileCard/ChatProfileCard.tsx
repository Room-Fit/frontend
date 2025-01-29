import { ChevronRight } from "lucide-react";

import { useFlow } from "@/apps/stackflow";

import { Card } from "@/shared/components/Card/Card";
import { Chip } from "@/shared/components/Chip/Chip";
import { cn } from "@/shared/lib";

export interface ChatProfileCardProps {
    className?: string;
    id: number;
    nickname: string;
    college: string;
    onClick?: () => void;
}

export const ChatProfileCard = ({
    id,
    className,
    nickname,
    college,
    onClick,
}: ChatProfileCardProps) => {
    const { push } = useFlow();

    return (
        <Card
            theme="gray"
            className={cn("flex p-2 px-5", className)}
            onClick={() => {
                push("ProfileDetailPage", { id });
                onClick && onClick();
            }}
        >
            <div className="flex items-center justify-between w-full h-full py-1">
                <div className="relative flex-grow-[1] z-10">
                    <h1 className="my-1 text-xl font-bold text-black">{nickname}</h1>
                    <p className="text-sm font-semibold text-dark-400">{college}</p>
                </div>
                <div>
                    <Chip theme="gray" className="gap-0">
                        <span className="text-dark-400">프로필</span>
                        <ChevronRight />
                    </Chip>
                </div>
            </div>
        </Card>
    );
};
