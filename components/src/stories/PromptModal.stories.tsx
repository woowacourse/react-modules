import type { Meta, StoryObj } from "@storybook/react";
import PromptModal from "../lib/ModalVariants/PromptModal";

const meta = {
  title: "PromptModal",
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallPromptModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    size: "small",
  },
};
export const MediumPromptModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    size: "medium",
  },
};
export const LargePromptModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
    size: "large",
  },
};
