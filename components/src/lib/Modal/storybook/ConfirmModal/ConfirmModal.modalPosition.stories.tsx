import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../../ConfirmModal';

const meta = {
  title: 'ConfirmModal/modalPosition',
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    onConfirm: () => {
      alert('확인')
    },
    title: '제목입니다',
    description: '설명입니다',
  },
};

export const Bottom: Story = {
  args: {
    modalPosition: 'bottom',
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
    },
    onConfirm: () => {
      alert('확인')
    },
    title: '제목입니다',
    description: '설명입니다',
  },
};
