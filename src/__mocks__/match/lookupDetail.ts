import { http, HttpResponse } from "msw";

import { ReadMatchById } from "@/features/match/service/readMatchDetail";

export const lookupDetailHandler = [
    http.get(`/api/v1/chat/:chatroom_id/participants`, async ({ params }) => {
        const { chatroom_id } = params;
        const mockLookUpResponse: ReadMatchById = {
            id: Number(chatroom_id),
            title: "조용하고 청결한 룸메이트 구해요",
            currentQuota: 1,
            maxQuota: 4,
            dormitory: "첨성관",
            author: {
                id: 1,
                nickname: "홍길동",
            },
            createdAt: "2024-12-31",
            participants: [
                { id: 1, nickname: "홍길동" },
                { id: 2, nickname: "김기태" },
            ],
        };
        return HttpResponse.json(mockLookUpResponse);
    }),
];
