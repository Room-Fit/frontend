import { FormStateContextProvider } from "@/entities/form/model/FormStateContextProvider";
import { FormSchema } from "@/entities/form/types";
import { SliderFormElement } from "@/entities/form/ui/SliderFormElement";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SliderFormElement> = {
    title: "Entity/Form/SliderFormElement",
    component: SliderFormElement,
};

export default meta;
type Story = StoryObj<typeof SliderFormElement>;

const formInitialState: FormSchema = {
    _id: "_id",
    title: "잠귀",
    description: "잠귀에 대한 민감도를 선택해주세요.",
    questions: [
        {
            questionId: 1,
            questionText: "잠귀에 대한 민감도를 선택해주세요.",
            questionType: "slider",
            dataType: "string",
            options: [
                { label: "밝음", value: "1" },
                { label: "어두움", value: "10" },
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
                <SliderFormElement
                    questionId={args.questionId}
                    questionText={args.questionText}
                    options={args.options}
                ></SliderFormElement>
            </FormStateContextProvider>
        );
    },
};
