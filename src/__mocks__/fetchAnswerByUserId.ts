import { fetchAnswerResponse } from "@/__mocks__/fetchAnswerResponse";

export const fetchAnswerByUserId = (userId: number) => {
    return fetchAnswerResponse(userId);
};
