import ExceptionHandler from "axios-exception-handler";

import { api } from "@/shared/lib";
import { BasePaginationResponse } from "@/shared/types/BaseResponse";
import { useInfiniteQuery } from "@tanstack/react-query";

export type MessageHistoryType = {
    id: number;
    content: string;
    sender: string;
    createdAt: string;
};

const PAGE_SIZE = 10;

export const getPreviousMessageHistory = async ({
    room_id,
    lastMessageId,
}: {
    room_id: number;
    lastMessageId?: undefined | number;
}) => {
    try {
        const { data: response } = await api.get<BasePaginationResponse<MessageHistoryType[]>>(
            `/api/v1/room/${room_id}/messages`,
            { params: { lastMessageId, pageSize: PAGE_SIZE } },
        );
        response.data = response.data.reverse();
        return response;
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
        queryFn: () => getPreviousMessageHistory({ room_id, lastMessageId: undefined }),
        queryKey: ["previousMessage", room_id],
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => (lastPage ? allPages.length : null),
    });
};
