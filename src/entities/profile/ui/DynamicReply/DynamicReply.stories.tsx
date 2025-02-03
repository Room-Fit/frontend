import { DynamicReply } from "@/entities/profile/ui/DynamicReply/DynamicReply";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DynamicReply> = {
    title: "Entities/Profile/DynamicReply",
    component: DynamicReply,
};

export default meta;
type Story = StoryObj<typeof DynamicReply>;

export const Default: Story = {
    args: {
        questions: [
            {
                id: 1,
                title: "기상시간",
                type: "DOUBLE_SLIDER",
                optionDelimiter: "시",
                options: [
                    {
                        id: 1,
                        label: "min",
                        value: "9",
                    },
                    {
                        id: 2,
                        label: "max",
                        value: "12",
                    },
                ],
            },
            {
                id: 2,
                title: "취침시간",
                type: "DOUBLE_SLIDER",
                optionDelimiter: "시",
                options: [
                    {
                        id: 3,
                        label: "min",
                        value: "25",
                    },
                    {
                        id: 4,
                        label: "max",
                        value: "27",
                    },
                ],
            },
            {
                id: 3,
                title: "잠귀",
                type: "SELECTOR",
                optionDelimiter: null,
                options: [
                    {
                        id: 5,
                        label: "어두움",
                        value: "어두움",
                    },
                ],
            },
        ],
    },
};
