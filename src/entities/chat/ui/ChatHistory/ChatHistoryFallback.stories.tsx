import { ChatHistoryFallback } from "@/entities/chat/ui/ChatHistory/ChatHistoryFallback";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatHistoryFallback> = {
    title: "Entities/Chat/ChatHistoryFallback",
    component: ChatHistoryFallback,
};

export default meta;
type Story = StoryObj<typeof ChatHistoryFallback>;

export const Default: Story = {
    args: {},
};
