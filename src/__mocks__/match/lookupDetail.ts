import { http, HttpResponse } from "msw";

import { fetchMatchDetail } from "@/__mocks__/fetchMatchDetail";

export const lookupDetailHandler = () => {
    return [
        http.get(`/api/v1/chat/:chatroom_id/participants`, async (id) => {
            const { chatroom_id } = id.params;
            const response = fetchMatchDetail(Number(chatroom_id));
            console.log(response);
            return HttpResponse.json([response]);
        }),
    ];
};
