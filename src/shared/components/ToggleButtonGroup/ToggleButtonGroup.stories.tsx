import { useEffect, useState } from "react";

import { ToggleButtonGroup } from "@/shared/components/ToggleButtonGroup/ToggleButtonGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToggleButtonGroup> = {
    title: "Components/Form/ToggleButtonGroup",
    component: ToggleButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

const ToggleButtonGroupExample = ({
    defaultOption,
    options,
}: {
    defaultOption: string;
    options: string[];
}) => {
    const [option, setOption] = useState("수면환경");

    useEffect(() => {
        console.log({ option });
    }, [option]);

    return (
        <ToggleButtonGroup options={options} defaultOption={defaultOption} onChange={setOption} />
    );
};

export const Default: Story = {
    args: {
        defaultOption: "수면환경",
        options: ["수면환경", "환경정보", "생활 및 관계", "취미 및 활동"],
    },
    render: (args) => {
        return (
            <ToggleButtonGroupExample defaultOption={args.defaultOption} options={args.options} />
        );
    },
};
