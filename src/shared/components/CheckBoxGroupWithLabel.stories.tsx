import { CheckBoxGroupWithLabel } from "@/shared/components/CheckBoxGroupWithLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckBoxGroupWithLabel> = {
    title: "shared/CheckBoxGroupWithLabel",
    component: CheckBoxGroupWithLabel,
};

export default meta;
type Story = StoryObj<typeof CheckBoxGroupWithLabel>;

export const Default: Story = {
    args: {
        label: "모집상태",
        options: ["모집중", "모집완료", "매칭완료"],
        groupClassName: "flex gap-2",
    },
};
