import { useRef, useState } from "react";
import { toast } from "react-toastify";

import { verifyEmailVerificationCode } from "@/features/auth/service/emailVerify";
import { useSignUpStore } from "@/features/auth/store/useSignUpStore";
import { renderToastFromDerivedError } from "@/shared/utils/renderToastFromDerivedError";

export const useEmailVerify = () => {
    const [isVerified, setIsVerified] = useState(false);

    const emailVerificationCodeRef = useRef<HTMLInputElement>(null);
    const { authToken } = useSignUpStore();

    const verifyCode = async () => {
        const verificationCode = emailVerificationCodeRef.current?.value as string;

        await toast
            .promise(
                verifyEmailVerificationCode({
                    authToken: authToken,
                    code: verificationCode,
                }),
                {
                    success: "인증 성공!",
                    pending: "인증 중 입니다",
                    error: renderToastFromDerivedError,
                },
            )
            .then(() => {
                setIsVerified(true);
            });
    };

    return {
        emailVerificationCodeRef,
        isVerified,
        verifyCode,
    };
};
