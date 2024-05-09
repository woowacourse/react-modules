import { Meta, StoryObj } from '@storybook/react';
import PromptModal from './PromptModal';

const meta = {
  title: 'Modal/PromptModal',
  component: PromptModal,
  parameters: {
    controls: { exclude: ['inputValue', 'onInputChange', 'onConfirm', 'close'] },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  args: {
    headerText: '프롬프트 모달 제목',
    isOpen: true,
  },
};
