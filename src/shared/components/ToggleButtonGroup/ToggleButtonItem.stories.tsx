import { ToggleButtonItem } from "@/shared/components/ToggleButtonGroup/ToggleButtonItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToggleButtonItem> = {
    title: "Components/Form/ToggleButtonItem",
    component: ToggleButtonItem,
};

export default meta;
type Story = StoryObj<typeof ToggleButtonItem>;

export const Selected: Story = {
    args: {
        isSelected: true,
        option: "수면환경",
    },
};

export const UnSelected: Story = {
    args: {
        isSelected: false,
        option: "수면환경",
    },
};
