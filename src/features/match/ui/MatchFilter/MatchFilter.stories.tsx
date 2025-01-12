import { MatchFilter } from "@/features/match/ui/MatchFilter/MatchFilter";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MatchFilter> = {
    title: "Features/Match/MatchFilter",
    component: MatchFilter,
};

export default meta;
type Story = StoryObj<typeof MatchFilter>;

export const Default: Story = {
    args: {},
};
