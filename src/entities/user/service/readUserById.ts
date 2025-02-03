import ExceptionHandler from "axios-exception-handler";

import { USER_QUERY_KEY_FACTORY } from "@/entities/user/service/keys";
import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useQuery } from "@tanstack/react-query";

export type ReadUserDetailsByIdResponseBody = {
    id: number;
    nickname: string;
    email: string;
    role: string;
    password: string;
    birth: string;
    studentId: number;
    college: string;
    gender: "M" | "F";
};

export async function readUserDetailsById(userId: number) {
    try {
        const { data: response } = await api.get<BaseResponse<ReadUserDetailsByIdResponseBody>>(
            `/api/v1/user/${userId}`,
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 프로필입니다")
            .addCase(500, "서버 오류가 발생했습니다")
            .handle();
    }
}

export function useUserDetailsById(userId: number) {
    const query = useQuery({
        queryKey: USER_QUERY_KEY_FACTORY.READ_USER_BY_ID(userId),
        queryFn: () => readUserDetailsById(userId),
    });
    return { ...query };
}
