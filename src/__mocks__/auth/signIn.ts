import { http, HttpResponse } from "msw";

import { SignInRequestBody, SignInResponseBody } from "@/features/auth/service/signIn";

export const signInHandlers = [
    http.post("/api/v1/auth/login", async ({ request }) => {
        const body = (await request.json()) as SignInRequestBody;

        if (body.email === "admin@knu.ac.kr" && body.password === "admin") {
            const response: SignInResponseBody = {
                accessToken: "jwt-token",
                refreshToken: "jwt-token2",
            };
            return HttpResponse.json(response, { status: 200 });
        }
        return HttpResponse.json({ error: "User Not Found" }, { status: 404 });
    }),
];
