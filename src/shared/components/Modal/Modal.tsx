import React from "react";
import { createPortal } from "react-dom";

import { useModal } from "@/shared/components/Modal/useModal";
import { useOnMountAnimation } from "@/shared/hooks/useOnMountAnimation";
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

    const { ref } = useOnMountAnimation<HTMLDivElement>({
        initialStyles: {
            opacity: "0",
        },
        animationStyles: {
            opacity: "1",
        },
        duration: 200,
        delay: 0,
        timingFunction: "ease-in-out",
    });

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-screen h-screen bg-black/70 z-[100]"
            onClick={() => closeModal()}
        />
    );
};

const Container = ({ children }: { children?: React.ReactNode }) => {
    const { closeModal } = useModal();

    const { ref } = useOnMountAnimation<HTMLDivElement>({
        initialStyles: {
            opacity: "0",
            transform: "scale(0.7)",
        },
        animationStyles: {
            opacity: "1",
            transform: "scale(1)",
        },
        duration: 200,
        delay: 0,
        timingFunction: "ease-in-out",
    });

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
