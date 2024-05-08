import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from '../../AlertModal';

const meta = {
  title: 'AlertModal/modalPosition',
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Center: Story = {
  args: {
    isOpened: true,
    onClose: () => {
      alert('모달 닫기');
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
    title: '제목입니다',
    description: '설명입니다',
  },
};