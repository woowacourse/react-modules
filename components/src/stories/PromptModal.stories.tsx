import type { Meta, StoryObj } from "@storybook/react";
import { PropmptModal } from "../Modal/variants/PromptModal/PromptModal";

const meta: Meta<typeof PropmptModal> = {
  title: "Components/PropmptModal",
  component: PropmptModal,
};
export default meta;

type Story = StoryObj<typeof PropmptModal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
  },
  render: (args) => (
    <PropmptModal
      {...args}
      title="Prompt 모달"
      content="Prompt 모달 내용입니다."
      placeholder="Prompt placeholder"
    />
  ),
};
