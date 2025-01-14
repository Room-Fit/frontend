import { formElementMap, FormElementType } from "@/entities/form/config";
import { FormStateContextProvider } from "@/entities/form/contexts";
import { FormSchema } from "@/entities/form/types";

export interface FormProps {
    formSchema: FormSchema;
}
export const DynamicForm = ({ formSchema }: FormProps) => {
    return (
        <FormStateContextProvider formInitialState={formSchema}>
            {formSchema.questions.map((question) => {
                const Component = formElementMap[question.type as FormElementType];
                return <Component {...question} />;
            })}
        </FormStateContextProvider>
    );
};
