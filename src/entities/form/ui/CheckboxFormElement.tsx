import { useCallback, useId } from "react";

import {
    FORM_DISPATCH_ACTION_TYPES,
    useFormStateContext,
} from "@/entities/form/hooks/useFormStateContext";
import { Option } from "@/entities/form/types";
import { Checkbox } from "@/shared/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";

export interface CheckboxFormElementProps {
    questionId: number;
    questionText: string;
    options: Option[];
}

export const CheckboxFormElement = ({
    questionId,
    questionText,
    options,
}: CheckboxFormElementProps) => {
    const htmlFor = useId();

    const { formState, dispatch } = useFormStateContext();

    const onChange = useCallback(
        (option: Option, checked: CheckedState) => {
            dispatch({
                type: FORM_DISPATCH_ACTION_TYPES.TOGGLE_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId, label: option.label, value: checked.toString() },
            });
        },
        [dispatch, questionId],
    );

    return (
        <div className="flex flex-col gap-1" data-testid="checkbox-with-label-form">
            <p className="font-bold">{questionText}</p>

            {options.map((option, index) => {
                const question = formState.questions.find(
                    (question) => question.questionId === questionId,
                );
                const isChecked =
                    question?.options.find((q) => q.label === option.label)?.value === "true";

                return (
                    <div key={index} className="flex items-center gap-1">
                        <Checkbox
                            data-testid={`checkbox_${option.label}`}
                            id={`${htmlFor}_${option.label}`}
                            className="block w-5 h-5"
                            checked={isChecked}
                            onCheckedChange={(checked) => onChange(option, checked)}
                        />
                        <label htmlFor={`${htmlFor}_${option.label}`}>{option.label}</label>
                    </div>
                );
            })}
        </div>
    );
};
