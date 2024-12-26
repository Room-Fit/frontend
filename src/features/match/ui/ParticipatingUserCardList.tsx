import { User } from "lucide-react";

import { ParticipatingUserCard } from "./ParticipatingUserCard";

export interface ParticipatingUser {
    index: number;
    id: number;
    nickname: string;
    status: "PENDING" | "ACCEPTED";
}

export interface ParticipatingUserCardListProps {
    users: ParticipatingUser[];
}

export const ParticipatingUserCardList = ({ users }: ParticipatingUserCardListProps) => {
    return (
        <div>
            <p className="flex items-center gap-1 my-1 text-sm font-bold text-gray-800">
                <User size={14} />
                참여중인 유저
            </p>
            <div className="flex flex-col gap-2">
                {users.map((user) => (
                    <ParticipatingUserCard key={user.id} {...user} />
                ))}
            </div>
        </div>
    );
};
