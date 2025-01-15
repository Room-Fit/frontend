import { useEffect, useState } from "react";

import { RecruitmentPost } from "@/features/match/service/recruitmentPost";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/shared/ui/select";

type DormitoryType = RecruitmentPost["dormitory"];
type CampusType = "대구캠퍼스" | "상주캠퍼스";

interface SelectDormitoryProps {
    value: DormitoryType;
    onChange: (value: DormitoryType) => void;
}

const dormitoryByCampus: Record<CampusType, DormitoryType[]> = {
    대구캠퍼스: ["봉사관", "화목관", "향토관", "첨성관", "명의관", "누리관", "보람관", "선의관"],
    상주캠퍼스: ["경애관(상주)", "근면관(상주)", "청운관(상주)", "노악관(상주)"],
};

export const SelectDormitory = ({ value, onChange }: SelectDormitoryProps) => {
    const [selectedCampus, setSelectedCampus] = useState<CampusType>("대구캠퍼스");

    useEffect(() => {
        if (value) {
            const newCampus = value.includes("상주") ? "상주캠퍼스" : "대구캠퍼스";
            setSelectedCampus(newCampus);
        }
    }, [value]);

    return (
        <div className="flex gap-2">
            <Select
                value={selectedCampus}
                onValueChange={(campus: CampusType) => {
                    setSelectedCampus(campus);
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="캠퍼스" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="대구캠퍼스">대구캠퍼스</SelectItem>
                    <SelectItem value="상주캠퍼스">상주캠퍼스</SelectItem>
                </SelectContent>
            </Select>

            <Select value={value} onValueChange={onChange} disabled={!selectedCampus}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="기숙사 선택" />
                </SelectTrigger>
                <SelectContent>
                    {selectedCampus && (
                        <SelectGroup>
                            <SelectLabel>{selectedCampus}</SelectLabel>
                            {dormitoryByCampus[selectedCampus].map((dorm) => (
                                <SelectItem key={dorm} value={dorm}>
                                    {dorm}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    )}
                </SelectContent>
            </Select>
        </div>
    );
};
