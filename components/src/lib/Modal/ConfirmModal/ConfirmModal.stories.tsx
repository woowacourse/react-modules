import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './ConfirmModal';

const meta = {
  title: 'ConfirmModal',
  tags: ['autodocs'],
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

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
