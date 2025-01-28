import { Badge } from "@/shared/ui/badge";

interface MatchStatusProps {
    status: "RECRUITING" | "RECRUITMENT_COMPLETE" | "MATCH_COMPLETE";
}

const matchStatusStyle = (status: MatchStatusProps["status"]): string => {
    const colorMap = {
        RECRUITING: "bg-primary text-white",
        RECRUITMENT_COMPLETE: "bg-dark-300 text-dark-400",
        MATCH_COMPLETE: "bg-dark-300 text-dark-400",
    };
    return colorMap[status];
};

const translateStatusToKorean = (status: MatchStatusProps["status"]) => {
    const translateMap = {
        RECRUITING: "모집중",
        RECRUITMENT_COMPLETE: "모집완료",
        MATCH_COMPLETE: "매칭완료",
    };
    return translateMap[status];
};

export const MatchStatus = ({ status }: MatchStatusProps) => {
    return (
        <Badge className={`${matchStatusStyle(status)} w-fit h-[24px] text-sm`}>
            {translateStatusToKorean(status)}
        </Badge>
    );
};
