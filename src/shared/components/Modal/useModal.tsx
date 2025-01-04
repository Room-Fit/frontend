import { useContext } from "react";

import { ModalContext } from "./ModalContext";

export enum MODAL_DISPATCH_ACTION_TYPES {
    OPEN_MODAL = "OPEN_MODAL",
    CLOSE_MODAL = "CLOSE_MODAL",
}

export type ModalState = {
    isOpen: boolean;
};

export const modalState: ModalState = {
    isOpen: true,
};

export type ModalDispatchAction =
    | {
          type: MODAL_DISPATCH_ACTION_TYPES.OPEN_MODAL;
      }
    | {
          type: MODAL_DISPATCH_ACTION_TYPES.CLOSE_MODAL;
      };

export const modalReducer = (state: ModalState, action: ModalDispatchAction): ModalState => {
    switch (action.type) {
        case MODAL_DISPATCH_ACTION_TYPES.OPEN_MODAL:
            return { ...state, isOpen: true };
        case MODAL_DISPATCH_ACTION_TYPES.CLOSE_MODAL:
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) throw new Error("useModal 는 ModalContextProvider 내부에서 사용되어야 합니다");
    return context;
};
