import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../lib/components/Modal';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '모달 컴포넌트는 중요한 정보를 사용자에게 제공하거나, 특정 작업을 유도하는 용도로 사용됩니다.이 컴포넌트는 화면 중앙(또는 하단)에 띄워지는 팝업 창으로, 사용자가 다른 작업을 진행하기 전에선택 또는 확인을 요구할 수 있는 UI 요소입니다.',
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
    maxWidth: '400px',
    zIndex: 10,
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

export const NoCloseButton: Story = {
  args: {
    isOpen: false,
    position: 'center',
    title: 'close 버튼 없는 버전 모달',
    showCloseButton: false,
    onClose: () => {},
    children: <></>,
  },

  render: (args) => {
    const { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick } = useModal();

    return (
      <div>
        <button onClick={handleOpenModal}>close 버튼 없는 버전 모달 버튼</button>
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

export const PositionBottom: Story = {
  args: {
    isOpen: false,
    title: 'Bottom 모달',
    position: 'bottom',
    showCloseButton: true,
    onClose: () => {},
    children: <></>,
  },
  render: (args) => {
    const { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick } = useModal();

    return (
      <div>
        <button onClick={handleOpenModal}>Bottom 모달 버튼</button>
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

export const PositionBottomNoCloseButton: Story = {
  args: {
    isOpen: false,
    title: 'Bottom 모달',
    position: 'bottom',
    showCloseButton: false,
    onClose: () => {},
    children: <></>,
  },
  render: (args) => {
    const { isOpen, handleOpenModal, handleCloseModal, handleOutsideClick } = useModal();

    return (
      <div>
        <button onClick={handleOpenModal}>Bottom close 버튼 없는 버전 모달 버튼</button>
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
