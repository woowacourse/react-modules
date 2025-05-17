import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../lib/Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal/Position',
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CenterModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position="center">
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Title title="중간 모달 타이틀" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const BottomModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} position="bottom">
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Title title="하단 모달 타이틀" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};
