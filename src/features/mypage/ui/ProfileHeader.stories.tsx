import { ProfileHeader } from "@/features/mypage/ui/ProfileHeader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileHeader> = {
    title: "Features/MyPage/ProfileHeader",
    component: ProfileHeader,
};

export default meta;
type Story = StoryObj<typeof ProfileHeader>;

export const Default: Story = {
    args: {
        nickname: "toothlessKid",
        email: "toothless@knu.ac.kr",
    },
};
