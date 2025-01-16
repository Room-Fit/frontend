import { useRef } from "react";
import { toast } from "react-toastify";

import { useNavigateSignUpSection } from "@/features/auth/hooks/useNavigateSignUpSection";
import { signUp } from "@/features/auth/service/signUp";
import { SignUpStoreActionType, useSignUpStore } from "@/features/auth/store/useSignUpStore";

export const useSignUp = () => {
    const nicknameRef = useRef<HTMLInputElement>(null);

    const { toSignUpCompleteSection } = useNavigateSignUpSection();
    const { dispatch, ...state } = useSignUpStore();

    const onSignUpComplete = async () => {
        const signUpRequestBody = { ...state };

        await toast
            .promise(signUp(signUpRequestBody), {
                success: "회원가입 성공!",
                pending: "회원가입 중 입니다",
                error: "회원가입 실패",
            })
            .then(() => {
                toSignUpCompleteSection();
                dispatch({ type: SignUpStoreActionType.COMPLETE });
            });
    };

    return {
        nicknameRef,
        onSignUpComplete,
    };
};
