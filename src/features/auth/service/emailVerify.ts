import ExceptionHandler from "axios-exception-handler";
import { z } from "zod";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";

export const EmailVerifySchema = z.object({
    authToken: z.string().nonempty(),
    code: z.string().nonempty(),
});

export type EmailVerifyRequestBody = z.infer<typeof EmailVerifySchema>;

export type EmailVerifyResponseBody = boolean;

export async function verifyEmailVerificationCode(body: EmailVerifyRequestBody) {
    try {
        EmailVerifySchema.parse(body);
        const { data: response } = await api.post<BaseResponse<EmailVerifyResponseBody>>(
            "/api/v1/auth/verify",
            body,
        );
        if (!response.data) throw new Error("인증 코드가 올바르지 않습니다.");
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(401, "인증 코드가 올바르지 않습니다.")
            .addCase(404, "올바르지 않은 정보입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .addDefaultCase("알 수 없는 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
}
