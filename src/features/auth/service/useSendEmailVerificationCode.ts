import { useRef, useState } from "react";
import { toast } from "react-toastify";

import { useTimer } from "@/features/auth/hooks/useTimer";
import { sendEmailVerificationCode } from "@/features/auth/service/emailCode";
import { SignUpStoreActionType, useSignUpStore } from "@/features/auth/store/useSignUpStore";
import { renderToastFromDerivedError } from "@/shared/utils/renderToastFromDerivedError";

export const useSendEmailVerificationCode = () => {
    const [isVerificationCodeInputFieldVisible, setIsVerificationCodeInputFieldVisible] =
        useState<boolean>(false);
    const emailRef = useRef<HTMLInputElement>(null);
    const { dispatch } = useSignUpStore();

    const { seconds, startTimer } = useTimer(5 * 60);

    const onSendEmailVerificationCode = async () => {
        if (!emailRef.current?.value) return;
        const email = emailRef.current.value;

        await toast
            .promise(sendEmailVerificationCode({ email }), {
                success: "인증 코드 발송 성공!",
                pending: "인증 코드 발송 중 입니다",
                error: renderToastFromDerivedError,
            })
            .then((data) => {
                setIsVerificationCodeInputFieldVisible(true);
                startTimer();

                dispatch({
                    type: SignUpStoreActionType.SET_EMAIL,
                    payload: { email },
                });
                dispatch({
                    type: SignUpStoreActionType.SET_AUTH_TOKEN,
                    payload: { authToken: data?.data as string },
                });
            });
    };

    return { isVerificationCodeInputFieldVisible, emailRef, onSendEmailVerificationCode, seconds };
};
