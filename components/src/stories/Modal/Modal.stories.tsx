import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../../lib/Modal';
import { useState } from 'react';
import TextButton from '../../lib/components/TextButton';

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
        </Modal.Content>
      </Modal>
    );
  },
};

export const NoOverlayCloseModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay closeOnClick={false} />
        <Modal.Content>
          <Modal.Title title="모달 타이틀" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const NoEscapeCloseModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnEscape={false}>
        <Modal.Overlay closeOnClick={false} />
        <Modal.Content>
          <Modal.Title title="모달 타이틀" />
          <p>모달열림</p>
        </Modal.Content>
      </Modal>
    );
  },
};

export const ModalWithBottomCancelButton: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Overlay />
        <Modal.Content
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Modal.Title title="모달 타이틀" />
          <p>모달열림</p>
          <TextButton
            text="취소"
            color="#8B95A1"
            backgroundColor="transparent"
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </Modal.Content>
      </Modal>
    );
  },
};
