import { useLayoutEffect, useRef } from "react";

import { cn } from "@/shared/lib";

export interface RangeDisplayProps {
    className?: string;

    minRange: number;
    maxRange: number;

    minValue: number;
    maxValue: number;

    minLabel?: string;
    maxLabel?: string;
}

export const RangeDisplay = ({
    className,
    minRange,
    maxRange,
    minValue,
    maxValue,
    minLabel,
    maxLabel,
}: RangeDisplayProps) => {
    const rangeDisplayRef = useRef<HTMLDivElement>(null);

    const isMinValueCloser = Math.abs(minRange - minValue) < Math.abs(maxRange - maxValue);

    useLayoutEffect(() => {
        const totalRange = maxRange - minRange;
        const startPercentage = ((minValue - minRange) / totalRange) * 100;
        const endPercentage = ((maxValue - minRange) / totalRange) * 100;

        if (!rangeDisplayRef.current) return;
        rangeDisplayRef.current.style.left = `${startPercentage}%`;
        rangeDisplayRef.current.style.width = `${endPercentage - startPercentage}%`;
    }, [maxRange, maxValue, minRange, minValue]);

    return (
        <div className={cn("relative h-9 mt-1", className)}>
            <div className="absolute w-full h-[10px] rounded-full bg-dark-100" />
            <div className="absolute h-[10px] rounded-full bg-primary" ref={rangeDisplayRef} />
            <div className="absolute flex justify-between w-full top-[14px] text-xs font-normal">
                <p className={isMinValueCloser ? "text-primary" : "text-dark-300"}>{minLabel}</p>
                <p className={isMinValueCloser ? "text-dark-300" : "text-primary"}>{maxLabel}</p>
            </div>
        </div>
    );
};
