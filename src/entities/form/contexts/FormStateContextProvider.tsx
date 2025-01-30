import { forwardRef, useImperativeHandle, useLayoutEffect, useReducer } from "react";

import { FormStateContext } from "@/entities/form/contexts";
import { FORM_DISPATCH_ACTION_TYPES, formReducer } from "@/entities/form/hooks/useFormStateContext";
import { FormSchema } from "@/entities/form/types";
import { DynamicFormRef } from "@/entities/form/ui/DynamicForm/DynamicForm";

export interface FormStateContextProviderProps {
    formInitialState: FormSchema;
    children?: React.ReactNode;
}

export const FormStateContextProvider = forwardRef<DynamicFormRef, FormStateContextProviderProps>(
    ({ formInitialState, children }, ref) => {
        const [formState, dispatch] = useReducer<typeof formReducer>(formReducer, formInitialState);

        useImperativeHandle(ref, () => {
            return { getFormState: () => formState };
        });

        useLayoutEffect(
            () => dispatch({ type: FORM_DISPATCH_ACTION_TYPES.INITIALIZE_FORM_STATUS }),
            [],
        );
        return (
            <FormStateContext.Provider
                value={{
                    formState,
                    dispatch,
                }}
            >
                {children}
            </FormStateContext.Provider>
        );
    },
);
