import { ComponentType, useState } from "react";
import withProviders from "react-with-providers";

import { Vote } from "lucide-react";

import { Screen } from "@/apps/Screen";

import { ChatHistoryGroup } from "@/entities/chat/ui/ChatHistory/ChatHistoryGroup";
import { ChatHistoryItem } from "@/entities/chat/ui/ChatHistory/ChatHistoryItem";
import { ChatHistoryTime } from "@/entities/chat/ui/ChatHistory/ChatHistoryTime";
import { ChatInput } from "@/entities/chat/ui/ChatInput/ChatInput";
import { ChatNavTop } from "@/entities/chat/ui/ChatNavTop/ChatNavTop";
import { ChatProfileCard } from "@/entities/chat/ui/ChatProfileCard/ChatProfileCard";
import { ChatSideBar } from "@/entities/chat/ui/ChatSideBar/ChatProfileSideBar";
import { ChatHistoryContextProvider } from "@/features/chat/contexts/ChatHistoryContext";
import { useChat } from "@/features/chat/hooks/useChat";
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
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Screen>
            <ChatHistoryContextProvider>
                <ChatGradientLayer className="w-full min-h-screen">
                    <ChatNavTop title={"채팅방 이름"} currentQuota={2} maxQuota={4}>
                        <Vote className="block text-dark-300" strokeWidth={1.5} />
                        <ChatSideBar open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
                            <ChatProfileCard
                                id={1}
                                name={"김룸핏"}
                                description={"경북대학교 컴퓨터학부"}
                                onClick={() => setIsOpen((prev) => !prev)}
                            />
                        </ChatSideBar>
                    </ChatNavTop>

                    <ChatHistoryGroup>
                        <ChatHistoryTime timeStamp={"2022-01-01T00:00:00+09:00"} />
                        {chatHistory.histories.map((historyItem) => {
                            return (
                                <ChatHistoryItem
                                    key={historyItem.timeStamp}
                                    type={historyItem.type}
                                    author={historyItem.author}
                                    message={historyItem.message}
                                    timeStamp={historyItem.timeStamp}
                                />
                            );
                        })}
                    </ChatHistoryGroup>
                    <ChatInput
                        ref={chatInputRef}
                        onSendButtonClick={() => {
                            console.log(chatInputRef.current?.value);
                            sendMessage(chatInputRef.current?.value as string);
                        }}
                    />
                </ChatGradientLayer>
            </ChatHistoryContextProvider>
        </Screen>
    );
};

export default withProviders([<ChatHistoryContextProvider />], ChatRoomPage as ComponentType);
