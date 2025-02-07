import { LogOut } from "lucide-react";

type LeaveChatRoomButtonProps = {
    onClick: () => void;
};

export const LeaveChatRoomButton = ({ onClick }: LeaveChatRoomButtonProps) => {
    return (
        <LogOut className="fixed bottom-5" onClick={onClick}>
            LeaveChatRoomButton
        </LogOut>
    );
};
