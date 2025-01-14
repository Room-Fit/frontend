import { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

import { useFlow } from "@/apps/stackflow";

import { useSignUpContext } from "@/features/auth/hooks/useSignUpContext";
import { authService } from "@/features/auth/service";
import { renderToastFromDerivedError } from "@/shared/utils/renderToastFromDerivedError";

export const useSignUp = () => {
    const { state, dispatch } = useSignUpContext();
    const { push } = useFlow();

    const [isVerifyComponentVisible, setIsVerifyComponentVisible] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);

    const emailRef = useRef<HTMLInputElement>(null);
    const emailVerificationCodeRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const isPasswordMatch = password === passwordConfirm;

    const sendEmailVerificationCode = useCallback(async () => {
        if (!emailRef.current?.value) return;
        const email = emailRef.current.value;

        await toast
            .promise(authService.sendEmailVerificationCode({ email }), {
                success: "인증 코드 발송 성공!",
                pending: "인증 코드 발송 중 입니다",
                error: renderToastFromDerivedError,
            })
            .then(() => {
                setIsVerifyComponentVisible(true);
            });
    }, []);

    const verifyEmailVerificationCode = useCallback(async () => {
        if (!emailVerificationCodeRef.current?.value) return;
        const verificationCode = emailVerificationCodeRef.current.value;

        await toast
            .promise(authService.verifyEmailVerificationCode({ code: verificationCode }), {
                success: "인증 성공!",
                pending: "인증 중 입니다",
                error: renderToastFromDerivedError,
            })
            .then(() => {
                setIsVerified(true);
            });
    }, []);

    const toHomePage = useCallback(() => {
        push("HomePage", {});
    }, [push]);

    const toSignUpVerifySection = useCallback(() => {
        push("SignUpPage", { section: 1 });
    }, [push]);

    const toSignUpInfoSection = useCallback(() => {
        if (!isVerified) {
            toast.error("이메일 인증을 먼저 해주세요");
            return;
        }
        if (!password) {
            toast.error("비밀번호를 입력해주세요");
            return;
        }
        if (!isPasswordMatch) {
            toast.error("비밀번호가 일치하지 않습니다");
            return;
        }

        push("SignUpPage", { section: 2 });
    }, [isPasswordMatch, isVerified, password, push]);

    return {
        state,
        dispatch,

        emailRef,
        sendEmailVerificationCode,

        isVerified,
        isVerifyComponentVisible,
        emailVerificationCodeRef,
        verifyEmailVerificationCode,

        isPasswordMatch,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm,

        toHomePage,
        toSignUpVerifySection,
        toSignUpInfoSection,
    };
};
