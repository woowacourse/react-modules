import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ModalButtonProps } from './Button'; // Assuming the type is exported

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
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
  },
} as Meta<ModalButtonProps>;

export const Primary: StoryObj<ModalButtonProps> = {
  args: {
    text: 'Primary Button',
    mode: 'primary',
    size: 'lg',
  },
};

export const Secondary: StoryObj<ModalButtonProps> = {
  args: {
    text: 'Secondary Button',
    mode: 'secondary',
    size: 'lg',
  },
};

export const Small: StoryObj<ModalButtonProps> = {
  args: {
    text: 'Small Button',
    mode: 'primary',
    size: 'sm',
  },
};

export const Medium: StoryObj<ModalButtonProps> = {
  args: {
    text: 'Medium Button',
    mode: 'primary',
    size: 'md',
  },
};
