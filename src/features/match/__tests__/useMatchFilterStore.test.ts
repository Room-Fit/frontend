import {
    MatchFilterActionType,
    matchFilterReducer,
    MatchFilterAction,
    MatchFilterState,
} from "@/features/match/store/useMatchFilterStore";

describe("useMatchFilterStore()", () => {
    describe("matchFilterReducer()", () => {
        let state: MatchFilterState;

        beforeEach(() => {
            state = {
                numOfAppliedFilters: 0,
                isRecruitmentPeopleSet: false,
                recruitmentStatus: [],
                minRecruitmentPeople: 1,
                maxRecruitmentPeople: 6,
                dormitoryType: "전체",
            };
        });

        test("MatchFilterActionType.ADD_RECRUITMENT_STATUS : payload 를 recruitmentStatus 에 추가합니다", () => {
            const action: MatchFilterAction = {
                type: MatchFilterActionType.ADD_RECRUITMENT_STATUS,
                payload: "status",
            };

            const result = matchFilterReducer(state, action);

            expect(result).toEqual({
                numOfAppliedFilters: 1,
                isRecruitmentPeopleSet: false,
                recruitmentStatus: ["status"],
                minRecruitmentPeople: 1,
                maxRecruitmentPeople: 6,
                dormitoryType: "전체",
            });
        });

        test("MatchFilterActionType.REMOVE_RECRUITMENT_STATUS : payload 를 recruitmentStatus 에서 제거합니다", () => {
            const action: MatchFilterAction = {
                type: MatchFilterActionType.REMOVE_RECRUITMENT_STATUS,
                payload: "status",
            };

            const result = matchFilterReducer(state, action);

            expect(result).toEqual({
                numOfAppliedFilters: 0,
                isRecruitmentPeopleSet: false,
                recruitmentStatus: [],
                minRecruitmentPeople: 1,
                maxRecruitmentPeople: 6,
                dormitoryType: "전체",
            });
        });

        test("MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS (default: active) : payload 가 존재하는 경우, recruitmentStatus 에서 제거합니다", () => {
            state.numOfAppliedFilters = 1;
            state.recruitmentStatus = ["status"];

            const action: MatchFilterAction = {
                type: MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS,
                payload: "status",
            };

            const result = matchFilterReducer(state, action);

            expect(result).toEqual({
                numOfAppliedFilters: 0,
                isRecruitmentPeopleSet: false,
                recruitmentStatus: [],
                minRecruitmentPeople: 1,
                maxRecruitmentPeople: 6,
                dormitoryType: "전체",
            });
        });

        test("MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS (default: inactive) : payload 가 존재하지 않는 경우, recruitmentStatus 에 추가합니다", () => {
            const action: MatchFilterAction = {
                type: MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS,
                payload: "status",
            };

            const result = matchFilterReducer(state, action);

            expect(result).toEqual({
                numOfAppliedFilters: 1,
                isRecruitmentPeopleSet: false,
                recruitmentStatus: ["status"],
                minRecruitmentPeople: 1,
                maxRecruitmentPeople: 6,
                dormitoryType: "전체",
            });
        });

        test("MatchFilterActionType.SET_MIN_RECRUITMENT_PEOPLE : payload 를 minRecruitmentPeople 에 반영하고, isRecruitmentPeopleSet 를 참으로 변경합니다", () => {
            const action: MatchFilterAction = {
                type: MatchFilterActionType.SET_MIN_RECRUITMENT_PEOPLE,
                payload: 2,
            };

            const result = matchFilterReducer(state, action);

            expect(result).toEqual({
                numOfAppliedFilters: 1,
                isRecruitmentPeopleSet: true,
                recruitmentStatus: [],
                minRecruitmentPeople: 2,
                maxRecruitmentPeople: 6,
                dormitoryType: "전체",
            });
        });

        test("MatchFilterActionType.SET_MAX_RECRUITMENT_PEOPLE  payload 를 maxRecruitmentPeople 에 반영하고, isRecruitmentPeopleSet 를 참으로 변경합니다", () => {
            const action: MatchFilterAction = {
                type: MatchFilterActionType.SET_MAX_RECRUITMENT_PEOPLE,
                payload: 5,
            };

            const result = matchFilterReducer(state, action);

            expect(result).toEqual({
                numOfAppliedFilters: 1,
                isRecruitmentPeopleSet: true,
                recruitmentStatus: [],
                minRecruitmentPeople: 1,
                maxRecruitmentPeople: 5,
                dormitoryType: "전체",
            });
        });

        test("MatchFilterActionType.CLEAR_ALL_FILTERS : 모든 필터 상태를 초기화합니다", () => {
            const action: MatchFilterAction = {
                type: MatchFilterActionType.CLEAR_ALL_FILTERS,
            };

            const result = matchFilterReducer(state, action);

            expect(result).toEqual({
                numOfAppliedFilters: 0,
                isRecruitmentPeopleSet: false,
                recruitmentStatus: [],
                minRecruitmentPeople: 1,
                maxRecruitmentPeople: 6,
                dormitoryType: "전체",
            });
        });
    });
});
