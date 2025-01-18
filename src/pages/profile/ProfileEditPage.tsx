import { BaseScreen } from "@/apps/Screen";

import { FormSchema } from "@/entities/form/types";
import { DynamicForm } from "@/entities/form/ui/DynamicForm";
import { useRecentSurvey } from "@/features/profile/service/useRecentSurvey";
import { NavPrevious } from "@/shared/components";
import { Button } from "@/shared/ui";

export default function ProfileEditPage() {
    const { isPending, data } = useRecentSurvey();

    return (
        <BaseScreen>
            <NavPrevious />

            <div className="p-4">
                {isPending ? (
                    <div>loading</div>
                ) : (
                    <div>
                        <DynamicForm formSchema={data as FormSchema} />
                        <Button className="w-full">저장하기</Button>
                    </div>
                )}
            </div>
        </BaseScreen>
    );
}
