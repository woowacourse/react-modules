import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['default', 'none'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    variants: {
      control: { type: 'select' },
      options: ['normal', 'border'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    color: 'default',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    color: 'none',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Button',
    color: 'default',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    text: 'Medium Button',
    color: 'default',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    text: 'Large Button',
    color: 'default',
    size: 'lg',
  },
};

export const FullWidth: Story = {
  args: {
    text: 'Full width Button',
    color: 'default',
    fullWidth: true,
  },
};
