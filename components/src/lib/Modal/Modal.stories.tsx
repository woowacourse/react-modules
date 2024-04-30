import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';

const meta = {
  title: 'Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpened: true,
    closeModal: () => {},
    title: '제목입니다',
    description: '설명입니다',
    modalPosition: 'bottom',
    firstButton: { text: '취소', onClick: () => {} },
    secondButton: { text: '확인', onClick: () => {} },
    buttonPosition: 'row',
  },
};
