import { Card } from "@/shared/components/Card/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
    title: "Shared/Card",
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        theme: "blue",
        children: <div className="p-12" />,
    },
};

export const Gray: Story = {
    args: {
        theme: "gray",
        children: <div className="p-12" />,
    },
};

export const GrayTransparent: Story = {
    args: {
        theme: "grayTransparent",
        children: <div className="p-12" />,
    },
};

export const BlueTransparent: Story = {
    args: {
        theme: "blueTransparent",
        children: <div className="p-12" />,
    },
};
