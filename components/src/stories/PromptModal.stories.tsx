import type { Meta, StoryObj } from '@storybook/react';
import { PromptModal } from '../lib/index';

const meta = {
  title: 'PromptModal',
  component: PromptModal,
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 모달이_열림: Story = {
  args: {
    open: true,
    title: '안녕',
    onClose: () => console.log('마루'),
  },
};
