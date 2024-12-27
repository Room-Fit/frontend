import { useCallback, useEffect, useMemo } from "react";

import { FORM_DISPATCH_ACTION_TYPES, useFormStateContext } from "@/entities/form/hooks";
import { Option } from "@/entities/form/types";
import { DualRangeSlider } from "@/shared/ui";

export interface DoubleSliderWithLabelFormProps {
    questionId: number;
    questionText: string;
    options: Option[];
}

export const DoubleSliderFormElement = ({
    questionId,
    questionText,
    options,
}: DoubleSliderWithLabelFormProps) => {
    const min = options[0];
    const max = options[1];
    const unit = options[2];

    const { formState, dispatch } = useFormStateContext();

    const question = useMemo(() => {
        return formState.questions.find((q) => q.questionId === questionId);
    }, [formState.questions, questionId]);

    const value = useMemo(() => {
        return [Number(question?.options[0]?.value), Number(question?.options[1]?.value)];
    }, [question?.options]);

    const onValueChange = useCallback(
        (updatedValue: number[]) => {
            dispatch({
                type: FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId, label: "min", value: updatedValue[0].toString() },
            });
            dispatch({
                type: FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId, label: "max", value: updatedValue[1].toString() },
            });
        },
        [dispatch, questionId],
    );

    useEffect(() => {
        dispatch({
            type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID,
            payload: { questionId, label: "min", value: min.value },
        });
        dispatch({
            type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID,
            payload: { questionId, label: "max", value: max.value },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <p className="font-bold">{questionText}</p>
            <div className="px-2">
                <DualRangeSlider
                    data-testid="double-slider-with-label-form"
                    className="pt-4 pb-10 text-gray-500"
                    defaultValue={[+max.value, +min.value]}
                    value={value}
                    min={+min.value}
                    max={+max.value}
                    step={1}
                    onValueChange={onValueChange}
                    label={(value) => (
                        <span className="flex-shrink-0 mt-2 text-sm text-gray-500">
                            {value}
                            {unit.value}
                        </span>
                    )}
                    labelPosition="bottom"
                />
            </div>
        </div>
    );
};
