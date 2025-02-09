import { useState } from "react";

import { BaseScreen } from "@/apps/Screen";

import { DynamicReply } from "@/entities/profile/ui/DynamicReply/DynamicReply";
import { ProfileGroup } from "@/entities/profile/ui/ProfileGroup/ProfileGroup";
import { TextDisplay } from "@/entities/profile/ui/TextDisplay/TextDisplay";
import { useUserDetailsById } from "@/entities/user/service/readUserById";
import { QuestionReply, useSurveyReplyById } from "@/features/profile/service/readSurveyReplyById";
import { NavPrevious } from "@/shared/components";
import { ToggleButtonGroup } from "@/shared/components/ToggleButtonGroup/ToggleButtonGroup";
import { Label } from "@/shared/ui";

const options = {
    "수면 환경": { min: 0, max: 6 },
    "환경 정보": { min: 6, max: 10 },
    "생활 및 관계": { min: 10, max: 15 },
    "취미 및 활동": { min: 15, max: 30 },
};

export interface ProfileDetailPageProps {
    params: {
        id: number;
    };
}

export default function ProfileDetailPage({ params }: ProfileDetailPageProps) {
    const { data } = useUserDetailsById(params.id);
    const { isPending, data: reply } = useSurveyReplyById(params.id);

    const [range, setRange] = useState<{ min: number; max: number }>({ min: 0, max: 6 });

    if (!data || !reply) return;
    if (isPending) return <div>loading...</div>;
    const currentYear = Number(new Date().getFullYear());

    return (
        <BaseScreen>
            <NavPrevious />

            <section className="px-6 py-4">
                <div>
                    <Label>이름</Label>
                    <TextDisplay>{data.nickname}</TextDisplay>
                </div>
                <div>
                    <Label>전공</Label>
                    <TextDisplay>{data.college}</TextDisplay>
                </div>
                <div>
                    <Label>학번</Label>
                    <TextDisplay>{data.studentId}</TextDisplay>
                </div>
                <div>
                    <Label>나이</Label>
                    <TextDisplay>{currentYear - Number(data.birth)}</TextDisplay>
                </div>

                <ToggleButtonGroup
                    className="my-4"
                    defaultOption="수면 환경"
                    options={Object.keys(options)}
                    onChange={(selectedOption) => {
                        setRange(options[selectedOption as keyof typeof options]);
                    }}
                />
            </section>

            <section className="p-2 py-4 bg-dark-100">
                <ProfileGroup className="w-full p-4">
                    <DynamicReply
                        questions={reply.questions.slice(range.min, range.max) as QuestionReply[]}
                    />
                </ProfileGroup>
            </section>
        </BaseScreen>
    );
}
