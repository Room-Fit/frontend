import { NavPrevious } from "@/shared/components/NavPrevious";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavPrevious> = {
    title: "Shared/NavPrevious",
    component: NavPrevious,
};

export default meta;
type Story = StoryObj<typeof NavPrevious>;

export const Default: Story = {
    args: {},
};
