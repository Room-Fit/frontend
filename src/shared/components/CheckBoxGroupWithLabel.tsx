import { useEffect, useState } from "react";

import { CheckBoxWithLabel } from "@/shared/components/CheckBoxWithLabel/CheckBoxWithLabel";
import { Label } from "@/shared/ui";

export interface CheckBoxGroupWithLabelProps {
    label: string;
    labelClassName?: string;
    groupClassName?: string;
    options: string[];
    onCheckedStateChange?: (checked: string[]) => void;
}

export const CheckBoxGroupWithLabel = ({
    label,
    labelClassName,
    groupClassName,
    options,
    onCheckedStateChange,
}: CheckBoxGroupWithLabelProps) => {
    const [checkedState, setCheckedState] = useState<string[]>([]);

    useEffect(() => {
        onCheckedStateChange && onCheckedStateChange(checkedState);
    }, [checkedState, onCheckedStateChange]);

    return (
        <>
            <Label className={labelClassName}>{label}</Label>
            <div className={groupClassName}>
                {options.map((option, index) => {
                    return (
                        <CheckBoxWithLabel
                            key={index}
                            label={option}
                            checked={checkedState.includes(option)}
                            onCheckedChange={(checked) => {
                                if (checked) setCheckedState([...checkedState, option]);
                                else
                                    setCheckedState(
                                        checkedState.filter((state) => state !== option),
                                    );
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
};
