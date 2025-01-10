import { ChatSideBarProfileGroup } from "@/entities/chat/ui/ChatSideBar/ChatSideBarProfileGroup";
import { ChatProfileCard } from "@/entities/profile/ui/ChatProfileCard/ChatProfileCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatSideBarProfileGroup> = {
    title: "Entities/Chat/ChatSideBarProfileGroup",
    component: ChatSideBarProfileGroup,
};

export default meta;
type Story = StoryObj<typeof ChatSideBarProfileGroup>;

export const Default: Story = {
    args: {},
    render: () => {
        return (
            <ChatSideBarProfileGroup>
                <ChatProfileCard id={1} name="김룸핏" description="경북대학교 컴퓨터학부" />
                <ChatProfileCard id={2} name="김룸핏" description="경북대학교 컴퓨터학부" />
                <ChatProfileCard id={3} name="김룸핏" description="경북대학교 컴퓨터학부" />
            </ChatSideBarProfileGroup>
        );
    },
};
