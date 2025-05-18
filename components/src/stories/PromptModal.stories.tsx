import type { Meta, StoryObj } from "@storybook/react";
import { PromptModal } from "../Modal/variants/PromptModal/PromptModal";

const meta: Meta<typeof PromptModal> = {
  title: "Components/PropmptModal",
  component: PromptModal,
};
export default meta;

type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Prompt 모달",
    content: "Prompt 모달 내용입니다.",
    placeholder: "Prompt placeholder",
  },
  render: (args) => <PromptModal {...args} />,
};
