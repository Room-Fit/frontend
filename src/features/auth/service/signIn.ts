import { ExceptionHandler } from "axios-exception-handler";
import { z } from "zod";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";

export const SignInSchema = z.object({
    email: z.string().email().nonempty({ message: "이메일을 입력해주세요." }),
    password: z.string().nonempty({ message: "비밀번호를 입력해주세요." }),
});

export type SignInResponseBody = {
    accessToken: string;
    refreshToken: string;
};

export type SignInRequestBody = z.infer<typeof SignInSchema>;

export async function signIn(body: SignInRequestBody) {
    try {
        SignInSchema.parse(body);
        const response = await api.post<BaseResponse<SignInResponseBody>>(
            "/api/v1/auth/login",
            body,
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "이메일 또는 비밀번호가 일치하지 않거나 계정이 존재하지 않습니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .addDefaultCase("알 수 없는 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
}
