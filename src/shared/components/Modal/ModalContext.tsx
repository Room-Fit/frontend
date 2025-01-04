import { createContext } from "react";

export interface ModalContextProps {
    isOpen: boolean;

    openModal: () => void;
    closeModal: () => void;

    onConfirm: () => void;
    onCancel: () => void;
}

export const ModalContext = createContext<ModalContextProps | null>(null);
