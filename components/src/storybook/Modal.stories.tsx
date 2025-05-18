import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../lib/components/common/Modal';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal/Modal',
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

const ModalStory = (args: Story['args']) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div>
      <button onClick={handleOpenModal}>기본 모달 버튼</button>
      <Modal {...args} isOpen={isOpen} onClose={handleCloseModal}>
        <Modal.Backdrop />
        <Modal.Container>
          <Modal.Title title="모달 제목" />
          <Modal.CloseButton />
          세라와 로건의 페어 프로그래밍
        </Modal.Container>
      </Modal>
    </div>
  );
};

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    onClose: () => {},
    children: <></>,
    $zIndex: 1000,
    closeByEscapeKey: true,
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
    closeByEscapeKey: {
      control: {
        type: 'boolean',
      },
      description: 'Esc 키로 모달을 닫을지 여부를 설정합니다.',
    },
  },
  render: (args) => <ModalStory {...args} />,
};
