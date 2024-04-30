import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
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

export const Small: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'small',
    buttonStyle: 'primary',
  },
};

export const Large: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'large',
    buttonStyle: 'primary',
  },
};

export const Border: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'medium',
    buttonStyle: 'border',
  },
};

export const Text: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'medium',
    buttonStyle: 'text',
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

export const Bright: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'medium',
    buttonStyle: 'primary',
    primaryColor: '#FFE600',
  },
};

export const Dark: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {
      alert('버튼 클릭');
    },
    size: 'medium',
    buttonStyle: 'primary',
    primaryColor: '#f66f00',
  },
};
