import { ChevronLeft } from "lucide-react";

import { Screen } from "@/apps/Screen";
import { useFlow } from "@/apps/stackflow";

import { Button, Input, Label } from "@/shared/ui";

export default function SignUpVerifySection() {
    const { pop, push } = useFlow();

    return (
        <Screen>
            <article className="flex flex-col justify-between h-full p-4">
                <section className="flex flex-col gap-2">
                    <ChevronLeft size={24} className="h-8" onClick={() => pop()} />

                    <div className="flex flex-col gap-2">
                        <h1 className="my-2 text-xl font-bold">회원가입</h1>

                        <div>
                            <Label htmlFor="email" className="my-1 text-base font-normal">
                                아이디 (이메일)
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="아이디(이메일)을 입력해주세요"
                                    className="flex-grow-[6]"
                                />
                                <Button className="flex-grow-[1]">인증하기</Button>
                            </div>
                        </div>

                        <div>
                            <Label
                                htmlFor="verification-code"
                                className="my-1 text-base font-normal"
                            >
                                인증번호
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    id="verification-code"
                                    type="verification-code"
                                    placeholder="인증번호"
                                    className="flex-grow-[6]"
                                />
                                <Button className="flex-grow-[1]">확인하기</Button>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="password" className="my-1 text-base font-normal">
                                비밀번호
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                            />
                        </div>

                        <div>
                            <Label htmlFor="password" className="my-1 text-base font-normal">
                                비밀번호 확인
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                            />
                        </div>

                        <div className="flex gap-2 my-1">
                            <Button
                                variant="secondary"
                                className="w-full border-[1px] border-primary"
                            >
                                이전
                            </Button>
                            <Button
                                className="w-full"
                                onClick={() => push("SignUpPage", { section: 2 })}
                            >
                                다음
                            </Button>
                        </div>
                    </div>
                </section>
            </article>
        </Screen>
    );
}
