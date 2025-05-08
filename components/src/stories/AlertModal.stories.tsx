import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "../lib/modals/AlertModal";

const meta = {
  title: "AlertModal",
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    content: "테스트입니다.",
  },
};
