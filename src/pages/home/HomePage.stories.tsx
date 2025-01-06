import HomePage from "@/pages/home/HomePage";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HomePage> = {
    title: "Pages/HomePage",
    component: HomePage,
    parameters: {
        defaultViewport: "mobile1",
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
    args: {},
};
