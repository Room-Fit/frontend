import { BaseScreen } from "@/apps/Screen";
import { NavTop } from "@/apps/layouts/NavTop";

import { Button, Input, Label, Textarea } from "@/shared/ui";

/**
 * [ ] 이미 생성된 핏글이 있는지 확인 후, 없으면 생성
 * [ ] 있으면 '이미 작성한 핏글이 있어용' 메시지 출력 후 작성한 핏글로 이동
 */
export default function CreateMatchPage() {
    return (
        <BaseScreen>
            <NavTop />

            <section className="flex flex-col gap-2 p-4">
                <div>
                    <h1 className="text-2xl font-bold">핏글 생성하기</h1>
                    <p>룸메이트 모집을 위한 핏글을 생성해요</p>
                </div>

                <div>
                    <Label htmlFor="title" className="block my-2">
                        핏글 제목
                    </Label>
                    <Input id="title" type="text" placeholder="핏글의 제목을 입력해주세요" />
                </div>

                <div>
                    <Label htmlFor="description" className="block my-2">
                        핏글 설명
                    </Label>
                    <Textarea
                        id="description"
                        placeholder="핏글에 대한 설명을 입력해주세요"
                        className="h-40 resize-none"
                    />
                </div>

                <div>
                    <Button className="w-full">핏글 생성하기</Button>
                </div>
            </section>
        </BaseScreen>
    );
}
