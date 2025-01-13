import { signInHandlers } from "@/__mocks__/auth/signIn";
import { signUpHandlers } from "@/__mocks__/auth/signUp";

export const authHandlers = [...signInHandlers, ...signUpHandlers];
