import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from './AlertModal';

const meta = {
  title: 'AlertModal',
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

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
