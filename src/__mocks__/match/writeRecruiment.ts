import { http, HttpResponse } from "msw";

import { RecruitmentPost } from "@/features/match/service/createRecruitmentPost";

export const writeRecruitmentHandler = [
    http.post("/api/v1/recruiment", async ({ request }) => {
        try {
            const body = (await request.json()) as RecruitmentPost;

            if (!body.name || !body.description || !body.dormitory || !body.maxQuota) {
                return new HttpResponse(null, {
                    status: 400,
                    statusText: "잘못된 요청입니다.",
                });
            }

            const newRecruitment: RecruitmentPost = {
                ...body,
            };
            console.log(newRecruitment);
            return HttpResponse.json(newRecruitment, { status: 201 });
        } catch {
            return new HttpResponse(null, {
                status: 500,
                statusText: "서버 오류가 발생했습니다.",
            });
        }
    }),
];
