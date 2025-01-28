export type BaseResponse<T> = {
    success: boolean;
    message: string;
    data: T;
};

export type BasePaginationResponse<T> = {
    success: boolean;
    message: string;
    data: T;
    meta: {
        totalCount: number;
        hasNext: boolean;
    };
};
