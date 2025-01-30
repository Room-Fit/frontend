import { DoubleSliderDisplay } from "@/entities/profile/ui/DoubleSliderDisplay/DoubleSliderDisplay";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DoubleSliderDisplay> = {
    title: "Entities/Profile/DoubleSliderDisplay",
    component: DoubleSliderDisplay,
};

export default meta;
type Story = StoryObj<typeof DoubleSliderDisplay>;

export const Default: Story = {
    args: {
        title: "기상시간",
        options: [
            { id: 1, label: "min", value: "4" },
            { id: 2, label: "max", value: "12" },
        ],
        optionDelimiter: "시",
    },
};
