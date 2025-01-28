import { forwardRef } from "react";

export interface ChatHistoryGroupProps {
    children?: React.ReactNode;
}

export const ChatHistoryGroup = forwardRef<HTMLUListElement, ChatHistoryGroupProps>(
    ({ children }, ref) => {
        return (
            <ul ref={ref} className="flex flex-col h-screen gap-2 px-6 overflow-scroll">
                {children}
            </ul>
        );
    },
);
