import { formElementMap, FormElementType } from "@/entities/form/config/formElementTypes";
import { FormSchema } from "@/entities/form/types";

export class FormFactory {
    public static createFormBySchema(schema: FormSchema) {
        return schema.questions.map((question) => {
            return formElementMap[question.questionType as FormElementType];
        });
    }
}
