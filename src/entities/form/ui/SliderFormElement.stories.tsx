import { FormStateContextProvider } from "@/entities/form/contexts";
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
    id: 1,
    title: "잠귀",
    description: "잠귀에 대한 민감도를 선택해주세요.",
    questions: [
        {
            id: 1,
            title: "잠귀에 대한 민감도를 선택해주세요.",
            type: "SLIDER",
            options: [
                { label: "밝음", value: "1" },
                { label: "어두움", value: "10" },
            ],
            optionDelimiter: null,
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
                    id={args.id}
                    title={args.title}
                    options={args.options}
                    optionDelimiter={args.optionDelimiter}
                    type={args.type}
                ></SliderFormElement>
            </FormStateContextProvider>
        );
    },
};
