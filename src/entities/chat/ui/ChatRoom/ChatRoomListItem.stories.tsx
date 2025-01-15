import { ChatRoomListItem } from "@/entities/chat/ui/ChatRoom/ChatRoomListItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatRoomListItem> = {
    title: "Entities/Chat/ChatRoomListItem",
    component: ChatRoomListItem,
};

export default meta;
type Story = StoryObj<typeof ChatRoomListItem>;

export const MessageOverFlow: Story = {
    args: {
        isNotReadMessageExist: true,
        title: "채팅방 이름",
        lastMessage:
            "읽지 않은 메시지가 있는 채팅방은 이렇게 활성화하는 거 어케 생각하시는지 읽지 않은 메시지가 있는 채팅방은 이렇게 활성화하는 거 어케 생각하시는지",
        lastMessageTimeStamp: "12:43",
    },
};

export const TitleOverFlow: Story = {
    args: {
        isNotReadMessageExist: true,
        imgSrc: "https://images.knud2024.com/archive/archive1.webp",
        title: "진짜 완전 미친듯이 매우 긴 채팅방 이름 때문에 오버플로우가 발생하는 진짜 긴 채팅방 이름",
        lastMessage: "읽지 않은 메시지가 있는 채팅방",
        lastMessageTimeStamp: "12:43",
    },
};
