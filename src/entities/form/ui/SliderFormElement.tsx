import { useCallback, useEffect, useMemo } from "react";

import {
    FORM_DISPATCH_ACTION_TYPES,
    useFormStateContext,
} from "@/entities/form/hooks/useFormStateContext";
import { Option } from "@/entities/form/types";
import { Slider } from "@/shared/ui/slider";

export interface SliderFormElementProps {
    questionId: number;
    questionText: string;
    options: Option[];
}

export const SliderFormElement = ({
    questionId,
    questionText,
    options,
}: SliderFormElementProps) => {
    const [min, max] = options;

    const { formState, dispatch } = useFormStateContext();

    const question = useMemo(() => {
        return formState.questions.find((question) => question.questionId === questionId);
    }, [formState.questions, questionId]);

    const value = [Number(question?.options[0]?.value) || 1];

    const onValueChange = useCallback(
        (value: number[]) => {
            dispatch({
                type: FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID,
                payload: {
                    questionId: questionId,
                    label: "value",
                    value: value[0].toString(),
                },
            });
        },
        [dispatch, questionId],
    );

    useEffect(() => {
        dispatch({
            type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID,
            payload: {
                questionId: questionId,
                label: "value",
                value: min.value,
            },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <p className="font-bold">{questionText}</p>
            <div className="px-2">
                <Slider
                    data-testid="slider-with-label-form"
                    className="pt-4 text-gray-500"
                    value={value}
                    onValueChange={onValueChange}
                    min={+min.value}
                    max={+max.value}
                    step={1}
                />
                <div className="flex justify-between my-1">
                    <span className="text-sm text-gray-500">{min.label}</span>
                    <span className="text-sm text-gray-500">{max.label}</span>
                </div>
            </div>
        </div>
    );
};
