export type LookUpDetailResponse = {
    id: number;
    title: string;
    dormitory: string;
    currentQuota: number;
    maxQuota: number;
    createdAt: string;
    author: {
        id: number;
        nickname: string;
    };
    participants: Array<{
        id: number;
        nickname: string;
    }>;
};
