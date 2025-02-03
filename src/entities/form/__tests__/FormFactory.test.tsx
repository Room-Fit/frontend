import { FormFactory } from "@/entities/form/lib/FormFactory";
import { FormSchema } from "@/entities/form/types";
import { CheckboxFormElement } from "@/entities/form/ui/CheckBoxFormElement/CheckboxFormElement";
import { SelectorFormElement } from "@/entities/form/ui/SelectorFormElement/SelectorFormElement";

describe("FormFactory", () => {
    describe("createFormBySchema()", () => {
        describe("FormSchema.questions 의 각 question.questionType 에 해당하는 FormElement 를 생성한다", () => {
            let formSchema: FormSchema;

            beforeEach(() => {
                formSchema = {
                    id: 1,
                    title: "test-title",
                    description: "test-description",
                    questions: [
                        {
                            id: 1,
                            title: "test-question-text",
                            type: "",
                            options: [],
                            optionDelimiter: null,
                        },
                    ],
                };
            });

            test("questionType 이 selector 인 경우 SelectorFormElement 를 반환한다", () => {
                formSchema.questions[0].type = "SELECTOR";

                const form = FormFactory.createFormBySchema(formSchema);
                expect(form).toContain(SelectorFormElement);
            });

            test("questionType 이 checkbox 인 경우 CheckboxFormElement 를 반환한다", () => {
                formSchema.questions[0].type = "CHECKBOX";

                const form = FormFactory.createFormBySchema(formSchema);
                expect(form).toContain(CheckboxFormElement);
            });
        });
    });
});
