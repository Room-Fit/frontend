import { ChevronRight } from "lucide-react";

import { useFlow } from "@/apps/stackflow";

import { Card } from "@/shared/components/Card/Card";
import { cn } from "@/shared/lib";

export interface ProfileCardProps {
    gender?: "M" | "F";
    nickname: string;
    children?: React.ReactNode;
}

export const ProfileCard = ({ nickname, children, gender }: ProfileCardProps) => {
    const { push } = useFlow();
    return (
        <Card theme={gender === "M" ? "genderMTransparent" : "genderFTransparent"}>
            <div className="p-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold">{nickname}</h1>
                </div>
                <ChevronRight
                    className={cn(
                        "absolute text-primary top-[50%] translate-y-[-50%] right-4",
                        gender === "M" ? "text-primary" : "text-dark-300",
                    )}
                    onClick={() => push("ProfileDetailPage", { nickname })}
                />
                <p className="pt-1 text-sm">{children}</p>
            </div>
        </Card>
    );
};
