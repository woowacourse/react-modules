import React, { useState } from 'react';
import Button from '../Button';
import { Meta, StoryObj } from '@storybook/react';
import ConfirmModal from '../lib/ConfirmModal/ConfirmModal';

const meta = {
  title: 'ConfirmModal',
  component: ConfirmModal,

  parameters: {
    layout: 'fullscreen',
  },

  tags: ['autodocs'],

  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleClose = () => {
        setIsOpen(false);
        args.closeButton.onClose();
      };

      return (
        <>
          <Button onClick={() => setIsOpen(true)} />
          <div style={{ height: '100vh' }}>
            {isOpen && (
              <Story
                args={{
                  ...args,
                  closeButton: { onClose: handleClose, display: true },
                }}
              />
            )}
          </div>
        </>
      );
    },
  ],
} satisfies Meta<typeof ConfirmModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: { content: 'Confirm modal title', position: 'left' },
    closeButton: { display: false, onClose: () => {} },
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
    message: 'Confirm modal message',
    modalSize: { width: 'medium' },
  },
};
