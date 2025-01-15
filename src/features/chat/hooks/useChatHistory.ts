import { useContext } from "react";

import { ChatHistoryItemProps } from "@/entities/chat/ui/ChatHistory/ChatHistoryItem";
import { ChatHistoryContext } from "@/features/chat/contexts/ChatHistoryContext";

export enum ChatHistoryActionTypes {
    PUSH_FRONT_MESSAGE = "PUSH_FRONT_MESSAGE",
    PUSH_BACK_MESSAGE = "PUSH_BACK_MESSAGE",
}

export type ChatHistoryAction =
    | { type: ChatHistoryActionTypes.PUSH_FRONT_MESSAGE; payload: ChatHistoryItemProps }
    | { type: ChatHistoryActionTypes.PUSH_BACK_MESSAGE; payload: ChatHistoryItemProps };

export type ChatHistoryState = {
    histories: ChatHistoryItemProps[];
};

export const chatHistoryReducer = (
    state: ChatHistoryState,
    action: ChatHistoryAction,
): ChatHistoryState => {
    switch (action.type) {
        case ChatHistoryActionTypes.PUSH_FRONT_MESSAGE:
            return { histories: [action.payload, ...state.histories] };
        case ChatHistoryActionTypes.PUSH_BACK_MESSAGE:
            return { histories: [...state.histories, action.payload] };
        default:
            return state;
    }
};

export const useChatHistory = () => {
    const context = useContext(ChatHistoryContext);
    if (!context)
        throw new Error("useChatHistory 는 ChatHistoryContextProvider 내부에서 사용되어야 합니다.");
    return context;
};
