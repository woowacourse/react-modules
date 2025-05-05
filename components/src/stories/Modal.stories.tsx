import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/Modal.tsx';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const centerOpen: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    onClose: () => {},
  },
};

export const bottomOpen: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    onClose: () => {},
  },
};

export const InteractiveModalCenter = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setIsOpen(false);
      }
    };
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          position="center"
          title="제목"
          onClose={() => setIsOpen(false)}
          onBackdropClick={handleBackdropClick}
        >
          <p>이것은 모달 내용입니다.</p>
        </Modal>
      </>
    );
  },
};

export const InteractiveModalBottom = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setIsOpen(false);
      }
    };
    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          position="bottom"
          title="제목"
          onClose={() => setIsOpen(false)}
          onBackdropClick={handleBackdropClick}
        >
          <p>이것은 모달 내용입니다.</p>
        </Modal>
      </>
    );
  },
};
