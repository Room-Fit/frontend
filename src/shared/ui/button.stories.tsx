import { Button } from "./button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
    title: "Components/Form/Button",
    component: Button,
    args: {
        size: "default",
    },
    argTypes: {
        variant: {
            options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
            control: { type: "select" },
        },
        size: {
            options: ["default", "sm", "lg", "icon"],
            control: { type: "select" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        variant: "default",
        children: "Button",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Button",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "Button",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Button",
    },
};

export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Button",
    },
};

export const Link: Story = {
    args: {
        variant: "link",
        children: "Button",
    },
};
