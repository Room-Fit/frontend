import { ChatInput } from "@/entities/chat/ui/ChatInput/ChatInput";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatInput> = {
    title: "Entities/Chat/ChatInput",
    component: ChatInput,
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof ChatInput>;

export const Default: Story = {
    args: {},
};
