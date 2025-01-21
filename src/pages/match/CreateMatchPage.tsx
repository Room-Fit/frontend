import { useState } from "react";

import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";
import { useFlow } from "@/apps/stackflow";

import {
    MAX_RECRUITEMENT_NUMBER,
    recruitmentPost,
    RecruitmentPost,
} from "@/features/match/service/recruitmentPost";
import { SelectDormitory } from "@/features/match/ui/SelectDormitory";
import { SelectMaxQuota } from "@/features/match/ui/SelectMaxQuota";
import { Button, Input, Label, Textarea } from "@/shared/ui";

/**
 * [ ] 이미 생성된 핏글이 있는지 확인 후, 없으면 생성
 * [ ] 있으면 '이미 작성한 핏글이 있어용' 메시지 출력 후 작성한 핏글로 이동
 */
export default function CreateMatchPage() {
    const [formData, setFormData] = useState<RecruitmentPost>({
        id: 0,
        title: "",
        description: "",
        dormitory: "봉사관",
        maxQuota: MAX_RECRUITEMENT_NUMBER,
    });
    const { push } = useFlow();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await recruitmentPost(formData).then(() => {
            push("MatchListPage", {});
        });
        console.log(result);
    };

    return (
        <BaseScreen>
            <NavTop />

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4">
                <div>
                    <h1 className="text-2xl font-bold">핏글 생성하기</h1>
                    <p>룸메이트 모집을 위한 핏글을 생성해요</p>
                </div>

                <div>
                    <Label htmlFor="title" className="block my-2">
                        핏글 제목
                    </Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="핏글의 제목을 입력해주세요"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <Label htmlFor="dormitory" className="block my-2">
                        기숙사 선택
                    </Label>
                    <SelectDormitory
                        value={formData.dormitory}
                        onChange={(value) => setFormData((prev) => ({ ...prev, dormitory: value }))}
                    />
                </div>
                <div>
                    <Label htmlFor="maxQuota" className="block my-2">
                        최대 인원수
                    </Label>
                    <SelectMaxQuota
                        value={formData.maxQuota}
                        onChange={(value) => setFormData((prev) => ({ ...prev, maxQuota: value }))}
                    />
                </div>
                <div>
                    <Label htmlFor="description" className="block my-2">
                        핏글 설명
                    </Label>
                    <Textarea
                        id="description"
                        placeholder="핏글에 대한 설명을 입력해주세요"
                        className="h-40 resize-none"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <Button className="w-full">핏글 생성하기</Button>
                </div>
            </form>
        </BaseScreen>
    );
}
