import { Option } from "@/entities/form/types";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui";

export interface SelectorProps {
    placeholder?: string;
    onValueChange?: (value: string) => void;
    options: Option[];
}

export const Selector = ({ placeholder, onValueChange, options }: SelectorProps) => {
    return (
        <Select onValueChange={onValueChange}>
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
