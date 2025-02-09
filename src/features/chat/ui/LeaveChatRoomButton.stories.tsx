import { LeaveChatRoomButton } from "@/features/chat/ui/LeaveChatRoomButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LeaveChatRoomButton> = {
    title: "Feature/Chat/LeaveChatRoomButton",
    component: LeaveChatRoomButton,
};

export default meta;
type Story = StoryObj<typeof LeaveChatRoomButton>;

export const Default: Story = {
    args: {},
};
