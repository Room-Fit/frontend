import {
    FORM_DISPATCH_ACTION_TYPES,
    formReducer,
    useFormStateContext,
} from "@/entities/form/hooks/useFormStateContext";
import { FormSchema } from "@/entities/form/types";
import { renderHook } from "@testing-library/react";

describe("FormContext", () => {
    describe("useFormStateContext()", () => {
        test("useFormStateContext 가 FormStateContextProvider 내부에서 사용되지 않는 경우 에러를 반환한다", () => {
            try {
                renderHook(() => useFormStateContext());
            } catch (e: any) {
                expect(e.message).toBe(
                    "useFormStateContext 는 FormStateContextProvider 내부에서 사용되어야 합니다",
                );
            }
        });
    });

    describe("formReducer()", () => {
        let formInitialState: FormSchema;

        beforeEach(() => {
            formInitialState = {
                _id: "_id",
                title: "test-title",
                description: "test-description",
                questions: [
                    {
                        questionId: 1,
                        questionText: "test-question-text",
                        questionType: "test-type",
                        options: [
                            { label: "선택지1", value: "value1" },
                            { label: "선택지2", value: "value2" },
                            { label: "선택지3", value: "value3" },
                        ],
                        dataType: "string",
                    },
                ],
            };
        });

        test("INITIALIZE_FORM_STATUS : formSchema 를 기반으로 사용자의 입력에 대응하는 상태를 만들기 위해 초기화한다", () => {
            const updatedState = formReducer(formInitialState, {
                type: FORM_DISPATCH_ACTION_TYPES.INITIALIZE_FORM_STATUS,
            });

            expect(updatedState?.questions[0].options).toEqual([]);
        });

        test("APPEND_FORM_STATUS_BY_QUESTION_ID : questionId 에 해당하는 문항의 선택지 중 label 에 해당하는 option 을 options 배열에 추가한다", () => {
            const updatedState = formReducer(formInitialState, {
                type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId: 1, label: "value", value: "1" },
            });

            expect(updatedState?.questions[0].options).toEqual([
                { label: "선택지1", value: "value1" },
                { label: "선택지2", value: "value2" },
                { label: "선택지3", value: "value3" },
                { label: "value", value: "1" },
            ]);
        });

        test("INITIALIZE and APPEND STATUS_BY_QUESTION_ID", () => {
            let updatedState: FormSchema;

            updatedState = formReducer(formInitialState, {
                type: FORM_DISPATCH_ACTION_TYPES.INITIALIZE_FORM_STATUS,
            });

            updatedState = formReducer(updatedState, {
                type: FORM_DISPATCH_ACTION_TYPES.APPEND_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId: 1, label: "value", value: "1" },
            });

            expect(updatedState?.questions[0].options).toEqual([{ label: "value", value: "1" }]);
        });

        test("UPDATE_FORM_STATUS_BY_QUESTION_ID : questionId 에 해당하는 문항의 선택지 중 label 에 해당하는 선택지의 value 를 변경한다", () => {
            const updatedState = formReducer(formInitialState, {
                type: FORM_DISPATCH_ACTION_TYPES.UPDATE_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId: 1, label: "선택지2", value: "updatedValue" },
            });
            expect(updatedState?.questions[0].options[1].value).toBe("updatedValue");
        });

        test("DELETE_FORM_STATUS_BY_QUESTION_ID : questionId 에 해당하는 문항의 선택지 중 label 에 해당하는 option 을 options 배열에서 제거한다", () => {
            const updatedState = formReducer(formInitialState, {
                type: FORM_DISPATCH_ACTION_TYPES.DELETE_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId: 1, label: "선택지2", value: "value2" },
            });
            expect(updatedState?.questions[0].options).toEqual([
                { label: "선택지1", value: "value1" },
                { label: "선택지3", value: "value3" },
            ]);
        });

        describe("TOGGLE_FORM_STATUS_BY_QUESTION_ID : questionId 에 해당하는 문항의 선택지 중 label 에 해당하는 option 의 value 를 토글한다", () => {
            test("기존 label 에 대한 value 가 존재하지 않는 경우 label 에 해당하는 option 을 추가한다", () => {
                formInitialState.questions[0].options = [];

                const updatedState = formReducer(formInitialState, {
                    type: FORM_DISPATCH_ACTION_TYPES.TOGGLE_FORM_STATUS_BY_QUESTION_ID,
                    payload: { questionId: 1, label: "선택지2", value: "value2" },
                });
                expect(updatedState?.questions[0].options[0].value).toBe("value2");
            });

            test("기존 label 에 대한 value 가 존재하는 경우 label 에 해당하는 option 을 제거한다", () => {
                formInitialState.questions[0].options = [{ label: "선택지2", value: "value2" }];

                const updatedState = formReducer(formInitialState, {
                    type: FORM_DISPATCH_ACTION_TYPES.TOGGLE_FORM_STATUS_BY_QUESTION_ID,
                    payload: { questionId: 1, label: "선택지2", value: "value2" },
                });
                expect(updatedState?.questions[0].options).toHaveLength(0);
            });
        });

        test("CHANGE_FORM_STATUS_BY_QUESTION_ID : questionId 에 해당하는 문항의 선택지 중 option 의 value 를 새로운 label, value 로 교체한다", () => {
            formInitialState.questions[0].options = [{ label: "선택지1", value: "value1" }];

            const updatedState = formReducer(formInitialState, {
                type: FORM_DISPATCH_ACTION_TYPES.CHANGE_FORM_STATUS_BY_QUESTION_ID,
                payload: { questionId: 1, label: "선택지2", value: "updatedValue" },
            });
            expect(updatedState?.questions[0].options[0]).toEqual({
                label: "선택지2",
                value: "updatedValue",
            });
        });
    });
});
