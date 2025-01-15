import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { useFlow } from "@/apps/stackflow";

import { ChatRoomList } from "@/entities/chat/ui/ChatRoom/ChatRoomList";
import { ChatRoomListItem } from "@/entities/chat/ui/ChatRoom/ChatRoomListItem";

export default function ChatRoomListPage() {
    const { push } = useFlow();

    return (
        <BaseScreen>
            <NavTop />

            <div className="p-4">
                <h1 className="text-lg font-bold">채팅</h1>

                <ChatRoomList>
                    <ChatRoomListItem
                        roomId={1}
                        onClick={() => push("ChatRoomPage", { roomId: 1 })}
                        isNotReadMessageExist={true}
                        title={"채팅방 제목입니다"}
                        lastMessage={"가장 최근 채팅 내용입니다"}
                        lastMessageTimeStamp={"12:45"}
                    />
                    <ChatRoomListItem
                        roomId={2}
                        onClick={() => push("ChatRoomPage", { roomId: 2 })}
                        isNotReadMessageExist={false}
                        title={"미친듯이 매우 아주 많이 긴 채팅방 제목입니다"}
                        lastMessage={"가장 최근 채팅 내용입니다"}
                        lastMessageTimeStamp={"12:45"}
                    />
                    <ChatRoomListItem
                        roomId={3}
                        onClick={() => push("ChatRoomPage", { roomId: 3 })}
                        isNotReadMessageExist={true}
                        title={"채팅방 제목입니다"}
                        lastMessage={"읽지 않은 메시가 있는 채팅방은 이렇게 활성화 됩니다"}
                        lastMessageTimeStamp={"12:45"}
                    />
                    <ChatRoomListItem
                        roomId={4}
                        onClick={() => push("ChatRoomPage", { roomId: 4 })}
                        isNotReadMessageExist={false}
                        title={"채팅방 제목은 핏글 제목과 동일합니다"}
                        lastMessage={
                            "마지막으로 보낸 메시지 입니다. 마지막으로 보낸 채팅 메시지가 매우 길어 두 줄을 초과하는경우 다음과 같이 디스플레이 됩니다"
                        }
                        lastMessageTimeStamp={"12:45"}
                    />
                </ChatRoomList>
            </div>
        </BaseScreen>
    );
}
