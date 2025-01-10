import { ChatHistoryItem } from "@/entities/chat/ui/ChatHistory/ChatHistoryItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatHistoryItem> = {
    title: "Entities/Chat/ChatHistoryItem",
    component: ChatHistoryItem,
    argTypes: {
        type: {
            control: {
                type: "radio",
                options: ["send", "receive"],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ChatHistoryItem>;

export const Send: Story = {
    args: {
        author: "보내는 사람",
        type: "send",
        message: "최대 말풍선 길이입니다 다람쥐다람쥐다람쥐다람쥐",
        timeStamp: "2023-10-05T14:48:00+09:00",
    },
};

export const Receive: Story = {
    args: {
        author: "받는 사람",
        type: "receive",
        message: "최대 말풍선 길이입니다 다람쥐다람쥐다람쥐다람쥐",
        timeStamp: "2023-10-05T14:48:00+09:00",
    },
};