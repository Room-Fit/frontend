import { ChevronLeft } from "lucide-react";

import { useFlow } from "@/apps/stackflow";

export const NavPrevious = () => {
    const { pop } = useFlow();

    return (
        <nav className="h-[60px] w-full mx-auto shadow-lg sticky top-0 z-50 bg-white">
            <div className="flex items-center w-full h-full px-2 py-1">
                <button
                    className="grid h-full aspect-square place-items-center"
                    onClick={() => {
                        pop();
                    }}
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
        </nav>
    );
};
