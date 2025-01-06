import { Screen } from "@/apps/Screen";
import { useFlow } from "@/apps/stackflow";

import bgBackground from "@/shared/assets/bg-background.webp";
import { Button } from "@/shared/ui";

export default function HomePage() {
    const { push } = useFlow();

    return (
        <Screen>
            <div className="absolute z-10 w-full h-full gradient-main" />
            <img
                src={bgBackground}
                alt="경북대학교 기숙사 전경"
                className="absolute z-[5] w-full h-full object-cover"
            />

            <div className="z-10 flex flex-col justify-center w-full min-h-[100dvh]">
                <section className="z-20 flex-grow-[1] flex flex-col justify-center">
                    <img
                        className="object-contain w-full px-20 py-5 h-fit"
                        alt="나에게 딱 맞는 룸메이트, 룸핏!"
                        src="/icon/logo-vertical-white.png"
                    />
                    <p className="z-10 font-bold text-center text-white">
                        나에게 딱 맞는 룸메이트, 룸핏!
                    </p>
                </section>

                <section className="z-10 flex flex-col gap-2 px-4 pb-20">
                    <Button variant="default" onClick={() => push("SignInPage", {})}>
                        로그인
                    </Button>
                    <Button variant="secondary" onClick={() => push("SignUpPage", {})}>
                        회원가입
                    </Button>
                </section>
            </div>
        </Screen>
    );
}
