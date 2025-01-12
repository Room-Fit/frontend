import {
    MatchFilterActionType,
    matchFilterReducer,
    MatchFilterAction,
    MatchFilterState,
} from "@/features/match/store/useMatchFilterStore";

describe("룸메이트 모집공고 필터링 상태 변경을 테스트합니다", () => {
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

    test("체크된 모든 '모집상태'를 반영합니다", () => {
        const action: MatchFilterAction = {
            type: MatchFilterActionType.SET_RECRUITMENT_STATUS,
            payload: ["status1", "status2"],
        };

        const result = matchFilterReducer(state, action);

        expect(result).toEqual({
            numOfAppliedFilters: 2,
            isRecruitmentPeopleSet: false,
            recruitmentStatus: ["status1", "status2"],
            minRecruitmentPeople: 1,
            maxRecruitmentPeople: 6,
            dormitoryType: "전체",
        });
    });

    test("체크된 '모집상태'를 추가합니다", () => {
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

    test("이미 체크된 '모집상태'를 해제합니다", () => {
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

    test("이미 체크된 '모집상태'가 반영되어있는 경우, 해당 체크상태를 해제합니다", () => {
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

    test("이미 체크된 '모집상태'가 반영되어있지 않은 경우, 해당 체크상태를 추가합니다", () => {
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

    test("최소 모집인원을 설정합니다", () => {
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

    test("최대 모집인원을 설정합니다", () => {
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

    test("모든 필터 상태를 초기화합니다", () => {
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
