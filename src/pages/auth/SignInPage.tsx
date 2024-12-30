import { ChevronLeft } from "lucide-react";

import { Screen } from "@/apps/Screen";
import { useFlow } from "@/apps/stackflow";

import { Button, Input, Label } from "@/shared/ui";

export default function SignInPage() {
    const { pop } = useFlow();

    return (
        <Screen>
            <article className="flex flex-col justify-between h-full p-4">
                <section className="flex flex-col gap-2">
                    <ChevronLeft size={24} className="h-8" onClick={() => pop()} />

                    <div>
                        <h1 className="my-2 text-2xl font-bold">로그인</h1>
                        <Label htmlFor="email" className="font-semibold">
                            아이디 (이메일)
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="아이디(이메일)을 입력해주세요"
                        />

                        <Label htmlFor="password" className="font-semibold">
                            비밀번호
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="비밀번호를 입력해주세요"
                        />
                    </div>
                </section>

                <section className="flex flex-col gap-2">
                    <p className="text-center">
                        비밀번호를 잊으셨나요?
                        <span className="ml-1 font-semibold text-primary">비밀번호 찾기</span>
                    </p>
                    <Button>로그인</Button>
                    <Button variant="outline">회원가입</Button>
                </section>
            </article>
        </Screen>
    );
}
