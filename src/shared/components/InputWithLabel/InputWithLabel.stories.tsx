import { InputWithLabel } from "@/shared/components/InputWithLabel/InputWithLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputWithLabel> = {
    title: "Form/InputWithLabel",
    component: InputWithLabel,
};

export default meta;
type Story = StoryObj<typeof InputWithLabel>;

export const Default: Story = {
    args: {
        id: "email",
        label: "아이디 (이메일)",
        placeholder: "roomfit@knu.ac.kr",
    },
};
