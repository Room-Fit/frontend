import { FormFactory } from "@/entities/form/lib/FormFactory";
import { FormSchema } from "@/entities/form/types";
import { CheckboxFormElement } from "@/entities/form/ui/CheckboxFormElement";
import { SelectorFormElement } from "@/entities/form/ui/SelectorFormElement";

describe("FormFactory", () => {
    describe("createFormBySchema()", () => {
        describe("FormSchema.questions 의 각 question.questionType 에 해당하는 FormElement 를 생성한다", () => {
            let formSchema: FormSchema;

            beforeEach(() => {
                formSchema = {
                    _id: "_id",
                    title: "test-title",
                    description: "test-description",
                    questions: [
                        {
                            questionId: 1,
                            questionText: "test-question-text",
                            questionType: "",
                            options: [],
                            dataType: "string",
                        },
                    ],
                };
            });

            test("questionType 이 selector 인 경우 SelectorFormElement 를 반환한다", () => {
                formSchema.questions[0].questionType = "selector";

                const form = FormFactory.createFormBySchema(formSchema);
                expect(form).toContain(SelectorFormElement);
            });

            test("questionType 이 checkbox 인 경우 CheckboxFormElement 를 반환한다", () => {
                formSchema.questions[0].questionType = "checkbox";

                const form = FormFactory.createFormBySchema(formSchema);
                expect(form).toContain(CheckboxFormElement);
            });
        });
    });
});
