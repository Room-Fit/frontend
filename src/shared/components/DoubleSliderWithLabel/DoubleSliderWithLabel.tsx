import { DualRangeSlider, DualRangeSliderProps, Label } from "@/shared/ui";

export interface DoubleSliderWithLabelProps extends DualRangeSliderProps {
    formElementLabel: string;
    unit?: string;
}

export const DoubleSliderWithLabel = ({
    formElementLabel,
    unit,
    ...rest
}: DoubleSliderWithLabelProps) => {
    return (
        <div>
            <Label className="font-bold">{formElementLabel}</Label>
            <div className="px-2">
                <DualRangeSlider
                    data-testid="double-slider-with-label-form"
                    className="pt-4 pb-10 text-gray-500"
                    label={(value) => (
                        <span className="flex-shrink-0 mt-2 text-sm text-gray-500">
                            {value}
                            {unit}
                        </span>
                    )}
                    labelPosition="bottom"
                    {...rest}
                />
            </div>
        </div>
    );
};
