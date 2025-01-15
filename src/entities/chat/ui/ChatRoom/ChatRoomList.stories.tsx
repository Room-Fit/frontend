import { ChatRoomList } from "@/entities/chat/ui/ChatRoom/ChatRoomList";
import { ChatRoomListItem } from "@/entities/chat/ui/ChatRoom/ChatRoomListItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatRoomList> = {
    title: "Entities/Chat/ChatRoomList",
    component: ChatRoomList,
};

export default meta;
type Story = StoryObj<typeof ChatRoomList>;

export const Default: Story = {
    args: {},
    render: () => {
        return (
            <ChatRoomList>
                <ChatRoomListItem
                    isNotReadMessageExist={true}
                    title="채팅방 이름은 핏글 제목과 동일"
                    lastMessage="읽지 않은 메시지가 있는 채팅방은 이렇게 활성화하는 거 어케 생각하시는지..가장 최근 채팅내용 입니다람쥐다람쥐"
                    lastMessageTimeStamp="12:43"
                />
                <ChatRoomListItem
                    isNotReadMessageExist={true}
                    title="채팅방 이름은 핏글 제목과 동일"
                    lastMessage="읽지 않은 메시지가 있는 채팅방은 이렇게 활성화하는 거 어케 생각하시는지.."
                    lastMessageTimeStamp="12:43"
                />
                <ChatRoomListItem
                    isNotReadMessageExist={false}
                    title="채팅방 이름은 핏글 제목과 동일"
                    lastMessage="읽지 않은 메시지가 있는 채팅방은 이렇게 활성화하는 거 어케 생각하시는지.."
                    lastMessageTimeStamp="12:43"
                />
            </ChatRoomList>
        );
    },
};
