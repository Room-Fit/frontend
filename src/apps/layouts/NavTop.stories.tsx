import { Bell } from "lucide-react";

import { NavTop } from "@/apps/layouts/NavTop";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavTop> = {
    title: "Layouts/NavTop",
    component: NavTop,
};

export default meta;
type Story = StoryObj<typeof NavTop>;

export const Default: Story = {
    args: {
        children: <Bell size={24} />,
    },
};
