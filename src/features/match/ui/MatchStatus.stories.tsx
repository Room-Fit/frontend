import { MatchStatus } from "@/features/match/ui/MatchStatus";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MatchStatus> = {
    title: "Features/Match/MatchStatus",
    component: MatchStatus,
};

export default meta;
type Story = StoryObj<typeof MatchStatus>;

export const Default: Story = {
    args: {
        status: "RECRUITING",
    },
};

export const RecruitingComplete: Story = {
    args: {
        status: "RECRUITMENT_COMPLETE",
    },
};

export const MatchComplete: Story = {
    args: {
        status: "MATCH_COMPLETE",
    },
};
