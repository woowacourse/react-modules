import type { Meta, StoryObj } from '@storybook/react';

import { useModal } from '../lib';
import { Modal } from '../lib/components/common/Modal';

const meta = {
  title: 'Modal/Container',
  component: Modal.Container,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '모달의 컨테이너는 모달의 내용을 담고 있는 부분으로, 모달의 위치와 크기를 조정하는 역할을 합니다. 이 컴포넌트는 모달의 제목, 내용, 버튼 등을 포함할 수 있습니다.',
      },
    },
  },
} satisfies Meta<typeof Modal.Container>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalStory = (args: Story['args']) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <button onClick={handleOpenModal}>기본 모달 버튼</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} closeByEscapeKey={true}>
        <Modal.Backdrop />
        <Modal.Container {...args}>
          <Modal.Title title="모달 제목" />
          <Modal.CloseButton />
          <h1>안녕</h1>
        </Modal.Container>
      </Modal>
    </>
  );
};

export const Default: Story = {
  args: {
    position: 'center',
    children: (
      <>
        <Modal.Title title="모달 제목" />
        <Modal.CloseButton />
        <h1>안녕</h1>
      </>
    ),
  },
  argTypes: {
    position: {
      options: ['center', 'bottom'],
      control: {
        type: 'select',
      },
    },
    children: {
      control: false,
    },
  },
  render: (args) => <ModalStory {...args} />,
};
