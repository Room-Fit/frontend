import { forwardRef } from "react";

import { formElementMap, FormElementType } from "@/entities/form/config";
import { FormStateContextProvider } from "@/entities/form/contexts";
import { FormSchema } from "@/entities/form/types";

export interface FormProps {
    formSchema: FormSchema;
}

export interface DynamicFormRef {
    getFormState: () => FormSchema;
}

export const DynamicForm = forwardRef<DynamicFormRef, FormProps>(({ formSchema }, ref) => {
    return (
        <FormStateContextProvider formInitialState={formSchema} ref={ref}>
            <div className="flex flex-col gap-3">
                {formSchema.questions.map((question) => {
                    const Component = formElementMap[question.type as FormElementType];
                    return <Component {...question} />;
                })}
            </div>
        </FormStateContextProvider>
    );
});
