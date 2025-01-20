import { ProfileModal } from "@/entities/profile/ui/ProfileModal/ProfileModal";
import { ModalContextProvider } from "@/shared/components/Modal/ModalContextProvider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileModal> = {
    title: "Entity/Profile/ProfileModal",
    component: ProfileModal,
};

export default meta;
type Story = StoryObj<typeof ProfileModal>;

export const Default: Story = {
    args: {},
    render: () => {
        return (
            <ModalContextProvider>
                <ProfileModal />
            </ModalContextProvider>
        );
    },
};
