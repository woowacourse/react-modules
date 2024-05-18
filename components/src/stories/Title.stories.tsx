import type { Meta, StoryObj } from "@storybook/react";

import Title from "../lib/Modal/Title/Title";

const meta = {
  title: "Title",
  component: Title,

  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "쿠폰 번호를 입력해 주세요.",
  },
};
