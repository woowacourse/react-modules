import type { Meta, StoryObj } from '@storybook/react';
import { ConfirmModal } from '../lib';

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ConfirmModal>;

export const ConfirmModalCenter: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'small',
    title: '타이틀',
    message: 'confirm modal입니다.',
    onClose: () => {},
    onConfirm: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalBottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '타이틀',
    message: 'confirm modal입니다.',
    onClose: () => {},
    onConfirm: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalSmall: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '타이틀',
    size: 'small',
    message: 'confirm modal입니다.',
    onClose: () => {},
    onConfirm: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalMedium: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '타이틀',
    size: 'medium',
    message: 'confirm modal입니다.',
    onClose: () => {},
    onConfirm: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalLarge: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '타이틀',
    size: 'large',
    message: 'confirm modal입니다.',
    onClose: () => {},
    onConfirm: () => {},
    onBackdropClick: () => {},
  },
};
