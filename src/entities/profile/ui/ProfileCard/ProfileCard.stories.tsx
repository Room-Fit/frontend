import { RecruitmentStatus } from "@/apps/types/status";

import { ProfileCard } from "@/entities/profile/ui/ProfileCard/ProfileCard";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProfileCard> = {
    title: "Entity/Profile/ProfileCard",
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Blue: Story = {
    args: {
        status: RecruitmentStatus.RECRUITING,
        nickname: "김대건",
        children: "안녕하세요",
    },
};

export const GrayTransparent: Story = {
    args: {
        status: RecruitmentStatus.MATCH_COMPLETE,
        nickname: "김대건",
        children: "안녕하세요",
    },
};
