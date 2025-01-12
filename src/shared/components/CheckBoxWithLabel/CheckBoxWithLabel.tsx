import { Checkbox, Label } from "@/shared/ui";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

export interface CheckBoxWithLabelProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    id?: string;
    label?: React.ReactNode;
    labelClassName?: string;
    checkboxClassName?: string;
}

export const CheckBoxWithLabel = ({
    id,
    label,
    checkboxClassName,
    labelClassName,
    ...rest
}: CheckBoxWithLabelProps) => {
    return (
        <li className="flex items-center gap-1">
            <Checkbox id={id} className={checkboxClassName} {...rest} />
            <Label htmlFor={id} className={labelClassName}>
                {label}
            </Label>
        </li>
    );
};
