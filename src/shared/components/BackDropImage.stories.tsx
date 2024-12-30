import testImage from "@/assets/bg__main.webp";

import { BackDropImage } from "@/shared/components/BackDropImage";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BackDropImage> = {
    title: "Shared/BackDropImage",
    component: BackDropImage,
};

export default meta;
type Story = StoryObj<typeof BackDropImage>;

export const Default: Story = {
    args: {
        src: testImage,
        alt: "test image",
        width: "200px",
        height: "200px",
    },
};
