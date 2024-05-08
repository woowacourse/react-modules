import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../../ConfirmModal';

const meta = {
  title: 'ConfirmModal/size',
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
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

export const Medium: Story = {
  args: {
    size: 'medium',
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

export const Large: Story = {
  args: {
    size: 'large',
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

