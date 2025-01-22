import { useEffect, useState } from "react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@/shared/ui/select";

type SelectChatType = "PRIVATE" | "GROUP";

interface SelectChatTypeProps {
    value: SelectChatType;
    onChange: (value: SelectChatType) => void;
    onQuotaChange: (quota: number) => void;
}
const quotaOptions = [2, 3, 4, 5, 6];

export const SelectChatType = ({ value, onChange, onQuotaChange }: SelectChatTypeProps) => {
    const [maxQuota, setMaxQuota] = useState(2);

    useEffect(() => {
        if (value === "PRIVATE") {
            setMaxQuota(2);
            onQuotaChange(2);
        }
    }, [value, onQuotaChange]);

    const handleChatTypeChange = (type: SelectChatType) => {
        onChange(type);

        if (type === "PRIVATE") {
            setMaxQuota(2);
            onQuotaChange(2);
        }
    };

    const handleQuotaChange = (value: number) => {
        setMaxQuota(value);
        onQuotaChange(value);
    };

    return (
        <div className="flex gap-2">
            <Select value={value} onValueChange={handleChatTypeChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="채팅방 타입" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="GROUP">그룹</SelectItem>
                    <SelectItem value="PRIVATE">일대일</SelectItem>
                </SelectContent>
            </Select>
            {value === "GROUP" && (
                <Select
                    value={maxQuota.toString()}
                    onValueChange={(value) => handleQuotaChange(Number(value))}
                >
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
            )}
        </div>
    );
};
