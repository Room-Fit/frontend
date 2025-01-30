import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useQuery } from "@tanstack/react-query";

export type UserListResponse = {
    id: number;
    nickname: string;
    studentId: string;
    birth: string;
    gender: "M" | "F";
    college: string;
};

const readUserList = async () => {
    try {
        const { data: response } = await api.get<BaseResponse<UserListResponse[]>>("/api/v1/user");
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
};

export const useReadUserList = () => {
    const query = useQuery({
        queryKey: ["USER"],
        queryFn: readUserList,
    });
    return { ...query };
};
