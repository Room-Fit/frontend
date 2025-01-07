import { ProfileGroup } from "@/entities/profile/ui/ProfileGroup/ProfileGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileGroup> = {
    title: "ProfileGroup",
    component: ProfileGroup,
};

export default meta;
type Story = StoryObj<typeof ProfileGroup>;

export const Default: Story = {
    args: {
        className: "w-[400px] h-[400px]",
    },
};
