import { FormStateContextProvider } from "@/entities/form/contexts";
import { FormSchema } from "@/entities/form/types";
import { DoubleSliderFormElement } from "@/entities/form/ui/DoubleSliderFormElement";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DoubleSliderFormElement> = {
    title: "Entity/Form/DoubleSliderFormElement",
    component: DoubleSliderFormElement,
};

export default meta;
type Story = StoryObj<typeof DoubleSliderFormElement>;

const formInitialState: FormSchema = {
    id: 1,
    title: "경북대학교 2025년 룸핏 모집공고",
    description: "경북대학교 2025년 룸핏 모집공고",
    questions: [
        {
            id: 1,
            title: "기상시간",
            type: "doubleSlider",
            options: [
                { label: "최소", value: "4" },
                { label: "최대", value: "12" },
            ],
            optionDelimiter: "시",
        },
    ],
};

export const Default: Story = {
    args: {
        ...formInitialState.questions[0],
    },
    render: (args) => {
        return (
            <FormStateContextProvider formInitialState={formInitialState}>
                <DoubleSliderFormElement
                    id={args.id}
                    title={args.title}
                    options={args.options}
                    type={args.type}
                    optionDelimiter={args.optionDelimiter}
                />
            </FormStateContextProvider>
        );
    },
};
