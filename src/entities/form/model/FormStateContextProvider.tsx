import { useEffect, useReducer } from "react";

import { FORM_DISPATCH_ACTION_TYPES, formReducer } from "@/entities/form/hooks/useFormStateContext";
import { FormStateContext } from "@/entities/form/model/FormStateContext";
import { FormSchema } from "@/entities/form/types";

export interface FormStateContextProviderProps {
    formInitialState: FormSchema;
    children: React.ReactNode;
}

export const FormStateContextProvider = ({
    formInitialState,
    children,
}: FormStateContextProviderProps) => {
    const [formState, dispatch] = useReducer(formReducer, formInitialState);

    useEffect(() => dispatch({ type: FORM_DISPATCH_ACTION_TYPES.INITIALIZE_FORM_STATUS }), []);

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
};
