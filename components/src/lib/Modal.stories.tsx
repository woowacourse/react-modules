import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    position: {
      control: 'select',
      options: ['center', 'bottom'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
      name: 'content',
    },
    onClose: { action: 'onClose' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;
export const Center: Story = {
  args: {
    position: 'center',
    title: '기본 모달',
    children: '모달 내용입니다.',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>모달 열기</button>
        {isOpen && (
          <Modal
            {...args}
            onClose={() => {
              action('onClose')();
              setIsOpen(false);
            }}
          />
        )}
      </>
    );
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
    title: '하단 모달',
    children: '하단 모달 내용입니다.',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <button onClick={() => setIsOpen(true)}>하단 모달 열기</button>
        {isOpen && (
          <Modal
            {...args}
            onClose={() => {
              action('onClose')();
              setIsOpen(false);
            }}
          />
        )}
      </>
    );
  },
};
