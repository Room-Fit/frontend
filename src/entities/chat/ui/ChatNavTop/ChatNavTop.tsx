import { ChevronLeft } from "lucide-react";

import { useFlow } from "@/apps/stackflow";

export interface ChatNavTopProps {
    title: string;

    currentQuota: number;
    maxQuota: number;

    children?: React.ReactNode;
}

export const ChatNavTop = ({ title, currentQuota, maxQuota, children }: ChatNavTopProps) => {
    const { pop } = useFlow();

    return (
        <nav className="h-[60px] w-full mx-auto shadow-lg sticky top-0 z-50 bg-white">
            <div className="flex items-center justify-between w-full h-full px-2 py-1">
                <button
                    className="grid h-full aspect-square place-items-center"
                    onClick={() => pop()}
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="text-center ">
                    <h1 className="text-lg font-bold  my-[-2px]">{title}</h1>
                    <p className="text-[12px] text-gray-500  my-[-2px]">
                        {currentQuota}/{maxQuota} 명 모집중
                    </p>
                </div>

                <div className="flex items-center gap-2 mr-2">{children}</div>
            </div>
        </nav>
    );
};
