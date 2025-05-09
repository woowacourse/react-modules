import type { Meta, StoryObj } from '@storybook/react';
import PromptModal from './PromptModal';

const meta: Meta<typeof PromptModal> = {
  title: 'Components/PromptModal',
  component: PromptModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const PromptModalModalCenter: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'small',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const PromptModalModalBottom: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const PromptModalModalSmall: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'small',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const PromptModalMedium: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'medium',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const PromptModalLarge: Story = {
  args: {
    isOpen: true,
    position: 'center',
    size: 'large',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};
