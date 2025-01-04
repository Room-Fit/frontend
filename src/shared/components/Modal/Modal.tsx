import { useEffect } from "react";
import { createPortal } from "react-dom";

import { useModal } from "@/shared/components/Modal/useModal";
import { useInitialStyle } from "@/shared/hooks";

export interface ModalProps {
    children?: React.ReactNode;
}

const Root = ({ children }: ModalProps) => {
    const { isOpen } = useModal();
    if (!isOpen) return null;

    return createPortal(
        <Modal.Container>
            <Modal.Overlay />
            <Modal.Content>{children}</Modal.Content>
        </Modal.Container>,
        document.body,
    );
};

const Container = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="fixed inset-0 w-screen h-screen z-[100] grid place-items-center">
            {children}
        </div>
    );
};

const Overlay = () => {
    const { closeModal } = useModal();
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/70 z-[100]"
            onClick={() => closeModal()}
        />
    );
};

const Content = ({ children }: { children?: React.ReactNode }) => {
    const { isOpen } = useModal();

    const { ref } = useInitialStyle<HTMLDivElement>({
        opacity: "0",
        transform: "scale(0.7)",
    });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        if (isOpen) {
            element.style.opacity = "1";
            element.style.transform = "scale(1)";
        } else {
            element.style.opacity = "0";
            element.style.transform = "scale(0.7)";
        }
    }, [isOpen, ref]);

    return (
        <div
            ref={ref}
            className="bg-white z-[200] fixed p-4 rounded-md"
            style={{
                transition: "opacity 0.3s, transform 0.3s",
            }}
        >
            {children}
        </div>
    );
};

export const Modal = {
    Root,
    Container,
    Overlay,
    Content,
};
