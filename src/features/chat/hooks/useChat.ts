import { useCallback, useEffect, useRef, useState } from "react";

import SockJS from "sockjs-client";

import {
    STOMP_API_BASE_URL,
    STOMP_DESTINATION_PREFIX,
    STOMP_TOPIC_PREFIX,
} from "@/features/chat/config/env";
import { ChatHistoryActionTypes, useChatHistory } from "@/features/chat/hooks/useChatHistory";
import { CompatClient, Stomp } from "@stomp/stompjs";

export interface MessagePayload {
    roomId: number;
    sender: {
        userId: number;
        nickname: string;
    };
    content: string;
}

export type UseChatOptions = {
    roomId: number;
    userId: number;
    nickname: string;
};

export const useChat = ({ roomId, userId, nickname }: UseChatOptions) => {
    const stompClient = useRef<CompatClient | null>(null);
    const chatInputRef = useRef<HTMLInputElement>(null);

    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { state: chatHistory, dispatch } = useChatHistory();
    const subscribeTopic = useCallback(
        (topic: string) => {
            stompClient.current?.subscribe(topic, (message) => {
                const parsedMessage = JSON.parse(message.body) as MessagePayload;

                dispatch({
                    type: ChatHistoryActionTypes.PUSH_BACK_MESSAGE,
                    payload: {
                        id: parsedMessage.sender.userId,
                        type: parsedMessage.sender.userId === userId ? "send" : "receive",
                        nickname: parsedMessage.sender.nickname,
                        content: parsedMessage.content,
                        createdAt: new Date().toISOString(),
                    },
                });
            });
        },
        [dispatch, userId],
    );

    const onConnect = useCallback(() => {
        setIsConnected(true);
        setError(null);
        subscribeTopic(`${STOMP_TOPIC_PREFIX}/${roomId}`);
    }, [roomId, subscribeTopic]);

    const onError = (err: string) => {
        console.log("Error: ", err);
        setIsConnected(false);
    };

    useEffect(() => {
        console.log(STOMP_API_BASE_URL, STOMP_TOPIC_PREFIX, STOMP_DESTINATION_PREFIX);
        const socket = new SockJS(STOMP_API_BASE_URL);
        const client = Stomp.over(socket);
        stompClient.current = client;

        client.connect({}, onConnect, onError);

        return () => {
            if (!client.connected) return;

            client.disconnect(() => {
                setIsConnected(false);
            });
        };
    }, [dispatch, onConnect, roomId, userId]);

    const sendMessage = (message: string) => {
        if (!stompClient.current) return;
        if (!chatInputRef.current) return;

        const trimmedMessage = message.trim();
        if (trimmedMessage === "") return;
        const messagePayload: MessagePayload = {
            roomId,
            sender: {
                userId,
                nickname,
            },
            content: message,
        };
        console.log("ROOMID", roomId, "SENDER", userId);
        stompClient.current.send(
            `${STOMP_DESTINATION_PREFIX}/${roomId}`,
            {},
            JSON.stringify(messagePayload),
        );
        chatInputRef.current.value = "";
    };

    return {
        chatHistory,
        chatInputRef,
        isConnected,
        error,
        sendMessage,
    };
};
