import { FormStateContextProvider } from "@/entities/form/model/FormStateContextProvider";
import { CheckboxFormElement } from "@/entities/form/ui/CheckboxFormElement";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxFormElement> = {
    title: "Entity/Form/CheckboxFormElement",
    component: CheckboxFormElement,
};

export default meta;
type Story = StoryObj<typeof CheckboxFormElement>;

const formInitialState = {
    _id: "_id",
    title: "선호하는 색상",
    description: "선호하는 색상을 선택해주세요.",
    questions: [
        {
            questionId: 1,
            questionText: "선호하는 색상이 무엇인가요?",
            questionType: "checkbox",
            dataType: "string",
            options: [
                { label: "빨강", value: "Red" },
                { label: "초록", value: "Green" },
                { label: "파랑", value: "Blue" },
            ],
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
                <CheckboxFormElement
                    questionId={args.questionId}
                    questionText={args.questionText}
                    options={args.options}
                ></CheckboxFormElement>
            </FormStateContextProvider>
        );
    },
};
