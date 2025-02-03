import { CheckBoxDisplay } from "@/entities/profile/ui/CheckBoxDisplay/CheckBoxDisplay";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckBoxDisplay> = {
    title: "Entities/Profile/CheckBoxDisplay",
    component: CheckBoxDisplay,
};

export default meta;
type Story = StoryObj<typeof CheckBoxDisplay>;

export const Default: Story = {
    args: {
        title: "선호하는 색상",
        options: [
            { id: 1, label: "빨강", value: "true" },
            { id: 2, label: "노랑", value: "true" },
            { id: 3, label: "파랑", value: "true" },
        ],
    },
};
