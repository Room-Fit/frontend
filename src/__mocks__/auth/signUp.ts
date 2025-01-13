import { http, HttpResponse } from "msw";

import { EmailCodeRequestBody } from "@/features/auth/service/emailCode";
import { EmailVerifyRequestBody } from "@/features/auth/service/emailVerify";
import { SignUpRequestBody } from "@/features/auth/service/signUp";

export const signUpHandlers = [
    http.post("/api/v1/auth/code", async ({ request }) => {
        const body = (await request.json()) as EmailCodeRequestBody;

        if (body.email === "admin@knu.ac.kr")
            return HttpResponse.json({ error: "User already exists" }, { status: 409 });
        return HttpResponse.json({ code: "1234" }, { status: 201 });
    }),

    http.post("/api/v1/auth/verify", async ({ request }) => {
        const body = (await request.json()) as EmailVerifyRequestBody;

        if (body.code === "1234") return HttpResponse.json({}, { status: 200 });
        return HttpResponse.json({ error: "Invalid code" }, { status: 401 });
    }),

    http.post("/api/v1/user", async ({ request }) => {
        const body = (await request.json()) as SignUpRequestBody;

        if (Object.values(body).every((value) => !value))
            return HttpResponse.json({ error: "Invalid request" }, { status: 400 });

        return HttpResponse.json({}, { status: 201 });
    }),
];
