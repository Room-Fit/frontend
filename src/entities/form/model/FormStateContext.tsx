import { createContext } from "react";

import { FormDispatchAction } from "@/entities/form/hooks/useFormStateContext";
import { FormSchema } from "@/entities/form/types";

export const FormStateContext = createContext<{
    formState: FormSchema;
    dispatch: React.Dispatch<FormDispatchAction>;
} | null>(null);
