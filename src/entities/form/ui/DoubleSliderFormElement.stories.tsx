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
    _id: "_id",
    title: "경북대학교 2025년 룸핏 모집공고",
    description: "경북대학교 2025년 룸핏 모집공고",
    questions: [
        {
            questionId: 1,
            questionText: "기상시간",
            questionType: "doubleSlider",
            options: [
                { label: "최소", value: "4" },
                { label: "최대", value: "12" },
                { label: "단위", value: "시" },
            ],
            dataType: "string",
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
                    questionId={args.questionId}
                    questionText={args.questionText}
                    options={args.options}
                />
            </FormStateContextProvider>
        );
    },
};
