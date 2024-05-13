import type { Meta, StoryObj } from '@storybook/react';
import { AlertModal } from '../../lib/index';

const meta = {
  title: 'AlertModalFeature',
  component: AlertModal,
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 모달이_열림: Story = {
  args: {
    open: true,
    title: '안녕',
    caption: '안녕 나는 쿠키라고 해',
    onClose: () => console.log('마루'),
  },
};
