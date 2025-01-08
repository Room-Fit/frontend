import { Screen } from "@/apps/Screen";

import { ChatHistoryGroup } from "@/entities/chat/ui/ChatHistory/ChatHistoryGroup";
import { ChatHistoryItem } from "@/entities/chat/ui/ChatHistory/ChatHistoryItem";
import { ChatHistoryTime } from "@/entities/chat/ui/ChatHistory/ChatHistoryTime";
import { ChatInput } from "@/entities/chat/ui/ChatInput/ChatInput";
import { ChatNavTop } from "@/entities/chat/ui/ChatNavTop/ChatNavTop";
import { ChatGradientLayer } from "@/shared/components/GradientLayers/ChatGradientLayer";

export default function ChatRoomPage() {
    return (
        <Screen>
            <ChatGradientLayer className="w-full min-h-screen">
                <ChatNavTop title={"채팅방 이름"} currentQuota={2} maxQuota={4} />

                <ChatHistoryGroup>
                    <ChatHistoryTime timeStamp={"2022-01-01T00:00:00+09:00"} />
                    <ChatHistoryItem
                        type={"send"}
                        author={"보내는 사람"}
                        message={"최대 말품선 길이입니다 다람쥐다람쥐다람쥐다람쥐"}
                        timeStamp={"2022-01-01T00:43:00+09:00"}
                    />
                    <ChatHistoryItem
                        type={"receive"}
                        author={"보내는 사람"}
                        message={"최대 말품선 길이입니다 다람쥐다람쥐다람쥐다람쥐"}
                        timeStamp={"2022-01-01T00:46:00+09:00"}
                    />
                </ChatHistoryGroup>
                <ChatInput />
            </ChatGradientLayer>
        </Screen>
    );
}
