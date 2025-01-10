import { ChatNavTop } from "@/entities/chat/ui/ChatNavTop/ChatNavTop";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatNavTop> = {
    title: "Entities/Chat/ChatNavTop",
    component: ChatNavTop,
};

export default meta;
type Story = StoryObj<typeof ChatNavTop>;

export const Default: Story = {
    args: {
        title: "채팅방 이름",
        currentQuota: 2,
        maxQuota: 4,
    },
};
