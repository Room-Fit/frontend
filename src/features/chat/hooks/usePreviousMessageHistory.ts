import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useInfiniteQuery } from "@tanstack/react-query";

export type MessageHistoryType = {
    id: number;
    content: string;
    sender: string;
    createdAt: string;
    meta: {
        totalCount: number;
        hasNext: boolean;
    };
};

const PAGE_SIZE = 30;

const getPreviousMessageHistory = async (room_id: number) => {
    try {
        const { data: response } = await api.get<BaseResponse<MessageHistoryType[]>>(
            `/api/v1/room/${room_id}/messages?pageSize=${PAGE_SIZE}`,
        );
        return response.data.reverse();
    } catch (err) {
        ExceptionHandler(err)
            .addCase(400, "잘못된 요청입니다.")
            .addCase(401, "로그인이 필요한 서비스입니다.")
            .addCase(403, "권한이 없습니다.")
            .addCase(404, "존재하지 않는 채팅방입니다.")
            .addCase(500, "서버 오류가 발생하였습니다. 관리자에게 문의바랍니다.")
            .handle();
    }
};

export const usePreviousMessageHistory = (room_id: number) => {
    return useInfiniteQuery({
        queryFn: () => getPreviousMessageHistory(room_id),
        queryKey: ["previousMessage", room_id],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => (lastPage ? allPages.length : null),
    });
};
