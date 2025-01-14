import { useCallback, useEffect, useMemo } from "react";

import { FORM_DISPATCH_ACTION_TYPES, useFormStateContext } from "@/entities/form/hooks";
import { Question } from "@/entities/form/types";
import { DualRangeSlider } from "@/shared/ui";

export type DoubleSliderWithLabelFormProps = Question;

export const DoubleSliderFormElement = ({
    id,
    title,
    options,
    optionDelimiter,
}: DoubleSliderWithLabelFormProps) => {
    const min = options[0];
    const max = options[1];
    const unit = optionDelimiter;

    const { formState, dispatch } = useFormStateContext();

    const question = useMemo(() => {
        return formState.questions.find((question) => question.id === id);
    }, [formState.questions, id]);

    const value = useMemo(() => {
        return [Number(question?.options[0]?.value), Number(question?.options[1]?.value)];
    }, [question?.options]);

    const onValueChange = useCallback(
        (updatedValue: number[]) => {
            dispatch({
                type: FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID,
                payload: { id, label: "min", value: updatedValue[0].toString() },
            });
            dispatch({
                type: FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID,
                payload: { id, label: "max", value: updatedValue[1].toString() },
            });
        },
        [dispatch, id],
    );

    useEffect(() => {
        dispatch({
            type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID,
            payload: { id, label: "min", value: min.value },
        });
        dispatch({
            type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID,
            payload: { id, label: "max", value: max.value },
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <p className="font-bold">{title}</p>
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
                            {unit}
                        </span>
                    )}
                    labelPosition="bottom"
                />
            </div>
        </div>
    );
};
