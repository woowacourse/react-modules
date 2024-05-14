import React, { useState } from 'react';
import Button from '../Button';
import { Meta, StoryObj } from '@storybook/react';
import PromptModal from './../lib/PromptModal/PromptModal';

const meta = {
  title: 'PromptModal',
  component: PromptModal,

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

      return (
        <>
          <Button onClick={() => setIsOpen(true)} />
          <div style={{ height: '100vh' }}>
            {isOpen && (
              <Story
                args={{
                  ...args,
                  closeButton: { onClose: handleClose },
                }}
              />
            )}
          </div>
        </>
      );
    },
  ],
} satisfies Meta<typeof PromptModal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: { content: 'Prompt modal title', position: 'left' },
    closeButton: { onClose: () => {} },
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
    modalSize: { width: 'medium' },
  },
};
