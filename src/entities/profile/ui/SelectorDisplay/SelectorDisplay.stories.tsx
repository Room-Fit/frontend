import { SelectorDisplay } from "@/entities/profile/ui/SelectorDisplay/SelectorDisplay";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectorDisplay> = {
    title: "Entities/Profile/SelectorDisplay",
    component: SelectorDisplay,
};

export default meta;
type Story = StoryObj<typeof SelectorDisplay>;

export const Default: Story = {
    args: {
        title: "선호하는 색상",
        options: [{ id: 1, label: "빨강", value: "true" }],
    },
};
