import { Users } from "lucide-react";

import { ChatSideBarProfileGroup } from "@/entities/chat/ui/ChatSideBar/ChatSideBarProfileGroup";
import { LeaveChatRoomButton } from "@/features/chat/ui/LeaveChatRoomButton";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui";

export interface ChatSideBarProps {
    children?: React.ReactNode;
    open: boolean;
    onOpenChange: () => void;
    onClick: () => void;
}

export const ChatSideBar = ({ children, open, onOpenChange, onClick }: ChatSideBarProps) => {
    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetTrigger>
                <Users className="block text-dark-300" size={20} />
            </SheetTrigger>

            <SheetContent className="rounded-l-xl w-[330px] pt-[60px]">
                <ChatSideBarProfileGroup>{children}</ChatSideBarProfileGroup>
                <LeaveChatRoomButton onClick={onClick} />
            </SheetContent>
        </Sheet>
    );
};
