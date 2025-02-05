import { useRef } from "react";

import { BaseScreen } from "@/apps/Screen";
import { useFlow } from "@/apps/stackflow";

import { FormSchema } from "@/entities/form/types";
import { DynamicForm, DynamicFormRef } from "@/entities/form/ui/DynamicForm/DynamicForm";
import { useCreateSurveyResponse } from "@/features/profile/service/createSurveyResponse";
import { useRecentSurvey } from "@/features/profile/service/useRecentSurvey";
import { NavPrevious } from "@/shared/components";
import { Button } from "@/shared/ui";

export default function ProfileEditPage() {
    const { isPending, data } = useRecentSurvey();
    const { push } = useFlow();
    const dynamicFormRef = useRef<DynamicFormRef>(null);
    const { mutate } = useCreateSurveyResponse(
        dynamicFormRef.current?.getFormState() as FormSchema,
    );

    return (
        <BaseScreen>
            <NavPrevious />

            <div className="p-4">
                {isPending ? (
                    <div>loading</div>
                ) : (
                    <div>
                        <DynamicForm ref={dynamicFormRef} formSchema={data as FormSchema} />
                        <Button
                            className="w-full my-2"
                            onClick={() => {
                                mutate();
                                push("MatchListPage", {});
                            }}
                        >
                            등록하기
                        </Button>
                    </div>
                )}
            </div>
        </BaseScreen>
    );
}
