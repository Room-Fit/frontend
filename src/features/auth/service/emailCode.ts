import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";

export type EmailCodeRequestBody = {
    email: string;
};

export type EmailCodeResponseBody = string;

export async function sendEmailVerificationCode(body: EmailCodeRequestBody) {
    try {
        const response = await api.post<BaseResponse<EmailCodeResponseBody>>(
            "/api/v1/auth/code",
            body,
            {},
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(409, "이미 존재하는 이메일입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
}
