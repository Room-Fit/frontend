import { EnterChatRoomButton } from "@/features/match/ui/EnterChatRoomButton";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EnterChatRoomButton> = {
    title: "Features/Match/EnterChatRoomButton",
    component: EnterChatRoomButton,
};

export default meta;
type Story = StoryObj<typeof EnterChatRoomButton>;

export const Default: Story = {
    args: {
        theme: "bg-primary",
        content: "참여하기",
    },
};

export const RequestMate: Story = {
    args: {
        theme: "bg-white border border-primary text-primary ",
        content: "룸메이트 신청",
    },
};
