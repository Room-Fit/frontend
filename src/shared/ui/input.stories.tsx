import { Input } from "./input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
    title: "Components/Form/Input",
    component: Input,
    args: {
        type: "text",
    },
    argTypes: {
        type: {
            options: ["text", "password", "email", "number", "tel"],
            control: { type: "radio" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: "Placeholder",
    },
};
