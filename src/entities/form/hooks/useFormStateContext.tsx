import { useContext } from "react";

import { produce } from "immer";

import { FormStateContext } from "@/entities/form/contexts";
import { FormSchema } from "@/entities/form/types";

export enum FORM_DISPATCH_ACTION_TYPES {
    INITIALIZE_FORM_STATUS = "INITIALIZE_FORM_STATUS",
    UPDATE_FORM_STATUS_BY_QUESTION_ID = "UPDATE_FORM_STATUS_BY_QUESTION_ID",
    APPEND_FORM_STATUS_BY_QUESTION_ID = "APPEND_FORM_STATUS_BY_QUESTION_ID",
    DELETE_FORM_STATUS_BY_QUESTION_ID = "DELETE_FORM_STATUS_BY_QUESTION_ID",
    TOGGLE_FORM_STATUS_BY_QUESTION_ID = "TOGGLE_FORM_STATUS_BY_QUESTION_ID",
    CHANGE_FORM_STATUS_BY_QUESTION_ID = "CHANGE_FORM_STATUS_BY_QUESTION_ID",
    CLEAR_FORM_STATUS = "CLEAR_FORM_STATUS",
}

export type FormDispatchAction =
    | {
          type: FORM_DISPATCH_ACTION_TYPES.INITIALIZE_FORM_STATUS;
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID;
          payload: FormDispatchActionPayload;
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID;
          payload: FormDispatchActionPayload;
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.DELETE_FORM_STATUS_BY_QUESTION_ID;
          payload: FormDispatchActionPayload;
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.TOGGLE_FORM_STATUS_BY_QUESTION_ID;
          payload: FormDispatchActionPayload;
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.CHANGE_FORM_STATUS_BY_QUESTION_ID;
          payload: FormDispatchActionPayload;
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.CLEAR_FORM_STATUS;
      };

export type FormDispatchActionPayload = {
    questionId: number;
    label?: string;
    value: string;
};

// [ ] immerJS 로 상태 불변성 처리 변경
export const formReducer = (state: FormSchema, action: FormDispatchAction): FormSchema => {
    switch (action.type) {
        // formSchema 를 기반으로 사용자의 입력에 대응하는 상태를 만들기 위해 초기화
        case FORM_DISPATCH_ACTION_TYPES.INITIALIZE_FORM_STATUS:
            return produce(state, (draft) => {
                draft.questions.forEach((question) => {
                    question.options = [];
                });
            });

        // questionId 를 기반으로 사용자가 선택한 label 에 대응하는 value 를 업데이트
        case FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID:
            return produce(state, (draft) => {
                draft.questions.forEach((question) => {
                    if (question.questionId === action.payload?.questionId) {
                        question.options.forEach((option) => {
                            if (option.label === action.payload?.label)
                                option.value = action.payload?.value;
                        });
                    }
                });
            });

        // questionId 를 기반으로 options 에 사용자가 선택한 label 과 value 를 추가
        case FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID:
            return produce(state, (draft) => {
                draft.questions.forEach((question) => {
                    if (question.questionId === action.payload?.questionId) {
                        question.options.push({
                            label: action.payload?.label || "",
                            value: action.payload?.value,
                        });
                    }
                });
            });

        // questionId 를 기반으로 options 에 사용자가 선택한 label 과 value 를 삭제
        case FORM_DISPATCH_ACTION_TYPES.DELETE_FORM_STATUS_BY_QUESTION_ID:
            return produce(state, (draft) => {
                draft.questions.forEach((question) => {
                    if (question.questionId === action.payload?.questionId) {
                        question.options = question.options.filter(
                            (option) =>
                                option.label !== action.payload?.label &&
                                option.value !== action.payload?.value,
                        );
                    }
                });
            });

        // questionId 를 기반으로 options 에 사용자가 선택한 label 과 value 를 toggle
        case FORM_DISPATCH_ACTION_TYPES.TOGGLE_FORM_STATUS_BY_QUESTION_ID:
            return produce(state, (draft) => {
                const question = draft.questions.find(
                    (q) => q.questionId === action.payload?.questionId,
                );
                if (question) {
                    const optionIndex = question.options.findIndex(
                        (option) => option.label === action.payload?.label,
                    );
                    if (optionIndex !== -1) question.options.splice(optionIndex, 1);
                    else {
                        question.options.push({
                            label: action.payload?.label || "",
                            value: action.payload?.value,
                        });
                    }
                }
            });

        case FORM_DISPATCH_ACTION_TYPES.CLEAR_FORM_STATUS:
            return {
                _id: "",
                title: "",
                description: "",
                questions: [],
            };

        case FORM_DISPATCH_ACTION_TYPES.CHANGE_FORM_STATUS_BY_QUESTION_ID:
            return produce(state, (draft) => {
                draft.questions.forEach((question) => {
                    if (question.questionId === action.payload?.questionId) {
                        question.options = [
                            {
                                label: action.payload?.label || "",
                                value: action.payload?.value,
                            },
                        ];
                    }
                });
            });

        default:
            return state;
    }
};

export const useFormStateContext = () => {
    const formStateContext = useContext(FormStateContext);
    if (!formStateContext)
        throw new Error(
            "useFormStateContext 는 FormStateContextProvider 내부에서 사용되어야 합니다",
        );

    return formStateContext;
};
