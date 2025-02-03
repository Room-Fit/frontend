import { useEffect, useState } from "react";

import { ToggleButtonItem } from "@/shared/components/ToggleButtonGroup/ToggleButtonItem";
import { cn } from "@/shared/lib";

export interface ToggleButtonGroupProps {
    className?: string;

    defaultOption: string;
    options: string[];
    onChange: (selectedOption: string) => void;
}

export const ToggleButtonGroup = ({
    className,
    defaultOption,
    options,
    onChange,
}: ToggleButtonGroupProps) => {
    const [selectedOption, setSelectedOption] = useState<string>(defaultOption);

    useEffect(() => {
        onChange(selectedOption as string);
    }, [onChange, selectedOption]);

    return (
        <div className={cn("flex w-full gap-1", className)}>
            {options.map((option, index) => {
                return (
                    <ToggleButtonItem
                        key={index}
                        isSelected={selectedOption === option}
                        option={option}
                        setSelectedOption={setSelectedOption}
                    />
                );
            })}
        </div>
    );
};
