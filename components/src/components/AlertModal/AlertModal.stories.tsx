import type { Meta, StoryObj } from '@storybook/react';
import AlertModal from './AlertModal.tsx';

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
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const AlertModalBottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const AlertModalSmall: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'small',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const AlertModalMedium: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'medium',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const AlertModalLarge: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'large',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};
