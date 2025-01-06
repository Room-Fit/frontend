import { CheckBoxWithLabel } from "@/shared/components/CheckBoxWithLabel/CheckBoxWithLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckBoxWithLabel> = {
    title: "Components/Form/CheckBoxWithLabel",
    component: CheckBoxWithLabel,
};

export default meta;
type Story = StoryObj<typeof CheckBoxWithLabel>;

export const Default: Story = {
    args: {
        id: "option",
        label: "Option",
    },
};
