import { Filter } from "lucide-react";

import {
    MatchFilterActionType,
    useMatchFilterStore,
} from "@/features/match/store/useMatchFilterStore";
import { Selector } from "@/shared/components";
import { CheckBoxWithLabel } from "@/shared/components/CheckBoxWithLabel/CheckBoxWithLabel";
import { DoubleSliderWithLabel } from "@/shared/components/DoubleSliderWithLabel/DoubleSliderWithLabel";
import {
    Button,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    Label,
} from "@/shared/ui";

export const MatchFilter = () => {
    const {
        numOfAppliedFilters,
        recruitmentStatus,
        minRecruitmentPeople,
        maxRecruitmentPeople,
        dormitoryType,
        dispatch,
    } = useMatchFilterStore();

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="link" className="relative">
                    <Filter />
                    <span className="absolute w-4 h-4 text-xs text-white rounded-full top-1 right-1 bg-primary">
                        {numOfAppliedFilters}
                    </span>
                </Button>
            </DrawerTrigger>
            <DrawerContent className="w-full max-w-[500px] mx-auto">
                <DrawerHeader className="flex items-end justify-between px-4 py-1">
                    <DrawerTitle className="text-base">모집공고 필터링</DrawerTitle>
                    <DrawerDescription className="text-xs">
                        <span>{numOfAppliedFilters}</span>
                        <span>개 필터 적용됨</span>
                    </DrawerDescription>
                </DrawerHeader>

                <div className="px-4 py-1">
                    <Label className="font-semibold">모집상태</Label>
                    <div className="flex gap-2">
                        {/* TODO: Array.map 으로 리팩토링 필요 */}
                        <CheckBoxWithLabel
                            label="모집중"
                            checked={recruitmentStatus.includes("모집중")}
                            onCheckedChange={() => {
                                dispatch({
                                    type: MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS,
                                    payload: "모집중",
                                });
                            }}
                        />
                        <CheckBoxWithLabel
                            label="모집완료"
                            checked={recruitmentStatus.includes("모집완료")}
                            onCheckedChange={() => {
                                dispatch({
                                    type: MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS,
                                    payload: "모집완료",
                                });
                            }}
                        />
                        <CheckBoxWithLabel
                            label="매칭완료"
                            checked={recruitmentStatus.includes("매칭완료")}
                            onCheckedChange={() => {
                                dispatch({
                                    type: MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS,
                                    payload: "매칭완료",
                                });
                            }}
                        />
                    </div>

                    <Label className="font-semibold">기숙사</Label>
                    <Selector
                        options={[
                            { value: "전체", label: "전체" },
                            { value: "첨성관", label: "첨성관" },
                            { value: "보람관", label: "보람관" },
                            { value: "누리관", label: "누리관" },
                            { value: "향토관", label: "향토관" },
                        ]}
                        value={dormitoryType}
                        onValueChange={(value) => {
                            dispatch({
                                type: MatchFilterActionType.SET_DORMITORY_TYPE,
                                payload: value,
                            });
                        }}
                    />

                    <DoubleSliderWithLabel
                        formElementLabel="모집인원"
                        min={1}
                        max={4}
                        step={1}
                        unit="명"
                        value={[minRecruitmentPeople, maxRecruitmentPeople]}
                        onValueChange={([min, max]) => {
                            dispatch({
                                type: MatchFilterActionType.SET_MIN_RECRUITMENT_PEOPLE,
                                payload: min,
                            });
                            dispatch({
                                type: MatchFilterActionType.SET_MAX_RECRUITMENT_PEOPLE,
                                payload: max,
                            });
                        }}
                    />
                </div>

                <DrawerFooter>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="w-full"
                            onClick={() =>
                                dispatch({ type: MatchFilterActionType.CLEAR_ALL_FILTERS })
                            }
                        >
                            필터 초기화
                        </Button>
                        <DrawerClose className="w-full">
                            <Button variant="default" className="w-full">
                                필터 적용
                            </Button>
                        </DrawerClose>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
