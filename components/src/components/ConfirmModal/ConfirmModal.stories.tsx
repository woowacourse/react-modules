import type { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from './ConfirmModal';

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
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalBottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalSmall: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'small',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalMedium: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'medium',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const ConfirmModalLarge: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'large',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};
