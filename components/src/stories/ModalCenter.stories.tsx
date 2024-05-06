import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from '../lib/Modal';
import Button from '../Button';

const meta = {
  title: 'Modal/Center',
  component: Modal,

  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleClose = () => {
        setIsOpen(false);
        if (args.closeButton && args.closeButton.onClose) {
          args.closeButton.onClose();
        }
      };

      return (
        <>
          <Button onClick={() => setIsOpen(true)} />
          <div style={{ height: '100vh' }}>
            {isOpen && <Story args={{ ...args, closeButton: { onClose: handleClose } }} />}
          </div>
        </>
      );
    },
  ],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    closeButton: { onClose: () => {} },
    modalPosition: 'center',
    children: 'Children will go here',
  },
};

export const ModalWithConfirmButton: Story = {
  args: {
    closeButton: { onClose: () => {} },
    confirmButton: { content: '확인', onConfirm: () => {} },
    modalPosition: 'center',
    children: 'Children will go here',
  },
};

export const ModalWithCancelButton: Story = {
  args: {
    closeButton: { onClose: () => {} },
    cancelButton: { content: '취소', onCancel: () => {} },
    modalPosition: 'center',
    children: 'Children will go here',
  },
};

export const ModalWithAllButton: Story = {
  args: {
    closeButton: { onClose: () => {} },
    confirmButton: { content: '확인', onConfirm: () => {} },
    cancelButton: { content: '취소', onCancel: () => {} },
    modalPosition: 'center',
    children: 'Children will go here',
  },
};

export const ModalWithButtonsAndTitle: Story = {
  args: {
    title: { content: 'Test Title' },
    subtitle: { content: 'Test Subtitle' },
    closeButton: {
      onClose: () => {
        alert('닫기');
      },
    },
    confirmButton: {
      content: '확인',
      onConfirm: () => {
        alert('확인');
      },
    },
    cancelButton: {
      content: '취소',
      onCancel: () => {
        alert('취소');
      },
    },
    modalPosition: 'center',
    children: 'Children will go here',
  },
};
