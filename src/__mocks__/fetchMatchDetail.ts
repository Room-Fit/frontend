export const fetchMatchDetail = (id: number) => {
    console.log(`[Mocks] fetchMatchDetail : ${id}`);

    return {
        title: "조용하고 청결한 룸메이트 구해요",
        description:
            "조용하고 청결한 룸메이트를 구합니다. 학교 근처에 있으면 좋겠어요. MBTI 는 I 를 선호합니다.",

        currentQuota: 1,
        maxQuota: 4,

        dormitory: "첨성관",
        author: "홍길동",
        createdAt: "2024-12-31",

        participants: [
            { userId: 1, name: "홍길동" },
            { userId: 2, name: "김기태" },
        ],
    };
};
