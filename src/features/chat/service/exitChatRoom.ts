import ExceptionHandler from "axios-exception-handler";

import { useFlow } from "@/apps/stackflow";

import { MATCH_QUERY_KEY_FACTORY } from "@/features/match/service";
import { api, queryClient } from "@/shared/lib";
import { useMutation } from "@tanstack/react-query";

export type LeaveChatRoom = {
    room_id: number;
};

const exitChatRoom = async (room_id: number) => {
    try {
        const { data: response } = await api.put(`/api/v1/room/${room_id}/leave`);
        return response.data;
    } catch (err) {
        ExceptionHandler(err)
            .addCase(404, "존재하지 않는 채팅방입니다.")
            .addCase(500, "서버 오류가 발생했습니다.");
    }
};

export const usePutExitChatRoom = (room_id: number) => {
    const { push } = useFlow();
    return useMutation({
        mutationFn: () => exitChatRoom(room_id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: MATCH_QUERY_KEY_FACTORY.READ_ALL_MATCH(),
            });
            push("ChatRoomListPage", {});
        },
    });
};
