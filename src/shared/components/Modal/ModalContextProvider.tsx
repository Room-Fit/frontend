import { useReducer } from "react";

import { ModalContext } from "./ModalContext";
import { MODAL_DISPATCH_ACTION_TYPES, modalReducer, modalState } from "@/shared/components";

export interface ModalContextProps {
    children: React.ReactNode;
}

export const ModalContextProvider = ({ children }: ModalContextProps) => {
    const [state, dispatch] = useReducer<typeof modalReducer>(modalReducer, modalState);

    const openModal = () => dispatch({ type: MODAL_DISPATCH_ACTION_TYPES.OPEN_MODAL });
    const closeModal = () => dispatch({ type: MODAL_DISPATCH_ACTION_TYPES.CLOSE_MODAL });

    return (
        <ModalContext.Provider
            value={{
                isOpen: state.isOpen,
                openModal,
                closeModal,
                onConfirm: () => dispatch({ type: MODAL_DISPATCH_ACTION_TYPES.CLOSE_MODAL }),
                onCancel: () => dispatch({ type: MODAL_DISPATCH_ACTION_TYPES.CLOSE_MODAL }),
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
