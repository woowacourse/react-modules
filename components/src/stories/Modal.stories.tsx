import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

const ModalTemplate = () => {
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
};

export const Default: Story = {
  render: ModalTemplate,
  args: {},
};
