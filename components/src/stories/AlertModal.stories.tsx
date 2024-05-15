import React, { useState } from 'react';
import AlertModal from './../lib/AlertModal/AlertModal';
import Button from '../Button';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'AlertModal',
  component: AlertModal,

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

      return (
        <>
          <Button onClick={() => setIsOpen(true)} />
          <div style={{ height: '100vh' }}>
            {isOpen && (
              <Story
                args={{
                  ...args,
                  closeButton: { onClose: handleClose },
                  confirmButton: { ...args.confirmButton, onConfirm: handleConfirm },
                }}
              />
            )}
          </div>
        </>
      );
    },
  ],
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: { content: 'Alert modal title', position: 'left' },
    closeButton: { onClose: () => {} },
    confirmButton: {
      content: '확인',
      onConfirm: () => {},
    },
    modalPosition: 'center',
    message: 'Alert modal message',
    modalSize: { width: 'medium' },
  },
};
