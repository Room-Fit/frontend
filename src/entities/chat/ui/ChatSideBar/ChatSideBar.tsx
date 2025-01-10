import { ChatSideBarProfileGroup } from "@/entities/chat/ui/ChatSideBar/ChatSideBarProfileGroup";
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui";

export interface ChatSideBarProps {
    children?: React.ReactNode;
}

export const ChatSideBar = ({ children }: ChatSideBarProps) => {
    return (
        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent className="rounded-l-xl w-[344px] pt-[60px]">
                <ChatSideBarProfileGroup>{children}</ChatSideBarProfileGroup>
            </SheetContent>
        </Sheet>
    );
};
