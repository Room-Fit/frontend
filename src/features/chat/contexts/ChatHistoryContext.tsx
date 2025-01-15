import { createContext, useReducer } from "react";

import { ChatHistoryItemProps } from "@/entities/chat/ui/ChatHistory/ChatHistoryItem";
import { ChatHistoryAction, chatHistoryReducer } from "@/features/chat/hooks/useChatHistory";

export interface ChatHistory {
    histories: ChatHistoryItemProps[];
}

export const ChatHistoryContext = createContext<{
    state: ChatHistory;
    dispatch: React.Dispatch<ChatHistoryAction>;
} | null>(null);

export const ChatHistoryContextProvider = ({ children }: { children?: React.ReactNode }) => {
    const [state, dispatch] = useReducer<typeof chatHistoryReducer>(chatHistoryReducer, {
        histories: [],
    });

    return (
        <ChatHistoryContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatHistoryContext.Provider>
    );
};
