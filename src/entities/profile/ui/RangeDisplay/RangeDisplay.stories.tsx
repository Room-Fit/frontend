import { RangeDisplay } from "./RangeDisplay";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RangeDisplay> = {
    component: RangeDisplay,
};

export default meta;
type Story = StoryObj<typeof RangeDisplay>;

export const Default: Story = {
    args: {
        minRange: 0,
        maxRange: 10,
        minValue: 1,
        maxValue: 8,
        minLabel: "Min",
        maxLabel: "Max",

        className: "w-[300px]",
    },
};
