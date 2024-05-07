import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

const meta = {
  title: 'Button/width',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fixed: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
  },
};

export const Fit: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'medium',
    buttonStyle: 'primary',
    width: 'fit',
  },
};

export const Full: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'medium',
    buttonStyle: 'primary',
    width: 'full',
  },
};