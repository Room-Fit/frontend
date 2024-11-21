import { useEffect, useState } from "react";

import { Slider } from "@/components/ui/slider";

export interface SliderWithLabelFormProps {
    label: string;
    minLabel: string;
    maxLabel: string;

    minValue: number;
    maxValue: number;
    step: number;

    value: number[];
    onChange: (value: number[]) => void;
}

export const SliderWithLabelForm = ({
    label,
    minLabel,
    maxLabel,
    minValue,
    maxValue,
    step,

    value,
    onChange,
}: SliderWithLabelFormProps) => {
    const [sliderValue, setSliderValue] = useState<number[]>(value);

    useEffect(
        function onSliderValueChange() {
            onChange(sliderValue);
        },
        [sliderValue],
    );

    return (
        <div>
            <p className="font-bold">{label}</p>
            <div className="px-2">
                <Slider
                    className="pt-4 text-gray-500"
                    value={sliderValue}
                    onValueChange={setSliderValue}
                    min={minValue}
                    max={maxValue}
                    step={step}
                />
                <div className="flex justify-between my-1">
                    <span className="text-sm text-gray-500">{minLabel}</span>
                    <span className="text-sm text-gray-500">{maxLabel}</span>
                </div>
            </div>
        </div>
    );
};
