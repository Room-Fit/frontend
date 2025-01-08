import { ChatHistoryTime } from "@/entities/chat/ui/ChatHistory/ChatHistoryTime";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatHistoryTime> = {
    title: "Entities/Chat/ChatHistoryTime",
    component: ChatHistoryTime,
};

export default meta;
type Story = StoryObj<typeof ChatHistoryTime>;

export const Default: Story = {
    args: {
        timeStamp: "2022-01-01T00:00:00+09:00",
    },
};
