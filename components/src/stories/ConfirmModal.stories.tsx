import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "../lib/ModalVariants/ConfirmModal";

const meta = {
  title: "ConfirmModal",
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenConfirmModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    content: "테스트입니다.",
  },
};
