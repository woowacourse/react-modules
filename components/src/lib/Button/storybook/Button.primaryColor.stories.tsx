import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';

const meta = {
  title: 'Button/primaryColor',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
  },
};

export const Bright: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    primaryColor: '#00f7ff',
  },
};

export const Dark: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    primaryColor: '#0076d0',
  },
};