import { TextDisplay } from "./TextDisplay";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextDisplay> = {
    title: "Components/Display/TextDisplay",
    component: TextDisplay,
};

export default meta;
type Story = StoryObj<typeof TextDisplay>;

export const Default: Story = {
    args: {
        children: "코골이, 이갈이, 잠꼬대",
    },
};

export const Overflow: Story = {
    args: {
        children:
            "코골이, 이갈이, 잠꼬대, 코골이, 이갈이, 잠꼬대, 코골이, 이갈이, 잠꼬대, 코골이, 이갈이, 잠꼬대",
    },
};
