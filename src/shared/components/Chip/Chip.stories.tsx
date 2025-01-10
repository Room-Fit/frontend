import { Chip } from "@/shared/components/Chip/Chip";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Chip> = {
    title: "",
    component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Blue: Story = {
    args: {
        theme: "blue",
        children: "프로필",
    },
};

export const Gray: Story = {
    args: {
        theme: "gray",
        children: "프로필",
    },
};
