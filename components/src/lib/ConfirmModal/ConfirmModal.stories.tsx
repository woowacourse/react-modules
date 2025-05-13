import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "./index";

const meta = {
  title: "Component/ConfirmModal",
  component: ConfirmModal,
  tags: ["autodocs"],
  args: {
    title: "ConfirmModal Title",
    confirmText: "ConfirmModal Text",
    size: "medium",
    closeTrigger: {
      outsideClick: true,
      escapeKey: true,
    },
    hasCloseButton: false,
    onRequestClose: () => {},
    onConfirm: () => {},
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
