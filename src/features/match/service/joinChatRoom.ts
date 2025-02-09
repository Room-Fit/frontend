import ExceptionHandler from "axios-exception-handler";

import { MATCH_QUERY_KEY_FACTORY } from "@/features/match/service/keys";
import { api, queryClient } from "@/shared/lib";
import { BaseResponse } from "@/shared/types/BaseResponse";
import { useMutation } from "@tanstack/react-query";

export type JoinChatRoom = {
    room_id: number;
};

const joinChatRoom = async (room_id: number) => {
    try {
        const { data: response } = await api.post<BaseResponse<JoinChatRoom>>(
            `/api/v1/room/${room_id}/join`,
        );
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 채팅방입니다.")
            .addCase(500, "서버 오류가 발생했습니다")
            .handle();
    }
};

export const usePostJoinChatRoom = (room_id: number) => {
    return useMutation({
        mutationFn: () => joinChatRoom(room_id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: MATCH_QUERY_KEY_FACTORY.READ_MATCH_DETAIL_BY_ID,
            });
        },
    });
};
