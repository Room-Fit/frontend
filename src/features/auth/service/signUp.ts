import ExceptionHandler from "axios-exception-handler";
import { z } from "zod";

import { api } from "@/shared/lib";

export enum Gender {
    MAN = "남자",
    WOMAN = "여자",
}

export const SignUpVerifySchema = z.object({
    email: z
        .string()
        .email({ message: "올바른 이메일 형식이 아닙니다." })
        .nonempty({ message: "이메일을 입력해주세요." }),
    password: z
        .string({ message: "비밀번호를 입력해주세요." })
        .min(8, { message: "비밀번호는 8자리 이상이어야 합니다." })
        .nonempty({ message: "비밀번호를 입력해주세요." }),
});

export const SignUpInfoSchema = z.object({
    nickname: z
        .string({ message: "닉네임을 입력해주세요." })
        .min(2, { message: "닉네임은 두자리 이상 이어야 합니다." }),
    birth: z.string().nonempty({ message: "생년월일을 입력해주세요." }),
    studentId: z.string().nonempty({ message: "학번을 입력해주세요." }),
    department: z.string().nonempty({ message: "학과를 입력해주세요." }),
    gender: z.string().nonempty({ message: "성별을 입력해주세요." }),
});

export type SignUpVerifyType = z.infer<typeof SignUpVerifySchema>;
export type SignUpInfoType = z.infer<typeof SignUpInfoSchema>;

export type SignUpRequestBody = SignUpVerifyType & SignUpInfoType;

export type SignUpResponseBody = {
    id: number;
    email: string;
    nickname: string;
    birth: string;
    studentId: string;
    department: string;
};

export async function signUp(body: SignUpRequestBody) {
    try {
        const response = await api.post<SignUpResponseBody>("/user", body);
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(409, "이미 존재하는 이메일입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
}
