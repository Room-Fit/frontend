import { House, Users } from "lucide-react";

export interface MatchInfoProps {
    id: number;
    name: string;
    dormitory: string;
    currentQuota: number;
    maxQuota: number;
}

export const MatchInfo = ({ name, dormitory, currentQuota, maxQuota }: MatchInfoProps) => {
    return (
        <div className="flex flex-col justify-end w-full h-full p-4 text-white">
            <h1 className="mb-1 text-2xl font-semibold">{name}</h1>

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
            </div>
        </div>
    );
};
