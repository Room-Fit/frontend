import { BaseScreen } from "@/apps/Screen";

import { ProfileGroup } from "@/entities/profile/ui/ProfileGroup/ProfileGroup";
import { RangeDisplay } from "@/entities/profile/ui/RangeDisplay/RangeDisplay";
import { TextDisplay } from "@/entities/profile/ui/TextDisplay/TextDisplay";
import { NavPrevious } from "@/shared/components";
import { ToggleButtonGroup } from "@/shared/components/ToggleButtonGroup/ToggleButtonGroup";
import { Label } from "@/shared/ui";

const options = ["수면환경", "환경정보", "생활 및 관계", "취미 및 활동"];

export default function ProfileDetailPage() {
    return (
        <BaseScreen>
            <NavPrevious />

            <section className="px-6 py-4">
                <div>
                    <Label>이름</Label>
                    <TextDisplay>김룸핏</TextDisplay>
                </div>

                <div>
                    <Label>전공</Label>
                    <TextDisplay>김룸핏</TextDisplay>
                </div>

                <div>
                    <Label>학번</Label>
                    <TextDisplay>김룸핏</TextDisplay>
                </div>

                <div>
                    <Label>나이</Label>
                    <TextDisplay>김룸핏</TextDisplay>
                </div>

                <ToggleButtonGroup
                    className="my-4"
                    options={options}
                    onChange={(selectedOption) => console.log({ selectedOption })}
                />
            </section>

            <section className="p-2 py-4 bg-dark-100">
                <ProfileGroup className="w-full p-4">
                    <div>
                        <Label>기상시간</Label>
                        <TextDisplay className="bg-dark-100/50">07 ~ 10 시 사이</TextDisplay>
                    </div>

                    <div>
                        <Label>취침시간</Label>
                        <TextDisplay className="bg-dark-100/50">07 ~ 10 시 사이</TextDisplay>
                    </div>

                    <div>
                        <Label>잠귀</Label>
                        <RangeDisplay
                            minRange={0}
                            maxRange={5}
                            minValue={0}
                            maxValue={3}
                            minLabel="어두움"
                            maxLabel="밝음"
                        />
                    </div>

                    <div>
                        <Label>취침등</Label>
                        <TextDisplay className="bg-dark-100/50">없음</TextDisplay>
                    </div>

                    <div>
                        <Label>알람 설정</Label>
                        <TextDisplay className="bg-dark-100/50">없음</TextDisplay>
                    </div>

                    <div>
                        <Label>잠버릇</Label>
                        <TextDisplay className="bg-dark-100/50">코골이, 이갈이</TextDisplay>
                    </div>
                </ProfileGroup>
            </section>
        </BaseScreen>
    );
}
