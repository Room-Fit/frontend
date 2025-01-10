import { ChatHistoryGroup } from "@/entities/chat/ui/ChatHistory/ChatHistoryGroup";
import { ChatHistoryItem } from "@/entities/chat/ui/ChatHistory/ChatHistoryItem";
import { ChatHistoryTime } from "@/entities/chat/ui/ChatHistory/ChatHistoryTime";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatHistoryGroup> = {
    title: "Entities/Chat/ChatHistoryGroup",
    component: ChatHistoryGroup,
};

export default meta;
type Story = StoryObj<typeof ChatHistoryGroup>;

export const Default: Story = {
    args: {},
    render: () => {
        return (
            <ChatHistoryGroup>
                <ChatHistoryTime timeStamp={"2022-01-01T00:00:00+09:00"} />

                <ChatHistoryItem
                    type="send"
                    author="김룸핏"
                    message="방 진짜 드릅게 쓰시네요 쓰레기장인줄"
                    timeStamp={"2022-01-01T00:43:00+09:00"}
                />

                <ChatHistoryItem
                    type="receive"
                    author="서룸핏"
                    message="누가 누구보고 지적질하는진 모르겠는데, 님이 더 쓰레기 같아요"
                    timeStamp={"2022-01-01T00:52:00+09:00"}
                />
            </ChatHistoryGroup>
        );
    },
};
