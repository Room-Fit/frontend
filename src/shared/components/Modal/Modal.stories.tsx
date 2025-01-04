import { Modal } from "./Modal";
import { ModalContextProvider } from "@/shared/components/Modal/ModalContextProvider";
import { useModal } from "@/shared/components/Modal/useModal";
import { Button } from "@/shared/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal.Content> = {
    title: "Shared/Modal",
    component: Modal.Content,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const Content = () => {
    const { closeModal } = useModal();
    return (
        <div className="flex gap-1">
            <Button variant="default" onClick={() => closeModal()}>
                Confirm
            </Button>
            <Button variant="outline" onClick={() => closeModal()}>
                Cancel
            </Button>
        </div>
    );
};

export const Default: Story = {
    args: {},
    render: () => {
        return (
            <ModalContextProvider>
                <Modal.Root>
                    <Content />
                </Modal.Root>
            </ModalContextProvider>
        );
    },
};
