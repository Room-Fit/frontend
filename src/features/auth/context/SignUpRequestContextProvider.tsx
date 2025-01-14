import { useReducer } from "react";

import { SignUpRequestContext } from "@/features/auth/context/SignUpRequestContext";
import { signUpContextReducer } from "@/features/auth/hooks/useSignUpContext";

export interface SignUpRequestContextProviderProps {
    children?: React.ReactNode;
}

export const SignUpRequestContextProvider = ({ children }: SignUpRequestContextProviderProps) => {
    const [state, dispatch] = useReducer<typeof signUpContextReducer>(signUpContextReducer, {
        email: "",
        password: "",
        nickname: "",
        birth: "",
        studentId: "",
        department: "",
        gender: "",
    });

    return (
        <SignUpRequestContext.Provider value={{ state, dispatch }}>
            {children}
        </SignUpRequestContext.Provider>
    );
};
