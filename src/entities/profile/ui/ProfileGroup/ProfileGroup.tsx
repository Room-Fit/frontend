import { cn } from "@/shared/lib";

export interface ProfileGroupProps {
    className?: string;
    children?: React.ReactNode;
}

export const ProfileGroup = ({ className, children }: ProfileGroupProps) => {
    return <div className={cn("bg-white rounded-xl", className)}>{children}</div>;
};
