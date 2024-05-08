import { Meta, StoryObj } from '@storybook/react';
import AlertModal, { AlertModalProps } from './AlertModal';

const meta = {
  title: 'AlertModal',
  component: AlertModal,
} satisfies Meta<AlertModalProps>;

export default meta;

type Story = StoryObj<AlertModalProps>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Alert Modal',
    message: '확인해주세요.',
    onCheck: () => alert('확인!'),
    onClose: () => alert('close!'),
  },
};
