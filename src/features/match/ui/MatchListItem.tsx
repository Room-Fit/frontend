import { House, Users } from "lucide-react";

export interface MatchListItemProps extends React.ComponentProps<"div"> {
    title: string;
    dormitory: string;
    description: string;

    currentQuota: number;
    maxQuota: number;
}

export const MatchListItem = ({
    title,
    description,
    dormitory,
    currentQuota,
    maxQuota,
    ...props
}: MatchListItemProps) => {
    return (
        <div className="list-none border-b-[1px] p-3 hover:cursor-pointer w-full" {...props}>
            <h1 className="text-lg font-bold text-left line-clamp-1">{title}</h1>
            <p className="text-sm text-left text-gray-800 line-clamp-1">{description}</p>
            <div className="flex justify-start gap-3 py-1 text-gray-500">
                <p className="flex items-center gap-1 text-xs">
                    <House size={14} />
                    <span>{dormitory}</span>
                </p>
                <p className="flex items-center gap-1 text-xs">
                    <Users size={14} />
                    <span>
                        {currentQuota}/{maxQuota}
                    </span>
                </p>
            </div>
        </div>
    );
};
