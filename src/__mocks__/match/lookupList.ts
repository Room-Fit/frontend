import { http, HttpResponse } from "msw";

import { ReadMatchList } from "@/features/match/service/readAllMatch";

export const lookupListHandler = [
    http.get("/api/v1/room", async () => {
        const mookLookUpListResponse: ReadMatchList[] = [
            {
                id: 1,
                name: "조용하고 청결한 룸메이트 구해요",
                dormitory: "첨성관",
                description:
                    "조용하고 청결한 룸메이트를 구합니다. 학교 근처에 있으면 좋겠어요. MBTI 는 I 를 선호합니다.",
                currentQuota: 1,
                maxQuota: 4,
                status: "RECRUITING",
            },
            {
                id: 2,
                name: "활발한 룸메이트 구합니다",
                dormitory: "기숙사 A",
                description: "활발하고 외향적인 룸메이트를 구합니다. 운동을 좋아하면 좋겠어요.",
                currentQuota: 2,
                maxQuota: 4,
                status: "RECRUITING",
            },
            {
                id: 3,
                name: "조용한 룸메이트 구해요",
                dormitory: "기숙사 B",
                description: "조용하고 책 읽는 것을 좋아하는 룸메이트를 구합니다.",
                currentQuota: 1,
                maxQuota: 2,
                status: "RECRUITING",
            },
            {
                id: 4,
                name: "청결한 룸메이트 구합니다",
                dormitory: "기숙사 C",
                description:
                    "청결하고 깔끔한 룸메이트를 구합니다. 정리정돈 잘하는 분이면 좋겠어요.",
                currentQuota: 3,
                maxQuota: 4,
                status: "RECRUITING",
            },
            {
                id: 5,
                name: "친절한 룸메이트 구해요",
                dormitory: "기숙사 D",
                description: "친절하고 배려심 있는 룸메이트를 구합니다.",
                currentQuota: 1,
                maxQuota: 3,
                status: "RECRUITING",
            },
        ];
        return HttpResponse.json(mookLookUpListResponse);
    }),
];
