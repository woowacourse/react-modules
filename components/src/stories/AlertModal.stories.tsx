import type { Meta, StoryObj } from '@storybook/react';
import { AlertModal } from '../lib';

const meta: Meta<typeof AlertModal> = {
  title: 'Components/AlertModal',
  component: AlertModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AlertModal>;

export const AlertModalCenter: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'small',
    title: '타이틀',
    message: 'AlertModal입니다.',
    onClose: () => {},
  },
};

export const AlertModalBottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '타이틀',
    message: 'AlertModal입니다.',
    onClose: () => {},
  },
};

export const AlertModalSmall: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'small',
    title: '타이틀',
    message: 'AlertModal입니다.',
    onClose: () => {},
  },
};

export const AlertModalMedium: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'medium',
    title: '타이틀',
    message: 'AlertModal입니다.',
    onClose: () => {},
  },
};

export const AlertModalLarge: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'large',
    title: '타이틀',
    message: 'AlertModal입니다.',
    onClose: () => {},
  },
};
