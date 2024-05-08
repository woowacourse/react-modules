import { Meta, StoryObj } from '@storybook/react';
import PromptModal, { PromptModalProps } from './PromptModal';

const meta = {
  title: 'PromptModal',
  component: PromptModal,
} satisfies Meta<PromptModalProps>;

export default meta;

type Story = StoryObj<PromptModalProps>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Prompt Modal',
    onSubmit: (value: string) => alert(`제출! ${value}`),
    onCancel: () => alert('취소!'),
    onClose: () => alert('close!'),
  },
};
