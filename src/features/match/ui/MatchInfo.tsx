import { House, Users } from "lucide-react";

export interface MatchInfoProps {
    id: number;
    title: string;
    dormitory: string;
    currentQuota: number;
    maxQuota: number;
    author: {
        id: number;
        nickname: string;
    };
    createdAt: string;
}

export const MatchInfo = ({
    title,
    dormitory,
    currentQuota,
    maxQuota,
    author,
    createdAt,
}: MatchInfoProps) => {
    return (
        <div className="flex flex-col justify-end w-full h-full p-4 text-white">
            <h1 className="mb-1 text-2xl font-semibold">{title}</h1>

            <div className="flex justify-between">
                <ul className="flex gap-2 text-sm">
                    <li className="flex items-center flex-shrink-0 gap-1">
                        <House size={14} />
                        <span>{dormitory}</span>
                    </li>
                    <li className="flex items-center flex-shrink-0 gap-1">
                        <Users size={14} />
                        <span>
                            {currentQuota}/{maxQuota}
                        </span>
                    </li>
                </ul>

                <ul className="flex gap-2 text-sm">
                    <li>
                        <span>{author.nickname}</span>
                    </li>
                    <li>
                        <span>{createdAt}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};
