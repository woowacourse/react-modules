import React, { useState } from 'react';
import Button from '../Button';
import { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal/Modal';

const meta = {
  title: 'Modal/CustomSize',
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
        args.modalHeader.closeButton.onClose();
      };

      return (
        <>
          <Button onClick={() => setIsOpen(true)} />
          <div style={{ height: '100vh' }}>
            {isOpen && (
              <Story
                args={{
                  ...args,
                  modalHeader: { ...args.modalHeader, closeButton: { onClose: handleClose, display: true } },
                }}
              />
            )}
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
    modalHeader: { title: { content: 'Default medium size modal' }, closeButton: { display: true, onClose: () => {} } },
    modalPosition: 'center',
    modalSize: { width: 'medium' },
  },
};

export const SmallSize: Story = {
  args: {
    modalHeader: { title: { content: 'Small size modal' }, closeButton: { display: true, onClose: () => {} } },
    modalPosition: 'center',
    modalSize: { width: 'small' },
  },
};

export const LargeSize: Story = {
  args: {
    modalHeader: { title: { content: 'Large size modal' }, closeButton: { display: true, onClose: () => {} } },
    modalPosition: 'center',
    modalSize: { width: 'large' },
  },
};
