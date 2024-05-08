import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../../ConfirmModal';

const meta = {
  title: 'ConfirmModal/primaryColor',
  component: ConfirmModal,
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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

export const Bright: Story = {
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
    primaryColor: '#ffd09e',
  },
};

export const Dark: Story = {
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
    primaryColor: '#0076d0',
  },
};

