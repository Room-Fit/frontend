import { ChevronLeft } from "lucide-react";

import { Screen } from "@/apps/Screen";
import { useFlow } from "@/apps/stackflow";

import { InputWithLabel } from "@/shared/components/InputWithLabel/InputWithLabel";
import { Button } from "@/shared/ui";

export default function SignInPage() {
    const { pop } = useFlow();

    return (
        <Screen>
            <article className="flex flex-col justify-between h-[100dvh] p-4">
                <section className="flex flex-col gap-2">
                    <ChevronLeft size={24} className="h-8" onClick={() => pop()} />

                    <div>
                        <h1 className="my-2 text-xl font-bold">로그인</h1>

                        <InputWithLabel
                            id="email"
                            label="아이디 (이메일)"
                            type="email"
                            placeholder="roomfit@knu.ac.kr"
                            className="mb-2"
                        />

                        <InputWithLabel
                            id="password"
                            label="비밀번호"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                        />

                        <p className="my-1 text-sm text-left">
                            비밀번호를 잊으셨나요?
                            <span className="ml-1 font-semibold underline">비밀번호 찾기</span>
                        </p>
                    </div>
                </section>

                <section className="flex gap-2 pb-2">
                    <Button variant="secondary" className="w-full border-[1px] border-primary">
                        회원가입
                    </Button>
                    <Button className="w-full">로그인</Button>
                </section>
            </article>
        </Screen>
    );
}
