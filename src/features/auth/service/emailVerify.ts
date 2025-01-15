import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";

export type EmailVerifyRequestBody = {
    authToken: string;
    code: string;
};

export async function verifyEmailVerificationCode(body: EmailVerifyRequestBody) {
    try {
        const response = await api.post("/api/v1/auth/verify", body);
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(401, "인증 코드가 올바르지 않습니다.")
            .addCase(404, "올바르지 않은 정보입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
}
