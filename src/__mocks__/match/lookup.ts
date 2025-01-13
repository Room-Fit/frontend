import { http, HttpResponse } from "msw";

export const lookupHandler = () => {
    http.get("url", () => {
        return HttpResponse.json({});
    });
};
