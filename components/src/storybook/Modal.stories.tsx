import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../components/Modal';
import { useModal } from '../hooks/useModal';

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '모달 컴포넌트입니다.',
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    position: 'center',
    title: '모달 제목',
    showCloseButton: true,
    onClose: () => {},
    onOutsideClick: () => {},
    children: <></>,
  },
  argTypes: {
    isOpen: {
      control: false,
    },
    title: {
      control: {
        type: 'text',
      },
    },
    position: {
      control: {
        type: 'select',
        options: ['center', 'bottom'],
      },
    },
    showCloseButton: {
      control: {
        type: 'boolean',
      },
    },
  },
  render: (args) => {
    const { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick } = useModal();

    return (
      <div>
        <button onClick={handleOpenModal}>버튼</button>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={handleCloseModal}
          onOutsideClick={handleOutsideClick}
        >
          세라와 로건의 페어 프로그래밍
        </Modal>
      </div>
    );
  },
};
