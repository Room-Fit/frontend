import { Users } from "lucide-react";

import { ChatSideBarProfileGroup } from "@/entities/chat/ui/ChatSideBar/ChatSideBarProfileGroup";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui";

export interface ChatSideBarProps {
    children?: React.ReactNode;
}

export const ChatSideBar = ({ children }: ChatSideBarProps) => {
    return (
        <Sheet>
            <SheetTrigger>
                <Users className="block text-dark-300" size={20} />
            </SheetTrigger>

            <SheetContent className="rounded-l-xl w-[330px] pt-[60px]">
                <ChatSideBarProfileGroup>{children}</ChatSideBarProfileGroup>
            </SheetContent>
        </Sheet>
    );
};
