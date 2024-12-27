import { useLayoutEffect, useReducer } from "react";

import { FormStateContext } from "@/entities/form/contexts";
import { FORM_DISPATCH_ACTION_TYPES, formReducer } from "@/entities/form/hooks/useFormStateContext";
import { FormSchema } from "@/entities/form/types";

export interface FormStateContextProviderProps {
    formInitialState: FormSchema;
    children: React.ReactNode;
}

export const FormStateContextProvider = ({
    formInitialState,
    children,
}: FormStateContextProviderProps) => {
    const [formState, dispatch] = useReducer<typeof formReducer>(formReducer, formInitialState);

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
};
