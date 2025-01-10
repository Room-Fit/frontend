import { ChatSideBar } from "@/entities/chat/ui/ChatSideBar/ChatSideBar";
import { ChatProfileCard } from "@/entities/profile/ui/ChatProfileCard/ChatProfileCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ChatSideBar> = {
    title: "Entities/Chat/ChatSideBar",
    component: ChatSideBar,
};

export default meta;
type Story = StoryObj<typeof ChatSideBar>;

export const Default: Story = {
    render: () => {
        return (
            <ChatSideBar>
                <ChatProfileCard id={0} name={"김룸핏"} description={"경북대학교 컴퓨터학부"} />
                <ChatProfileCard id={1} name={"김룸핏"} description={"경북대학교 컴퓨터학부"} />
                <ChatProfileCard id={2} name={"김룸핏"} description={"경북대학교 컴퓨터학부"} />
            </ChatSideBar>
        );
    },
};
