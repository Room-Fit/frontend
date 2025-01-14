import { ChevronLeft } from "lucide-react";

import { Screen } from "@/apps/Screen";
import { siteConfiguration } from "@/apps/config/site";
import { useFlow } from "@/apps/stackflow";

import { useSignUp } from "@/features/auth/service/useSignUp";
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
    const { pop } = useFlow();

    const {
        nicknameRef,
        birth,
        setBirth,
        studentId,
        setStudentId,
        department,
        setDepartment,
        gender,
        setGender,

        toSignUpVerifySection,
        toSignUpCompleteSection,
    } = useSignUp();

    return (
        <Screen>
            <article className="flex flex-col justify-between h-full p-4">
                <section className="flex flex-col gap-2">
                    <ChevronLeft size={24} className="h-8" onClick={() => pop()} />

                    <h1 className="my-2 text-2xl font-bold">회원가입</h1>
                    <div className="flex flex-col gap-2">
                        <div>
                            <Label htmlFor="nickname" className="my-1 text-base font-normal">
                                닉네임
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    ref={nicknameRef}
                                    id="nickname"
                                    type="nickname"
                                    placeholder="닉네임을 입력해주세요"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="birth" className="my-1 text-base font-normal">
                                생년월일
                            </Label>
                            <Select value={birth} onValueChange={setBirth}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="생년월일을 입력해주세요" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2010">2010</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="password" className="my-1 text-base font-normal">
                                학번
                            </Label>
                            <Select value={studentId} onValueChange={setStudentId}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="학번을 선택해주세요" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2010">2010</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="password" className="my-1 text-base font-normal">
                                단과대
                            </Label>
                            <Select value={department} onValueChange={setDepartment}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="단과대를 선택해주세요" />
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
                            <Label htmlFor="password" className="my-1 text-base font-normal">
                                성별
                            </Label>
                            <Select value={gender} onValueChange={setGender}>
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

                <div className="flex gap-2 my-2">
                    <Button
                        variant="secondary"
                        className="w-full border-primary border-[1px]"
                        onClick={toSignUpVerifySection}
                    >
                        이전
                    </Button>
                    <Button className="w-full" onClick={toSignUpCompleteSection}>
                        다음
                    </Button>
                </div>
            </article>
        </Screen>
    );
}
