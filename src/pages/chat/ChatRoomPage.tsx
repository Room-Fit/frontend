import { ComponentType, useState } from "react";
import withProviders from "react-with-providers";

import { Vote } from "lucide-react";

import { Screen } from "@/apps/Screen";

import { ChatHistoryFallback } from "@/entities/chat/ui/ChatHistory/ChatHistoryFallback";
// import { ChatHistoryFallback } from "@/entities/chat/ui/ChatHistory/ChatHistoryFallback";
import { ChatHistoryGroup } from "@/entities/chat/ui/ChatHistory/ChatHistoryGroup";
import { ChatHistoryItem } from "@/entities/chat/ui/ChatHistory/ChatHistoryItem";
import { ChatHistoryTime } from "@/entities/chat/ui/ChatHistory/ChatHistoryTime";
import { ChatInput } from "@/entities/chat/ui/ChatInput/ChatInput";
import { ChatNavTop } from "@/entities/chat/ui/ChatNavTop/ChatNavTop";
import { ChatProfileCard } from "@/entities/chat/ui/ChatProfileCard/ChatProfileCard";
import { ChatSideBar } from "@/entities/chat/ui/ChatSideBar/ChatProfileSideBar";
import { ChatHistoryContextProvider } from "@/features/chat/contexts/ChatHistoryContext";
import { useChat } from "@/features/chat/hooks/useChat";
import { useInfObserverFetch } from "@/features/chat/hooks/useInfObserverFetch";
import { useMatchDetail } from "@/features/match/service/readMatchDetail";
import { ChatGradientLayer } from "@/shared/components/GradientLayers/ChatGradientLayer";
import { ActivityComponentType } from "@stackflow/react";

export interface ChatRoomPageParams {
    roomId: number;
}

const ChatRoomPage: ActivityComponentType<ChatRoomPageParams> = ({ params }) => {
    const { chatInputRef, sendMessage, chatHistory } = useChat({
        userId: 10,
        roomId: params.roomId,
    });
    const { participants } = useMatchDetail(params.roomId);
    console.log(participants);

    const [isOpen, setIsOpen] = useState(false);
    const { data, isPending, scrollContainerRef, targetRef, hasNext } = useInfObserverFetch<
        HTMLUListElement,
        HTMLDivElement
    >({
        rootMargin: "0px",
        threshold: 0.5,
        room_id: params.roomId,
    });
    return (
        <Screen>
            <ChatHistoryContextProvider>
                <ChatGradientLayer className="w-full min-h-screen">
                    <ChatNavTop title={"채팅방 이름"} currentQuota={2} maxQuota={4}>
                        <Vote className="block text-dark-300" strokeWidth={1.5} />
                        <ChatSideBar open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
                            {participants?.map((participant) => (
                                <ChatProfileCard
                                    key={participant.id}
                                    id={participant.id}
                                    nickname={participant.nickname}
                                    college={participant.college}
                                />
                            ))}
                        </ChatSideBar>
                    </ChatNavTop>

                    <ChatHistoryGroup ref={scrollContainerRef}>
                        <ChatHistoryTime timeStamp={"2022-01-01T00:00:00+09:00"} />
                        {!isPending && hasNext && <ChatHistoryFallback ref={targetRef} />}
                        {data?.data.flatMap((historyItems) => (
                            <ChatHistoryItem
                                key={historyItems.id}
                                id={historyItems.id}
                                type={historyItems.sender === "nick2" ? "send" : "receive"}
                                nickname={historyItems.sender}
                                content={historyItems.content}
                                createdAt={historyItems.createdAt}
                            />
                        ))}
                        {chatHistory.histories.map((history) => (
                            <ChatHistoryItem
                                key={history.id}
                                id={history.id as number}
                                type={history?.nickname == "nick2" ? "send" : "receive"}
                                nickname={history?.nickname as string}
                                content={history?.content as string}
                                createdAt={history?.createdAt as string}
                            />
                        ))}
                    </ChatHistoryGroup>

                    <ChatInput
                        ref={chatInputRef}
                        onSendButtonClick={() => {
                            sendMessage(chatInputRef.current?.value as string);
                        }}
                    />
                </ChatGradientLayer>
            </ChatHistoryContextProvider>
        </Screen>
    );
};

export default withProviders([<ChatHistoryContextProvider />], ChatRoomPage as ComponentType);
