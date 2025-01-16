import { FormStateContextProvider } from "@/entities/form/contexts";
import { FormSchema } from "@/entities/form/types";
import { SelectorFormElement } from "@/entities/form/ui/SelectorFormElement";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectorFormElement> = {
    title: "Entity/Form/SelectorFormElement",
    component: SelectorFormElement,
};

export default meta;
type Story = StoryObj<typeof SelectorFormElement>;

const formInitialState: FormSchema = {
    id: 1,
    title: "선호하는 색상",
    description: "선호하는 색상을 선택해주세요.",
    questions: [
        {
            id: 1,
            title: "선호하는 색상이 무엇인가요?",
            type: "SELECTOR",
            options: [
                { label: "빨강", value: "Red" },
                { label: "초록", value: "Green" },
                { label: "파랑", value: "Blue" },
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
                <SelectorFormElement
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
