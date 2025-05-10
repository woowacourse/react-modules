import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../lib/module/Modal.tsx';
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
    size: 'small',
    showCloseButton: true,
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const bottomOpen: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    size: 'small',
    showCloseButton: true,
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const withCloseButton: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    showCloseButton: true,
    size: 'small',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const withoutCloseButton: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    showCloseButton: false,
    size: 'small',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const sizeSmall: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    showCloseButton: false,
    size: 'small',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const sizeMedium: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    showCloseButton: false,
    size: 'medium',
    onClose: () => {},
    onBackdropClick: () => {},
  },
};

export const sizeLarge: Story = {
  args: {
    isOpen: true,
    position: 'bottom',
    title: '제목',
    children: '이것은 모달 내용입니다.',
    showCloseButton: false,
    size: 'large',
    onClose: () => {},
    onBackdropClick: () => {},
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
          showCloseButton={true}
          size="small"
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
          showCloseButton={true}
          size="small"
          onClose={() => setIsOpen(false)}
          onBackdropClick={handleBackdropClick}
        >
          <p>이것은 모달 내용입니다.</p>
        </Modal>
      </>
    );
  },
};
