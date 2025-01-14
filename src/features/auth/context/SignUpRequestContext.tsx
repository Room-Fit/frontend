import { createContext } from "react";

import { SignUpRequestContextAction } from "@/features/auth/hooks/useSignUpContext";
import { SignUpRequestBody } from "@/features/auth/service/signUp";

export const SignUpRequestContext = createContext<{
    state: SignUpRequestBody;
    dispatch: React.Dispatch<SignUpRequestContextAction>;
} | null>(null);
