import { useEffect, useState } from "react";

import { ToggleButtonItem } from "@/shared/components/ToggleButtonGroup/ToggleButtonItem";

export interface ToggleButtonGroupProps {
    options: string[];
    onChange: (selectedOption: string) => void;
}

export const ToggleButtonGroup = ({ options, onChange }: ToggleButtonGroupProps) => {
    const [selectedOption, setSelectedOption] = useState<string>("");

    useEffect(() => {
        onChange(selectedOption as string);
    }, [onChange, selectedOption]);

    return (
        <div className="flex gap-2">
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
