import { Selector } from "./Selector";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Selector> = {
    title: "Shared/Selector",
    component: Selector,
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {
    args: {
        placeholder: "옵션을 선택해주세요",
        options: [
            { label: "옵션 1", value: "1" },
            { label: "옵션 2", value: "2" },
            { label: "옵션 3", value: "3" },
        ],
    },
};
