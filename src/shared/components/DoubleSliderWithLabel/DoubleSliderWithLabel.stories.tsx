import { useState } from "react";

import {
    DoubleSliderWithLabel,
    DoubleSliderWithLabelProps,
} from "@/shared/components/DoubleSliderWithLabel/DoubleSliderWithLabel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DoubleSliderWithLabel> = {
    title: "Shared/DoubleSliderWithLabel",
    component: DoubleSliderWithLabel,
};

export default meta;
type Story = StoryObj<typeof DoubleSliderWithLabel>;

const Example = (props: DoubleSliderWithLabelProps) => {
    const [value, setValue] = useState([props.min, props.max]);

    return (
        <DoubleSliderWithLabel
            value={value as number[]}
            onValueChange={(value) => setValue(value)}
            {...props}
        />
    );
};

export const Default: Story = {
    args: {
        formElementLabel: "모집인원",
        min: 1,
        max: 4,
        step: 1,
        unit: "명",
    },
    render: (args) => {
        return <Example {...args} />;
    },
};
