import '../../../index.css';
import { useState } from 'react';
import { PromptModal, Modal } from '../../';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PromptModal> = {
  title: 'PromptModal',
  component: PromptModal,
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
    const [value, setValue] = useState('');

    const onClose = () => setIsOpen(false);
    const onConfirm = () => console.log('confirm');

    return (
      <>
        <Modal.Button onClick={() => setIsOpen(true)} size='small' backgroundColor='primary'>
          모달열기
        </Modal.Button>
        <PromptModal {...args} isOpen={isOpen} onClose={onClose} onConfirm={onConfirm}>
          <Modal.Input placeholder='입력해주세요.' label='inputModal' value={value} onChange={(e) => setValue(e.target.value)} />
        </PromptModal>
      </>
    );
  },
};

export default meta;

type Story = StoryObj<typeof PromptModal>;

export const Default: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    existCloseButton: true,
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    size: 'medium',
    title: '제목을 입력해주세요',
    existCloseButton: true,
  },
};

export const Center: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    existCloseButton: true,
  },
};

export const Small: Story = {
  args: {
    position: 'center',
    size: 'small',
    title: '제목을 입력해주세요',
    existCloseButton: true,
  },
};

export const Medium: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    existCloseButton: true,
  },
};

export const Large: Story = {
  args: {
    position: 'center',
    size: 'large',
    title: '제목을 입력해주세요',
    existCloseButton: true,
  },
};

export const ExistCloseButton: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    existCloseButton: true,
  },
};

export const ExcludeCloseButton: Story = {
  args: {
    position: 'center',
    size: 'medium',
    title: '제목을 입력해주세요',
    existCloseButton: false,
  },
};
