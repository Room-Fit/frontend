import * as React from "react";

import { cn } from "@/shared/lib/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn("relative flex w-full touch-none select-none items-center", className)}
        {...props}
    >
        <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full grow bg-dark-100">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="block w-5 h-5 transition-colors rounded-full shadow-md border-primary bg-background ring-offset-background focus-visible:outline-none focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export interface DualRangeSliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
    labelPosition?: "top" | "bottom";
    label?: (value: number | undefined) => React.ReactNode;
}

const DualRangeSlider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    DualRangeSliderProps
>(({ className, label, labelPosition = "top", ...props }, ref) => {
    const initialValue = Array.isArray(props.value) ? props.value : [props.min, props.max];

    return (
        <SliderPrimitive.Root
            ref={ref}
            className={cn("relative flex w-full touch-none select-none items-center", className)}
            {...props}
        >
            <SliderPrimitive.Track className="relative w-full h-2 overflow-hidden rounded-full grow bg-dark-100">
                <SliderPrimitive.Range className="absolute h-full bg-primary" />
            </SliderPrimitive.Track>
            {initialValue.map((value, index) => (
                <React.Fragment key={index}>
                    <SliderPrimitive.Thumb className="relative block w-5 h-5 transition-colors rounded-full shadow-md bg-background ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        {label && (
                            <span
                                className={cn(
                                    "absolute flex w-full justify-center",
                                    labelPosition === "top" && "-top-7",
                                    labelPosition === "bottom" && "top-4",
                                )}
                            >
                                {label(value)}
                            </span>
                        )}
                    </SliderPrimitive.Thumb>
                </React.Fragment>
            ))}
        </SliderPrimitive.Root>
    );
});
DualRangeSlider.displayName = "DualRangeSlider";

export { Slider, DualRangeSlider };
