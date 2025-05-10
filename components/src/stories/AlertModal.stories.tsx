import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "../lib/ModalVariants/AlertModal";

const meta = {
  title: "AlertModal",
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallAlertModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    content: "테스트입니다.",
    size: "small",
  },
};
export const MediumAlertModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    content: "테스트입니다.",
    size: "medium",
  },
};

export const LargeAlertModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    content: "테스트입니다.",
    size: "large",
  },
};
