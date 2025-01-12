import { Option } from "@/entities/form/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui";
import * as SelectPrimitive from "@radix-ui/react-select";

export interface SelectorProps extends SelectPrimitive.SelectProps {
    placeholder?: string;
    options: Option[];
    value: string;
}

export const Selector = ({ placeholder, value, onValueChange, options }: SelectorProps) => {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((option) => {
                        return (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        );
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
