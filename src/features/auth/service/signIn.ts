import { ExceptionHandler } from "axios-exception-handler";

import { api } from "@/shared/lib";

export type SignInResponseBody = {
    accessToken: string;
    refreshToken: string;
};

export type SignInRequestBody = {
    email: string;
    password: string;
};

export async function signIn(body: SignInRequestBody) {
    try {
        const response = await api.post<SignInResponseBody>("/api/v1/auth/login", body);
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "이메일 또는 비밀번호가 일치하지 않거나 계정이 존재하지 않습니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
}
