import { SliderFormElement } from "@/entities/form/ui";
import { CheckboxFormElement } from "@/entities/form/ui/CheckBoxFormElement/CheckboxFormElement";
import { DoubleSliderFormElement } from "@/entities/form/ui/DoubleSliderFormElement/DoubleSliderFormElement";
import { SelectorFormElement } from "@/entities/form/ui/SelectorFormElement/SelectorFormElement";

export type FormElementType = keyof typeof formElementMap;

export const formElementMap = {
    SELECTOR: SelectorFormElement,
    CHECKBOX: CheckboxFormElement,
    SLIDER: SliderFormElement,
    DOUBLE_SLIDER: DoubleSliderFormElement,
};
