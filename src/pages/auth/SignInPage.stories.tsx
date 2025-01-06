import SignInPage from "@/pages/auth/SignInPage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SignInPage> = {
    title: "Pages/SignInPage (로그인 페이지)",
    component: SignInPage,
    parameters: {
        defaultViewport: "mobile1",
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof SignInPage>;

export const Default: Story = {
    args: {},
};
