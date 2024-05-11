import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
  tags: ['autodocs'],
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
    ...Default.args,
    size: 'small',
    buttonStyle: 'primary',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
    buttonStyle: 'primary',
  },
};

export const Border: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    buttonStyle: 'border',
  },
};

export const Text: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    buttonStyle: 'text',
  },
};

export const Fit: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    buttonStyle: 'primary',
    width: 'fit',
  },
};

export const Full: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    buttonStyle: 'primary',
    width: 'full',
  },
};

export const Bright: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    buttonStyle: 'primary',
    primaryColor: '#FFE600',
  },
};

export const Dark: Story = {
  args: {
    ...Default.args,
    size: 'medium',
    buttonStyle: 'primary',
    primaryColor: '#f66f00',
  },
};
