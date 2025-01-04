import { useState } from "react";

import { BaseScreen } from "@/apps/Screen";

import defaultImage from "@/assets/bg__main.webp";

import { fetchAnswerByUserId } from "@/__mocks__/fetchAnswerByUserId";
import { fetchMatchDetail } from "@/__mocks__/fetchMatchDetail";
import { MatchInfo } from "@/features/match/ui/MatchInfo";
import { Selector } from "@/shared/components";
import { BackDropImage } from "@/shared/components/BackDropImage";
import { NavPrevious } from "@/shared/components/NavPrevious";
import { ActivityComponentType } from "@stackflow/react";

export interface MatchDetailPageParams {
    id?: number;
}

const MatchDetailPage: ActivityComponentType<MatchDetailPageParams> = ({ params }) => {
    const [selectedUser, setSelectedUser] = useState<string>("");

    console.log("id : ", params.id);

    const mock__matchDetailResponse = fetchMatchDetail(params.id as number);
    const mock__answerResponseByUserId = fetchAnswerByUserId(params.id as number);

    return (
        <BaseScreen>
            <NavPrevious />

            <BackDropImage width="100%" height="220px" src={defaultImage}>
                <MatchInfo
                    title={mock__matchDetailResponse.title}
                    dormitory={mock__matchDetailResponse.dormitory}
                    currentQuota={mock__matchDetailResponse.currentQuota}
                    maxQuota={mock__matchDetailResponse.maxQuota}
                    author={mock__matchDetailResponse.author}
                    createdAt={mock__matchDetailResponse.createdAt}
                />
            </BackDropImage>

            <div className="p-4">
                <p className="font-bold">참여중인 인원</p>
                <Selector
                    placeholder="참여중인 인원을 선택해주세요"
                    options={[
                        { label: "홍길동", value: "1" },
                        { label: "김철수", value: "2" },
                        { label: "이영희", value: "3" },
                    ]}
                    value={selectedUser}
                    onValueChange={(value) => setSelectedUser(value)}
                />
            </div>
            <div className="p-4">
                {mock__answerResponseByUserId.map((answer) => {
                    return (
                        <div key={answer.questionId}>
                            <p>{answer.questionText}</p>
                        </div>
                    );
                })}
            </div>
        </BaseScreen>
    );
};

export default MatchDetailPage;
