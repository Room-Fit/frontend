import { ChatProfileCard } from "@/entities/profile/ui/ChatProfileCard/ChatProfileCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatProfileCard> = {
    title: "Entities/Chat/ChatProfileCard",
    component: ChatProfileCard,
};

export default meta;
type Story = StoryObj<typeof ChatProfileCard>;

export const Default: Story = {
    args: {
        id: 1,
        name: "김대건",
        description: "경북대학교 컴퓨터학부",
        className: "w-[350px]",
    },
};
