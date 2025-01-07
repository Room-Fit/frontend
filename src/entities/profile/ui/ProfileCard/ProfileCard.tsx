import { ChevronRight } from "lucide-react";

import { useFlow } from "@/apps/stackflow";

import { ProfileCardDecorator } from "@/entities/profile/assets/ProfileCardDecorator";
import { ProfileCardLogo } from "@/entities/profile/assets/ProfileCardLogo";
import { cn } from "@/shared/lib";

export interface ProfileCardProps {
    className?: string;

    id: number;
    name: string;

    studentId: number;
    birthYear: number;
    mbti: string;
}

export const ProfileCard = ({
    className,
    id,
    name,
    studentId,
    birthYear,
    mbti,
}: ProfileCardProps) => {
    const { push } = useFlow();

    return (
        <div
            onClick={() => push("ProfileDetailPage", { id })}
            className={cn(className, "relative flex p-4 overflow-hidden rounded-lg")}
            style={{
                background: "linear-gradient(to bottom, #5DA5FF 0%, #0675FF 56%)",
            }}
        >
            <ProfileCardLogo className="absolute right-0 h-[128px] bottom-[-15px]" />
            <ProfileCardDecorator className="absolute scale-[2] rotate-[20deg] top-[-120px] left-[-120px]" />

            <div className="flex-grow-[1] z-10">
                <h1 className="my-1 text-xl font-bold text-white">{name}</h1>
                <div className="text-sm text-white">
                    <p>{studentId}학번</p>
                    <p>{birthYear}년생</p>
                    <p>{mbti}</p>
                </div>
            </div>
            <div className="flex items-center">
                <ChevronRight size={40} className="text-white" />
            </div>
        </div>
    );
};
