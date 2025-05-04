import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    position: {
      control: { type: 'radio' },
      options: ['center', 'bottom'],
    },
    hasConfirmButton: { control: 'boolean' },
    hasTopCloseButton: { control: 'boolean' },
    hasBottomCloseButton: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalTemplate = (args: any) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Modal
      {...args}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      onConfirm={() => setIsOpen(false)}
      content={<p>{args.content}</p>}
    />
  );
};

export const Default: Story = {
  render: ModalTemplate,
  args: {
    title: '테스트',
    content: '테스트',
    hasConfirmButton: true,
    hasTopCloseButton: true,
    hasBottomCloseButton: false,
    position: 'center',
  },
};

export const CenterModal: Story = {
  render: ModalTemplate,
  args: {
    title: '테스트',
    content: '테스트',
    position: 'center',
    hasConfirmButton: false,
    hasTopCloseButton: true,
    hasBottomCloseButton: false,
  },
};

export const BottomModal: Story = {
  render: ModalTemplate,
  args: {
    title: '테스트',
    content: '테스트',
    position: 'bottom',
    hasConfirmButton: false,
    hasTopCloseButton: true,
    hasBottomCloseButton: false,
  },
};

export const ConfirmButtonModal: Story = {
  render: ModalTemplate,
  args: {
    title: '테스트',
    content: '테스트',
    position: 'center',
    hasConfirmButton: true,
    hasTopCloseButton: true,
    hasBottomCloseButton: false,
  },
};

export const CloseButtonModal: Story = {
  render: ModalTemplate,
  args: {
    title: '테스트',
    content: '테스트',
    position: 'center',
    hasConfirmButton: true,
    hasTopCloseButton: false,
    hasBottomCloseButton: true,
  },
};
