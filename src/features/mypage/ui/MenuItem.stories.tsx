import { KeyRound } from "lucide-react";

import { MenuItem } from "@/features/mypage/ui/MenuItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MenuItem> = {
    title: "Features/MyPage/MenuItem",
    component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {
    args: {
        label: "비밀번호 변경하기",
        icon: <KeyRound size={20} />,
    },
};
