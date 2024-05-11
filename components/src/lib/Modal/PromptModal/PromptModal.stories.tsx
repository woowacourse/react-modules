import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from './PromptModal';
import { fn } from '@storybook/test';

const meta = {
  title: 'PromptModal',
  tags: ['autodocs'],
  component: PromptModal,
  argTypes: {
    value: {
      control: 'text',
    },
  },
  args: {
    value: '',
    onChange: fn(),
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpened: true,
    closeModal: () => {
      alert('모달 닫기');
    },
    title: '제목입니다',
    content: '본문입니다.',
  },
};
