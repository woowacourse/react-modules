import type { Meta, StoryObj } from '@storybook/react';
import TextButton from '../../lib/components/TextButton';

const meta = {
  title: 'Components/TextButton',
  component: TextButton,
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '동의하고 저장하기',
  },
};

export const CancelButton: Story = {
  args: {
    text: '취소',
    backgroundColor: 'transparent',
    color: '#8B95A1',
  },
};
