import { ChevronRight } from "lucide-react";

import { Card } from "@/shared/components/Card/Card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        theme: "blue",
        children: (
            <div className="flex items-center justify-between w-full text-white">
                <div className="flex-grow-[1] z-10">
                    <h1 className="my-1 text-xl font-bold">이름</h1>
                    <div className="text-sm">
                        <p>1학번</p>
                        <p>1년생</p>
                        <p>1</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <ChevronRight size={40} />
                </div>
            </div>
        ),
    },
};

export const Gray: Story = {
    args: {
        theme: "gray",
        children: (
            <div className="flex items-center justify-between w-full text-black">
                <div className="flex-grow-[1] z-10">
                    <h1 className="my-1 text-xl font-bold">이름</h1>
                    <div className="text-sm">
                        <p>경북대학교 컴퓨터학부</p>
                    </div>
                </div>
                <div className="flex items-center bg-[#C9CACA] text-[#727171] text-xs rounded-full p-1">
                    프로필
                    <ChevronRight size={15} />
                </div>
            </div>
        ),
    },
};
