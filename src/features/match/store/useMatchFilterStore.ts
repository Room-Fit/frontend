import { produce } from "immer";
import { create } from "zustand";

import { persist, redux } from "zustand/middleware";

export enum MatchFilterActionType {
    CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS",
    ADD_RECRUITMENT_STATUS = "ADD_RECRUITMENT_STATUS",
    REMOVE_RECRUITMENT_STATUS = "REMOVE_RECRUITMENT_STATUS",
    TOGGLE_RECRUITMENT_STATUS = "TOGGLE_RECRUITMENT_STATUS",
    SET_MIN_RECRUITMENT_PEOPLE = "SET_MIN_RECRUITMENT_PEOPLE",
    SET_MAX_RECRUITMENT_PEOPLE = "SET_MAX_RECRUITMENT_PEOPLE",
    SET_DORMITORY_TYPE = "SET_DORMITORY_TYPE",
}

export type MatchFilterAction =
    | { type: MatchFilterActionType.CLEAR_ALL_FILTERS }
    | { type: MatchFilterActionType.ADD_RECRUITMENT_STATUS; payload: string }
    | { type: MatchFilterActionType.REMOVE_RECRUITMENT_STATUS; payload: string }
    | { type: MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS; payload: string }
    | { type: MatchFilterActionType.SET_MIN_RECRUITMENT_PEOPLE; payload: number }
    | { type: MatchFilterActionType.SET_MAX_RECRUITMENT_PEOPLE; payload: number }
    | { type: MatchFilterActionType.SET_DORMITORY_TYPE; payload: string };

export interface MatchFilterState {
    numOfAppliedFilters: number;
    isRecruitmentPeopleSet: boolean;

    minRecruitmentPeople: number;
    maxRecruitmentPeople: number;
    recruitmentStatus: string[];
    dormitoryType: string;
}

export const matchFilterInitialState: MatchFilterState = {
    numOfAppliedFilters: 0,
    isRecruitmentPeopleSet: false,

    minRecruitmentPeople: 1,
    maxRecruitmentPeople: 6,
    recruitmentStatus: [],
    dormitoryType: "전체",
};

export const matchFilterReducer = (
    state: MatchFilterState,
    action: MatchFilterAction,
): MatchFilterState => {
    switch (action.type) {
        case MatchFilterActionType.CLEAR_ALL_FILTERS:
            return matchFilterInitialState;

        case MatchFilterActionType.ADD_RECRUITMENT_STATUS:
            if (state.recruitmentStatus.includes(action.payload)) return state;
            return produce(state, (draft) => {
                draft.numOfAppliedFilters += 1;
                draft.recruitmentStatus.push(action.payload);
            });

        case MatchFilterActionType.REMOVE_RECRUITMENT_STATUS:
            if (!state.recruitmentStatus.includes(action.payload)) return state;
            return produce(state, (draft) => {
                draft.numOfAppliedFilters -= 1;
                draft.recruitmentStatus = draft.recruitmentStatus.filter(
                    (status) => status !== action.payload,
                );
            });

        case MatchFilterActionType.TOGGLE_RECRUITMENT_STATUS:
            if (state.recruitmentStatus.includes(action.payload)) {
                return produce(state, (draft) => {
                    draft.numOfAppliedFilters -= 1;
                    draft.recruitmentStatus = draft.recruitmentStatus.filter(
                        (status) => status !== action.payload,
                    );
                });
            }
            return produce(state, (draft) => {
                draft.numOfAppliedFilters += 1;
                draft.recruitmentStatus.push(action.payload);
            });

        case MatchFilterActionType.SET_MIN_RECRUITMENT_PEOPLE:
            return produce(state, (draft) => {
                if (!state.isRecruitmentPeopleSet) {
                    draft.numOfAppliedFilters += 1;
                    draft.isRecruitmentPeopleSet = true;
                }
                draft.minRecruitmentPeople = action.payload;
            });

        case MatchFilterActionType.SET_MAX_RECRUITMENT_PEOPLE:
            return produce(state, (draft) => {
                if (!state.isRecruitmentPeopleSet) {
                    draft.numOfAppliedFilters += 1;
                    draft.isRecruitmentPeopleSet = true;
                }
                draft.maxRecruitmentPeople = action.payload;
            });

        case MatchFilterActionType.SET_DORMITORY_TYPE:
            return produce(state, (draft) => {
                draft.numOfAppliedFilters += 1;
                draft.dormitoryType = action.payload;
            });

        default:
            return state;
    }
};

export const useMatchFilterStore = create(
    persist(redux(matchFilterReducer, matchFilterInitialState), {
        name: "match/filter",
    }),
);
