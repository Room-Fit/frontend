export interface ChatHistoryGroupProps {
    children?: React.ReactNode;
}

export const ChatHistoryGroup = ({ children }: ChatHistoryGroupProps) => {
    return <ul className="flex flex-col gap-2 px-6">{children}</ul>;
};
