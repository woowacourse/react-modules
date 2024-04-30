import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'small',
    buttonStyle: 'primary',
  },
};

export const Medium: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'primary',
  },
};

export const Large: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'large',
    buttonStyle: 'primary',
  },
};

export const Primary: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'primary',
  },
};

export const Border: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'border',
  },
};

export const Text: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'text',
  },
};

export const Fit: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'primary',
    width: 'fit',
  },
};

export const Full: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'primary',
    width: 'full',
  },
};

export const Bright: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'primary',
    primaryColor: '#aaaaff',
  },
};

export const Dark: Story = {
  args: {
    text: '버튼입니다',
    onClick: () => {},
    size: 'medium',
    buttonStyle: 'primary',
    primaryColor: '#660066',
  },
};
