import { Meta, StoryObj } from "@storybook/react";

import ConfirmModal from "./ConfirmModal";

const meta = {
  title: "Modal/ConfirmModal",

  component: ConfirmModal,

  parameters: {
    controls: { exclude: ["isOpen", "onClose", "children"] },
  },

  argTypes: {
    position: {
      options: ["top", "center", "bottom"],
      control: {
        type: "radio",
      },
    },

    size: {
      options: ["full", "large", "medium", "small"],
      control: {
        type: "radio",
      },
    },

    device: {
      options: ["desktop", "tablet", "mobile"],
      control: {
        type: "radio",
      },
    },
  },

  tags: ["autodocs"],
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    title: "카드를 삭제하시겠습니까?",
    confirmText: "삭제하면 복구하실 수 없습니다.",
    isOpen: true,
  },
};
