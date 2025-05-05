import type { Meta, StoryObj } from "@storybook/react";

import ModalContent from "./ModalContent";

const meta = {
  title: "ModalContent",
  component: ModalContent,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "모달 컨텐츠 컴포넌트입니다.",
      },
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
} satisfies Meta<typeof ModalContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "",
    position: "center",
  },

  render: (args) => {
    return <ModalContent {...args}>모달 컨텐츠입니다.</ModalContent>;
  },
};
