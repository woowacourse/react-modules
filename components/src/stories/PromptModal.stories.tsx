import type { Meta, StoryObj } from "@storybook/react";
import PromptModal from "../lib/ModalVariants/PromptModal";

const meta = {
  title: "PromptModal",
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OpenPromptModal: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: "테스트",
  },
};
