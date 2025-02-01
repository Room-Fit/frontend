import { DynamicReply } from "@/entities/profile/ui/DynamicReply/DynamicReply";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DynamicReply> = {
    title: "Entities/Profile/DynamicReply",
    component: DynamicReply,
};

export default meta;
type Story = StoryObj<typeof DynamicReply>;

export const Default: Story = {
    args: {},
};
