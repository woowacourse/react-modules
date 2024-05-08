import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal, { ConfirmModalProps } from './ConfirmModal';

const meta = {
  title: 'ConfirmModal',
  component: ConfirmModal,
} satisfies Meta<ConfirmModalProps>;

export default meta;

type Story = StoryObj<ConfirmModalProps>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Confirm Modal',
    message: '확인해주세요.',
    onConfirm: () => alert('확인!'),
    onCancel: () => alert('취소!'),
    onClose: () => alert('close!'),
  },
};
