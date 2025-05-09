import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.CloseButton />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
  args: {},
};

export const TitleModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Title title="모달 타이틀" />
          <p>모달열림</p>
          <Modal.CloseButton />
        </Modal.Content>
      </Modal>
    );
  },
};
