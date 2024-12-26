import { useContext, useEffect } from "react";

import { FormStateContext } from "@/entities/form/model/FormStateContext";
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
          payload: { questionId: number; label?: string; value: string };
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID;
          payload: { questionId: number; label?: string; value: string };
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.DELETE_FORM_STATUS_BY_QUESTION_ID;
          payload: { questionId: number; label?: string; value: string };
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.TOGGLE_FORM_STATUS_BY_QUESTION_ID;
          payload: { questionId: number; label?: string; value: string };
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.CHANGE_FORM_STATUS_BY_QUESTION_ID;
          payload: { questionId: number; label?: string; value: string };
      }
    | {
          type: FORM_DISPATCH_ACTION_TYPES.CLEAR_FORM_STATUS;
          payload?: {};
      };

export const formReducer = (state: FormSchema, action: FormDispatchAction) => {
    switch (action.type) {
        // formSchema 를 기반으로 사용자의 입력에 대응하는 상태를 만들기 위해 초기화
        case FORM_DISPATCH_ACTION_TYPES.INITIALIZE_FORM_STATUS:
            return {
                ...state,
                questions: state.questions.map((question) => {
                    return { ...question, options: [] };
                }),
            };

        // questionId 를 기반으로 사용자가 선택한 label 에 대응하는 value 를 업데이트
        case FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID:
            return {
                ...state,
                questions: state.questions.map((question) => {
                    if (question.questionId === action.payload.questionId) {
                        const updatedOptions = question.options.map((option) => {
                            if (option.label === action.payload.label)
                                return { ...option, value: action.payload.value };
                            return option;
                        });
                        return { ...question, options: updatedOptions };
                    }
                    return question;
                }),
            };

        // questionId 를 기반으로 options 에 사용자가 선택한 label 과 value 를 추가
        case FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID:
            return {
                ...state,
                questions: state.questions.map((question) => {
                    if (question.questionId === action.payload.questionId) {
                        return {
                            ...question,
                            options: [
                                ...question.options,
                                { label: action.payload.label || "", value: action.payload.value },
                            ],
                        };
                    }
                    return question;
                }),
            };

        // questionId 를 기반으로 options 에 사용자가 선택한 label 과 value 를 삭제
        case FORM_DISPATCH_ACTION_TYPES.DELETE_FORM_STATUS_BY_QUESTION_ID:
            return {
                ...state,
                questions: state.questions.map((question) => {
                    if (question.questionId === action.payload.questionId) {
                        return {
                            ...question,
                            options: question.options.filter(
                                (option) =>
                                    option.label !== action.payload.label &&
                                    option.value !== action.payload.value,
                            ),
                        };
                    }
                    return question;
                }),
            };

        // questionId 를 기반으로 options 에 사용자가 선택한 label 과 value 를 toggle
        case FORM_DISPATCH_ACTION_TYPES.TOGGLE_FORM_STATUS_BY_QUESTION_ID:
            return {
                ...state,
                questions: state.questions.map((question) => {
                    if (question.questionId === action.payload.questionId) {
                        return {
                            ...question,
                            options: question.options.find(
                                (option) => option.label === action.payload.label,
                            )
                                ? question.options.filter(
                                      (option) => option.label !== action.payload.label,
                                  )
                                : [
                                      ...question.options,
                                      {
                                          label: action.payload.label || "",
                                          value: action.payload.value,
                                      },
                                  ],
                        };
                    }
                    return question;
                }),
            };

        case FORM_DISPATCH_ACTION_TYPES.CLEAR_FORM_STATUS:
            return {
                _id: "",
                title: "",
                description: "",
                questions: [],
            };

        case FORM_DISPATCH_ACTION_TYPES.CHANGE_FORM_STATUS_BY_QUESTION_ID:
            return {
                ...state,
                questions: state.questions.map((question) => {
                    if (question.questionId === action.payload.questionId) {
                        return {
                            ...question,
                            options: [
                                { label: action.payload.label || "", value: action.payload.value },
                            ],
                        };
                    }
                    return question;
                }),
            };
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
