import { ChevronRight } from "lucide-react";

import { RecruitmentStatus } from "@/apps/types/status";

import { Card } from "@/shared/components/Card/Card";
import { cn } from "@/shared/lib";

export interface ProfileCardProps {
    status: RecruitmentStatus;
    nickname: string;
    children?: React.ReactNode;
}

export const ProfileCard = ({ status, nickname, children }: ProfileCardProps) => {
    const statusLabel = (status: RecruitmentStatus) => {
        switch (status) {
            case RecruitmentStatus.RECRUITING:
                return "모집중";
            case RecruitmentStatus.MATCH_COMPLETE:
                return "매칭 완료";
            case RecruitmentStatus.RECRUITMENT_COMPLETE:
                return "모집 완료";
        }
    };

    return (
        <Card
            theme={status === RecruitmentStatus.RECRUITING ? "blueTransparent" : "grayTransparent"}
        >
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold">{nickname}</h1>
                    <div
                        className={cn(
                            "py-0.5 px-2 font-semibold text-white opacity-100 rounded-2xl w-fit bg-primary",
                            status === RecruitmentStatus.RECRUITING ? "bg-primary" : "bg-dark-300",
                        )}
                    >
                        {statusLabel(status)}
                    </div>
                </div>
                <ChevronRight
                    className={cn(
                        "absolute text-primary top-[50%] translate-y-[-50%] right-4",
                        status === RecruitmentStatus.RECRUITING ? "text-primary" : "text-dark-300",
                    )}
                />
                <p className="pt-1 text-sm">{children}</p>
            </div>
        </Card>
    );
};
