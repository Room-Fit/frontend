import { useEffect, useState } from "react";

import { ToggleButtonGroup } from "@/shared/components/ToggleButtonGroup/ToggleButtonGroup";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToggleButtonGroup> = {
    title: "Components/Form/ToggleButtonGroup",
    component: ToggleButtonGroup,
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

const ToggleButtonGroupExample = ({ options }: { options: string[] }) => {
    const [option, setOption] = useState("수면환경");

    useEffect(() => {
        console.log({ option });
    }, [option]);

    return <ToggleButtonGroup options={options} onChange={setOption} />;
};

export const Default: Story = {
    args: {
        options: ["수면환경", "환경정보", "생활 및 관계", "취미 및 활동"],
    },
    render: (args) => {
        return <ToggleButtonGroupExample options={args.options} />;
    },
};
