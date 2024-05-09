import { Meta, StoryObj } from '@storybook/react';
import AlertModal from './AlertModal';

const meta = {
  title: 'Modal/AlertModal',
  component: AlertModal,
  parameters: {
    controls: { exclude: ['close'] },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  args: {
    headerText: '알림 모달 제목',
    bodyText: '알림 모달 내용',
    isOpen: true,
  },
};
