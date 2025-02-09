import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { useFlow } from "@/apps/stackflow";

import { ChatRoomList } from "@/entities/chat/ui/ChatRoom/ChatRoomList";
import { ChatRoomListItem } from "@/entities/chat/ui/ChatRoom/ChatRoomListItem";
import { useAuth } from "@/features/auth/store/useAuth";
import { useReadUserChatRooms } from "@/features/chat/service/readUserChatRoom";
import { parseJwt } from "@/shared/lib/decodeJWT";

export default function ChatRoomListPage() {
    const { push } = useFlow();
    const { accessToken } = useAuth.getState();

    const userInfo = accessToken ? parseJwt(accessToken) : null;
    const { data: rooms } = useReadUserChatRooms(userInfo.id);

    return (
        <BaseScreen>
            <NavTop />

            <div className="p-4">
                <h1 className="text-lg font-bold">채팅</h1>

                <ChatRoomList>
                    {rooms ? (
                        rooms.map((room) => (
                            <ChatRoomListItem
                                roomId={room.id}
                                title={room.name}
                                key={room.id}
                                isNotReadMessageExist={true}
                                lastMessage="12:45"
                                lastMessageTimeStamp="12:45"
                                onClick={() => push("ChatRoomPage", { roomId: room.id })}
                            />
                        ))
                    ) : (
                        <div>아직 참여한 채팅방이 없습니다.</div>
                    )}
                </ChatRoomList>
            </div>
        </BaseScreen>
    );
}
