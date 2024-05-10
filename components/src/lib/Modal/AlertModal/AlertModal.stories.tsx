import '../../../index.css';
import { useState } from 'react';
import { AlertModal, Modal } from '../../';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlertModal> = {
  title: 'Modal/AlertModal',
  component: AlertModal,
  decorators: [
    (Story) => (
      <div style={{ width: '100vw', height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'center',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const onClose = () => setIsOpen(false);
    const onConfirm = () => {
      console.log('confirm');
    };

    return (
      <>
        <Modal.Button onClick={() => setIsOpen(true)} size='small' backgroundColor='primary'>
          모달열기
        </Modal.Button>
        <AlertModal {...args} isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} />
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof AlertModal>;

export const Default: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: true,
    isOpen: true,
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    size: 'medium',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: true,
    isOpen: true,
  },
};

export const Center: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: true,
    isOpen: true,
  },
};

export const Small: Story = {
  args: {
    position: 'center',
    size: 'small',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: true,
    isOpen: true,
  },
};

export const Medium: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: true,
    isOpen: true,
  },
};

export const Large: Story = {
  args: {
    position: 'center',
    size: 'large',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: true,
    isOpen: true,
  },
};

export const ExistCloseButton: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: true,
  },
};
export const ExcludeCloseButton: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    label: '설명을 입력해주세요.',
    existCloseButton: false,
  },
};
