import { ChevronLeft } from "lucide-react";

import { Screen } from "@/apps/Screen";
import { useFlow } from "@/apps/stackflow";

import { useSignIn } from "@/features/auth/service/useSignIn";
import { useAuth } from "@/features/auth/store/useAuth";
import { InputWithLabel } from "@/shared/components/InputWithLabel/InputWithLabel";
import { Button } from "@/shared/ui";

export default function SignInPage() {
    const { pop, replace } = useFlow();
    const { emailRef, passwordRef, signIn } = useSignIn();
    const { isAuthenticated } = useAuth();

    // 로그인 상태일 경우, MatchListPage로 이동
    if (isAuthenticated) replace("MatchListPage", {});

    return (
        <Screen>
            <article className="flex flex-col justify-between h-[100dvh] p-4">
                <section className="flex flex-col gap-2">
                    <ChevronLeft size={24} className="h-8" onClick={() => pop()} />

                    <div>
                        <h1 className="my-2 text-xl font-bold">로그인</h1>

                        <InputWithLabel
                            ref={emailRef}
                            id="email"
                            label="아이디 (이메일)"
                            type="email"
                            placeholder="roomfit@knu.ac.kr"
                            className="mb-2"
                        />

                        <InputWithLabel
                            ref={passwordRef}
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

                    <div className="flex gap-2">
                        <Button className="w-full" data-testid="btn-login" onClick={signIn}>
                            로그인
                        </Button>
                        <Button variant="secondary" className="w-full border-[1px] border-primary">
                            회원가입
                        </Button>
                    </div>
                </section>
            </article>
        </Screen>
    );
}
