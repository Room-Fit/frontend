import { sendEmailVerificationCode } from "@/features/auth/service/emailCode";
import { verifyEmailVerificationCode } from "@/features/auth/service/emailVerify";
import { signIn } from "@/features/auth/service/signIn";
import { signUp } from "@/features/auth/service/signUp";

export const authService = {
    signIn,
    signUp,
    sendEmailVerificationCode,
    verifyEmailVerificationCode,
}