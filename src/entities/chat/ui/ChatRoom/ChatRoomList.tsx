export interface ChatRoomListProps {
    children?: React.ReactNode;
}

export const ChatRoomList = ({ children }: ChatRoomListProps) => {
    return <ul>{children}</ul>;
};
