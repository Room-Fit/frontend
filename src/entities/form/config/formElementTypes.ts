import { SliderFormElement } from "@/entities/form/ui";
import { CheckboxFormElement } from "@/entities/form/ui/CheckboxFormElement";
import { DoubleSliderFormElement } from "@/entities/form/ui/DoubleSliderFormElement";
import { SelectorFormElement } from "@/entities/form/ui/SelectorFormElement";

export type FormElementType = keyof typeof formElementMap;

export const formElementMap = {
    selector: SelectorFormElement,
    checkbox: CheckboxFormElement,
    slider: SliderFormElement,
    doubleSlider: DoubleSliderFormElement,
};
