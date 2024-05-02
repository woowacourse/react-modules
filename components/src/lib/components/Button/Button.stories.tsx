import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    mode: 'primary',
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    mode: 'secondary',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    text: 'Small Button',
    mode: 'primary',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    text: 'Medium Button',
    mode: 'primary',
    size: 'md',
  },
};
