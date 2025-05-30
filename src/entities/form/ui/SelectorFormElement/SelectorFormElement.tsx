import { useCallback, useId, useMemo } from "react";

import {
    FORM_DISPATCH_ACTION_TYPES,
    useFormStateContext,
} from "@/entities/form/hooks/useFormStateContext";
import { Question } from "@/entities/form/types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";

export type SelectorWithLabelFormProps = Question;

export const SelectorFormElement = ({ id, title, options }: SelectorWithLabelFormProps) => {
    const htmlFor = useId();

    const { formState, dispatch } = useFormStateContext();

    const questionIndex = useMemo(() => {
        return formState.questions.findIndex((question) => question.id === id);
    }, [formState.questions, id]);

    const value = formState.questions[questionIndex].options[0]?.value || "";

    const onValueChange = useCallback(
        (updatedValue: string) => {
            dispatch({
                type: FORM_DISPATCH_ACTION_TYPES.CHANGE_FORM_STATUS_BY_QUESTION_ID,
                payload: {
                    id,
                    label: options.find((option) => option.value === updatedValue)?.label || "",
                    value: updatedValue,
                },
            });
        },
        [dispatch, options, id],
    );

    return (
        <div data-testid="selector-with-label-form">
            <label className="py-1 font-bold" htmlFor={htmlFor}>
                {title}
            </label>

            <Select value={value} onValueChange={onValueChange}>
                <SelectTrigger className="w-full rounded-xl" asChild={false}>
                    <SelectValue placeholder="옵션을 선택해주세요"></SelectValue>
                </SelectTrigger>

                <SelectContent id={htmlFor}>
                    {options.map((option, index) => {
                        return (
                            <SelectItem
                                key={index}
                                value={option.value as string}
                                data-testid={`select-options_${option.label}`}
                            >
                                {option.label as string}
                            </SelectItem>
                        );
                    })}
                </SelectContent>
            </Select>
        </div>
    );
};
