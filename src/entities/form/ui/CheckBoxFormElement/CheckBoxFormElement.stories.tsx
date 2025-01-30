import { FormStateContextProvider } from "@/entities/form/contexts";
import { FormSchema } from "@/entities/form/types";
import { CheckboxFormElement } from "@/entities/form/ui/CheckBoxFormElement/CheckboxFormElement";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxFormElement> = {
    title: "Entity/Form/CheckboxFormElement",
    component: CheckboxFormElement,
};

export default meta;
type Story = StoryObj<typeof CheckboxFormElement>;

const formInitialState: FormSchema = {
    id: 1,
    title: "선호하는 색상",
    description: "선호하는 색상을 선택해주세요.",
    questions: [
        {
            id: 1,
            title: "선호하는 색상이 무엇인가요?",
            type: "CHECKBOX",
            optionDelimiter: null,
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
