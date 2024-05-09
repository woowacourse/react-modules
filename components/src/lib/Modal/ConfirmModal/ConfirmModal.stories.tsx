import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './ConfirmModal';

const meta = {
  title: 'Modal/ConfirmModal',
  component: ConfirmModal,
  parameters: {
    controls: { exclude: ['onConfirm', 'close'] },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const Default: Story = {
  args: {
    headerText: '확인 모달 제목',
    bodyText: '확인 모달 내용',
    isOpen: true,
  },
};
