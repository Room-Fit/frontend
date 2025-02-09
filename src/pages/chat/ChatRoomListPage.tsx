import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { useFlow } from "@/apps/stackflow";

import { ChatRoomList } from "@/entities/chat/ui/ChatRoom/ChatRoomList";
import { ChatRoomListItem } from "@/entities/chat/ui/ChatRoom/ChatRoomListItem";
import { useMatchList } from "@/features/match/service/readAllMatch";

export default function ChatRoomListPage() {
    const { push } = useFlow();
    const { data: rooms } = useMatchList();

    if (!rooms) return;

    return (
        <BaseScreen>
            <NavTop />

            <div className="p-4">
                <h1 className="text-lg font-bold">채팅</h1>

                <ChatRoomList>
                    {rooms.map((room) => (
                        <ChatRoomListItem
                            roomId={room.id}
                            title={room.name}
                            key={room.id}
                            isNotReadMessageExist={true}
                            lastMessage="12:45"
                            lastMessageTimeStamp="12:45"
                            onClick={() => push("ChatRoomPage", { roomId: room.id })}
                        />
                    ))}
                </ChatRoomList>
            </div>
        </BaseScreen>
    );
}
