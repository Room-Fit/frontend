import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useQuery } from "@tanstack/react-query";

export type ReadUserChatRoom = {
    id: number;
    name: string;
    description: string;
    type: string;
    status: string;
    maxQuota: number;
    currentQuota: number;
    dormitory: string;
};

const readUserChatRooms = async (user_id: number) => {
    try {
        const { data: response } = await api.get<BaseResponse<ReadUserChatRoom[]>>(
            `/api/v1/user/${user_id}/chatrooms`,
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 페이지입니다.")
            .addCase(500, "서버 오류가 발생했습니다.")
            .handle();
    }
};

export const useReadUserChatRooms = (user_id: number) => {
    return useQuery({
        queryFn: () => readUserChatRooms(user_id),
        queryKey: ["userChatRoom", user_id],
    });
};
