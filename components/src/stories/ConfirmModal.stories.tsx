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

  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleClose = () => {
        setIsOpen(false);
        args.closeButton.onClose();
      };

      const handleConfirm = () => {
        alert('확인!');
        setIsOpen(false);
        args.confirmButton.onConfirm();
      };

      const handleCancel = () => {
        alert('취소!');
        setIsOpen(false);
        args.cancelButton.onCancel();
      };

      return (
        <>
          <Button onClick={() => setIsOpen(true)} />
          <div style={{ height: '100vh' }}>
            {isOpen && (
              <Story
                args={{
                  ...args,
                  closeButton: { onClose: handleClose },
                  cancelButton: { ...args.cancelButton, onCancel: handleCancel },
                  confirmButton: { ...args.confirmButton, onConfirm: handleConfirm },
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
    closeButton: { onClose: () => {} },
    confirmButton: {
      content: '확인',
      onConfirm: () => {},
    },
    cancelButton: {
      content: '취소',
      onCancel: () => {},
    },
    modalPosition: 'center',
    message: 'Confirm modal message',
    modalSize: { width: 'medium' },
  },
};
