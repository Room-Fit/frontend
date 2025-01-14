import { sendEmailVerificationCode } from "@/features/auth/service/emailCode";
import { verifyEmailVerificationCode } from "@/features/auth/service/emailVerify";
import { signUp } from "@/features/auth/service/signUp";

export const authService = {
    signUp,
    sendEmailVerificationCode,
    verifyEmailVerificationCode,
};
