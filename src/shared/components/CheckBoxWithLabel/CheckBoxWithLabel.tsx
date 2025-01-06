import { Checkbox, Label } from "@/shared/ui";

export interface CheckBoxWithLabelProps {
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
}: CheckBoxWithLabelProps) => {
    return (
        <li className="flex items-center gap-1">
            <Checkbox id={id} className={checkboxClassName} />
            <Label htmlFor={id} className={labelClassName}>
                {label}
            </Label>
        </li>
    );
};
