import { useCallback, useRef } from "react";
import { toast } from "react-toastify";

import { useFlow } from "@/apps/stackflow";

import { authService } from "@/features/auth/service";
import { AuthActionType, useAuth } from "@/features/auth/store/useAuth";
import { renderToastFromDerivedError } from "@/shared/utils/renderToastFromDerivedError";

export const useSignIn = () => {
    const { dispatch } = useAuth();
    const { replace } = useFlow();

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signIn = useCallback(async () => {
        console.log(emailRef.current?.value, passwordRef.current?.value);
        if (!emailRef.current?.value || !passwordRef.current?.value) return;

        await toast
            .promise(
                authService.signIn({
                    email: emailRef.current?.value as string,
                    password: passwordRef.current?.value,
                }),
                {
                    success: "로그인 성공!",
                    pending: "로그인 중 입니다",
                    error: renderToastFromDerivedError,
                },
            )
            .then((data) => {
                dispatch({
                    type: AuthActionType.SIGN_IN,
                    payload: {
                        accessToken: data?.accessToken as string,
                        refreshToken: data?.refreshToken as string,
                    },
                });
                replace("MatchListPage", {});
            });
    }, [dispatch, replace]);

    return {
        emailRef,
        passwordRef,
        signIn,
    };
};
