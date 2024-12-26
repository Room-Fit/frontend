import { Link } from "react-router-dom";

import { ChevronLeft, Users } from "lucide-react";

export interface NavChatTopProps {
    title: string;

    currentQuota: number;
    maxQuota: number;
}

export const NavChatTop = ({ title, currentQuota, maxQuota }: NavChatTopProps) => {
    return (
        <nav className="h-[60px] w-full fixed top-0 px-6 bg-white z-10 shadow-md pl-3">
            <ul className="flex items-center justify-between w-full h-full gap-4">
                <li>
                    <div className="flex">
                        <div className="flex flex-col justify-center mr-2">
                            <ChevronLeft className="block" size={30} />
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">{title}</h1>
                            <p className="text-xs mt-[-4px]">
                                {currentQuota} / {maxQuota}명 모집중
                            </p>
                        </div>
                    </div>
                </li>
                <li className="relative">
                    <div className="absolute right-[-8px] flex items-center justify-center text-white rounded-full bg-primary w-[16px] h-[16px] top-[-8px] text-xs">
                        {currentQuota}
                    </div>
                    <Users size={24} />
                </li>
            </ul>
        </nav>
    );
};
