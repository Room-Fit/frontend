import React from "react";

import { cn } from "@/shared/lib";
import { Button } from "@/shared/ui";

export const chipVariants = {
    blue: "text-primary border-primary hover:text-primary hover:bg-white hover:border-primary",
    gray: "text-dark-400 bg-dark-200 border-0 hover:bg-dark-100 hover:text-dark-400",
};

export interface ChipProps extends React.ComponentProps<"button"> {
    theme: keyof typeof chipVariants;
    className?: string;
    children?: React.ReactNode;
}

export const Chip = ({ theme = "blue", children, className, ...rest }: ChipProps) => {
    return (
        <Button
            {...rest}
            variant="outline"
            className={cn(
                "h-[26px] rounded-full p-1 px-2 text-primary border-primary border-[1px] font-bold",
                chipVariants[theme],
                className,
            )}
        >
            {children}
        </Button>
    );
};
