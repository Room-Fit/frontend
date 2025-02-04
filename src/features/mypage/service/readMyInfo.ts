import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useQuery } from "@tanstack/react-query";

export type MyInfo = {
    id: number;
    nickname: string;
    email: string;
    birth: string;
    studentId: number;
    college: string;
    gender: string;
};

const readMyInfo = async (user_id: number) => {
    try {
        const { data: response } = await api.get<BaseResponse<MyInfo>>(`/api/v1/user/${user_id}`);
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 유저입니다")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
};

export const useMyInfo = (user_id: number) => {
    return useQuery({
        queryKey: ["myInfo", user_id],
        queryFn: () => readMyInfo(user_id),
    });
};
