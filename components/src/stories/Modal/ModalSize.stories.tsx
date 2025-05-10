import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../lib/Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal/Size',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content size="small">
          <Modal.Title title="Size: small 모달" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const MediumModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content size="medium">
          <Modal.Title title="Size: medium 모달" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const LargeModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content size="large">
          <Modal.Title title="Size: large 모달" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};
