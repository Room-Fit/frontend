import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui/select";

interface SelectQuotaProps {
    value: number;
    onChange: (value: number) => void;
}

export const SelectMaxQuota = ({ value, onChange }: SelectQuotaProps) => {
    const quotaOptions = [2, 3, 4, 5, 6];

    return (
        <Select value={value.toString()} onValueChange={(val) => onChange(Number(val))}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="인원수 선택" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>최대 인원수</SelectLabel>
                    {quotaOptions.map((quota) => (
                        <SelectItem key={quota} value={quota.toString()}>
                            {quota}명
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
