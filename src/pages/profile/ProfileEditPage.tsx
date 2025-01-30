import { useRef } from "react";

import { BaseScreen } from "@/apps/Screen";

import { FormSchema } from "@/entities/form/types";
import { DynamicForm, DynamicFormRef } from "@/entities/form/ui/DynamicForm";
import { useCreateSurveyResponse } from "@/features/profile/service/createSurveyResponse";
import { useRecentSurvey } from "@/features/profile/service/useRecentSurvey";
import { NavPrevious } from "@/shared/components";
import { Button } from "@/shared/ui";

export default function ProfileEditPage() {
    const { isPending, data } = useRecentSurvey();

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
                                // TODO: 추후 API 스키마 변경에 따른 수정 필요
                                console.log(dynamicFormRef.current?.getFormState());
                                mutate();
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
