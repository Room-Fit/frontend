import { KeyRound, LogOut, UserRoundPen } from "lucide-react";

import { Menu } from "./Menu";
import { MenuItem } from "@/features/mypage/ui/MenuItem";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Menu> = {
    title: "Features/MyPage/Menu",
    component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    args: {
        label: "내 정보 관리",
    },
    render: (args) => {
        return (
            <Menu label={args.label}>
                <MenuItem label="비밀번호 변경하기" icon={<KeyRound size={20} />} />
                <MenuItem label="프로필 관리하기" icon={<UserRoundPen size={20} />} />
                <MenuItem label="로그아웃" icon={<LogOut size={20} />} />
            </Menu>
        );
    },
};
