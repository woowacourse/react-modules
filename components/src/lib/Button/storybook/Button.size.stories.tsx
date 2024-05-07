import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

const meta = {
  title: 'Button/size',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
  },
};

export const Small: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'large',
  },
};