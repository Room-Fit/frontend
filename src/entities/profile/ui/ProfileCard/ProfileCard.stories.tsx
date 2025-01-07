import { ProfileCard } from "@/entities/profile/ui/ProfileCard/ProfileCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileCard> = {
    title: "Components/Display/ProfileCard",
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
    args: {
        id: 1,
        name: "김대건",
        studentId: 20,
        birthYear: 2000,
        mbti: "ESTP",

        className: "w-[380px]",
    },
};
