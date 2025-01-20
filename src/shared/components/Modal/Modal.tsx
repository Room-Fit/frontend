import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import { useModal } from "@/shared/components/Modal/useModal";
import { useInitialStyle } from "@/shared/hooks";
import { cn } from "@/shared/lib";

export interface ModalProps {
    children?: React.ReactNode;
}

const Root = ({ children }: ModalProps) => {
    const { isOpen } = useModal();
    if (!isOpen) return null;

    return createPortal(
        <Modal.Wrapper>
            <Modal.Overlay />
            <Modal.Container>{children}</Modal.Container>
        </Modal.Wrapper>,
        document.body,
    );
};

const Wrapper = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="container fixed top-0 left-0 w-screen h-screen z-[100] flex items-center justify-center">
            {children}
        </div>
    );
};

const Overlay = () => {
    const { closeModal } = useModal();

    const { ref } = useInitialStyle<HTMLDivElement>({
        opacity: "0",
        transition: "all 200ms ease-in-out",
    });

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        element.style.opacity = "1";
    }, [ref]);

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-screen h-screen bg-black/70 z-[100]"
            onClick={() => closeModal()}
        />
    );
};

const Container = ({ children }: { children?: React.ReactNode }) => {
    const { isOpen } = useModal();

    const { ref } = useInitialStyle<HTMLDivElement>({
        opacity: "0",
        transform: "scale(0.7)",
    });

    const { closeModal } = useModal();

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
            className="modal-Container z-[200] p-4 relative inset-0 w-full h-full flex justify-center items-center"
            style={{ transition: "opacity 0.3s, transform 0.3s" }}
            onClick={() => closeModal()}
        >
            {children}
        </div>
    );
};

export interface ModalContentProps extends React.ComponentProps<"div"> {
    children?: React.ReactNode;
    onClick?: (...e: never[]) => unknown;
}

export const Content = ({ className, children, onClick, ...props }: ModalContentProps) => {
    return (
        <div
            className={cn("p-4 bg-white rounded-md", className)}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export const Modal = {
    Root,
    Wrapper,
    Container,
    Overlay,
    Content,
};
