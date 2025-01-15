export interface ChatRoomListProps {
    className?: string;
    children?: React.ReactNode;
}

export const ChatRoomList = ({ className, children }: ChatRoomListProps) => {
    return <ul className={className}>{children}</ul>;
};
