import { Pencil } from "lucide-react";

export interface ProfileHeaderProps {
    nickname: string;
    email: string;
}

export const ProfileHeader = ({ nickname, email }: ProfileHeaderProps) => {
    return (
        <article className="p-4 border border-gray-200 rounded-md">
            <h1 className="inline-flex items-center gap-2 text-lg font-bold">
                <span className="text-primary">{nickname}</span>
                <Pencil size={16} className="text-gray-500" />
            </h1>
            <p className="text-xs text-gray-700">{email}</p>
        </article>
    );
};
