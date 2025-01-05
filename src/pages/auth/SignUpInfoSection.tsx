import { ChevronLeft } from "lucide-react";

import { Screen } from "@/apps/Screen";
import { siteConfiguration } from "@/apps/config/site";
import { useFlow } from "@/apps/stackflow";

import {
    Button,
    Input,
    Label,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui";

export default function SignUpInfoSection() {
    const { push, pop } = useFlow();

    return (
        <Screen>
            <article className="flex flex-col justify-between h-full p-4">
                <section className="flex flex-col gap-2">
                    <ChevronLeft size={24} className="h-8" onClick={() => pop()} />

                    <div className="flex flex-col gap-2">
                        <h1 className="my-2 text-2xl font-bold">회원가입</h1>

                        <Label htmlFor="nickname" className="font-semibold">
                            닉네임
                        </Label>
                        <div className="flex gap-2">
                            <Input
                                id="nickname"
                                type="nickname"
                                placeholder="닉네임을 입력해주세요"
                            />
                        </div>

                        <Label htmlFor="birth" className="font-semibold">
                            생년월일
                        </Label>
                        <div className="flex gap-2">
                            <Input
                                id="birth"
                                type="number"
                                min={1980}
                                max={2050}
                                placeholder="생년월일"
                            />
                        </div>

                        <div>
                            <Label htmlFor="password" className="font-semibold">
                                학번
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2010">2010</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="password" className="font-semibold">
                                단과대
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Theme" />
                                </SelectTrigger>
                                <SelectContent>
                                    {siteConfiguration.university.map((univ) => {
                                        return (
                                            <SelectItem value={univ.value}>{univ.label}</SelectItem>
                                        );
                                    })}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="password" className="font-semibold">
                                성별
                            </Label>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="성별을 선택하세요" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="men">남자</SelectItem>
                                    <SelectItem value="women">여자</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </section>

                <div className="flex gap-2">
                    <Button variant="outline" className="w-full" onClick={() => pop()}>
                        이전
                    </Button>
                    <Button className="w-full" onClick={() => push("MatchListPage", {})}>
                        다음
                    </Button>
                </div>
            </article>
        </Screen>
    );
}
