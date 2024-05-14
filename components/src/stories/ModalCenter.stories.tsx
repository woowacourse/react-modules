import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import Modal from '../lib/Modal/Modal';
import Button from '../Button';

const meta = {
  title: 'Modal/Center',
  component: Modal,

  parameters: {
    layout: 'fullscreen',
  },

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
    modalHeader: { closeButton: { onClose: () => {}, display: true } },
    modalContent: { children: 'Children will go here' },
    modalPosition: 'center',
  },
};

export const ModalWithConfirmButton: Story = {
  args: {
    modalHeader: { closeButton: { onClose: () => {}, display: true } },
    modalContent: { children: 'Children will go here' },
    modalFooter: {
      confirmButton: {
        content: '확인',
        onConfirm: () => {
          alert('확인');
        },
      },
    },
    modalPosition: 'center',
  },
};

export const ModalWithCancelButton: Story = {
  args: {
    modalHeader: { closeButton: { onClose: () => {}, display: true } },
    modalContent: { children: 'Children will go here' },
    modalFooter: {
      cancelButton: {
        content: '취소',
        onCancel: () => {
          alert('취소');
        },
      },
    },
    modalPosition: 'center',
  },
};

export const ModalWithAllButton: Story = {
  args: {
    modalHeader: { closeButton: { onClose: () => {}, display: true } },
    modalContent: { children: 'Children will go here' },
    modalFooter: {
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
    },
    modalPosition: 'center',
  },
};

export const ModalWithButtonsAndTitle: Story = {
  args: {
    modalHeader: {
      title: { content: 'Title' },
      subtitle: { content: 'Subtitle' },
      closeButton: { onClose: () => {}, display: true },
    },
    modalContent: { children: 'Children will go here' },
    modalFooter: {
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
    },
    modalPosition: 'center',
  },
};
