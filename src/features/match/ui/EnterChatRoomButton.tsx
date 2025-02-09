import { Button } from "@/shared/ui";

interface ButtonProps {
    content: string;
    theme: string;
    onClick: () => void;
}

export const EnterChatRoomButton = ({ content, theme, onClick }: ButtonProps) => {
    return (
        <Button
            className={`font-semibold h-[34px] w-[180px] rounded-lg ${theme}`}
            onClick={onClick}
        >
            {content}
        </Button>
    );
};
