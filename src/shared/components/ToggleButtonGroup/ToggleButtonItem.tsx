import React from "react";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

export interface ToggleButtonItemProps {
    isSelected: boolean;

    option: string;
    setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

export const ToggleButtonItem = ({
    isSelected,
    setSelectedOption,
    option,
}: ToggleButtonItemProps) => {
    return (
        <Button
            className={cn(
                isSelected ? "bg-primary text-white" : "bg-dark-100 text-dark-300",
                "h-[34px]",
            )}
            onClick={() => setSelectedOption(option)}
        >
            {option}
        </Button>
    );
};
