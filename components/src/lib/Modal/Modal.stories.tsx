import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";

const meta = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: "가운데 모달입니다.",
  },
};

export const Bottom: Story = {
  args: {
    isOpen: true,
    children: "아래 모달입니다.",
    position: "bottom",
  },
};
