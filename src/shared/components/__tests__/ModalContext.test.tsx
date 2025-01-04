import {
    MODAL_DISPATCH_ACTION_TYPES,
    modalReducer,
    modalState,
    useModal,
} from "@/shared/components/Modal";
import { renderHook } from "@testing-library/react";

describe("ModalContext", () => {
    describe("useModal()", () => {
        test("useModal 이 ModalContextProvider 내부에서 사용되지 않으면 에러를 반환한다", () => {
            try {
                renderHook(() => useModal());
            } catch (e: any) {
                expect(e.message).toBe(
                    "useModal 는 ModalContextProvider 내부에서 사용되어야 합니다",
                );
            }
        });
    });

    describe("modalReducer()", () => {
        test("OPEN_MODAL : modalState 의 isOpen 상태를 true 로 변경한다", () => {
            const updatedState = modalReducer(modalState, {
                type: MODAL_DISPATCH_ACTION_TYPES.OPEN_MODAL,
            });

            expect(updatedState.isOpen).toBe(true);
        });

        test("CLOSE_MODAL : modalState 의 isOpen 상태를 false 로 변경한다", () => {
            const updatedState = modalReducer(modalState, {
                type: MODAL_DISPATCH_ACTION_TYPES.CLOSE_MODAL,
            });

            expect(updatedState.isOpen).toBe(false);
        });
    });
});
