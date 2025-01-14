import { useCallback, useRef, useState } from "react";
import { toast } from "react-toastify";

import { useFlow } from "@/apps/stackflow";

import { useSignUpContext } from "@/features/auth/hooks/useSignUpContext";
import { authService } from "@/features/auth/service";
import { SignUpInfoSchema, SignUpVerifySchema } from "@/features/auth/service/signUp";
import { renderToastFromDerivedError } from "@/shared/utils/renderToastFromDerivedError";
import { ThrownZodError } from "@/shared/utils/zodSchemaTest";

export const useSignUp = () => {
    const { state, dispatch } = useSignUpContext();
    const { push, replace } = useFlow();

    const [isVerifyComponentVisible, setIsVerifyComponentVisible] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);

    const emailRef = useRef<HTMLInputElement>(null);
    const emailVerificationCodeRef = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const isPasswordMatch = password === passwordConfirm;
    const nicknameRef = useRef<HTMLInputElement>(null);
    const [birth, setBirth] = useState<string>("");
    const [studentId, setStudentId] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [gender, setGender] = useState<string>("");

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
        try {
            SignUpVerifySchema.parse({
                email: emailRef.current?.value as string,
                password,
            });
        } catch (e: unknown) {
            toast.error((e as ThrownZodError).errors[0].message);
            return;
        }

        push("SignUpPage", { section: 2 });
    }, [password, push]);

    const toSignUpCompleteSection = useCallback(async () => {
        if (!emailRef.current?.value) return;
        if (!nicknameRef.current?.value) return;

        try {
            SignUpInfoSchema.parse({
                nickname: nicknameRef.current.value,
                birth,
                studentId,
                department,
                gender,
            });
            await toast
                .promise(
                    authService.signUp({
                        email: emailRef.current.value,
                        nickname: nicknameRef.current.value,
                        password,
                        birth,
                        studentId,
                        department,
                        gender,
                    }),
                    {
                        success: "회원가입 성공!",
                        pending: "회원가입 중 입니다",
                        error: renderToastFromDerivedError,
                    },
                )
                .then(() => {
                    replace("HomePage", {});
                });
        } catch (e: unknown) {
            toast.error((e as ThrownZodError).errors[0].message);
            return;
        }
    }, [birth, department, gender, password, replace, studentId]);

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

        nicknameRef,
        birth,
        setBirth,
        studentId,
        setStudentId,
        department,
        setDepartment,
        gender,
        setGender,

        toHomePage,
        toSignUpVerifySection,
        toSignUpInfoSection,
        toSignUpCompleteSection,
    };
};
