import type { Meta, StoryObj } from '@storybook/react';

import { ConfirmModal } from '../lib';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Confirm 모달 컴포넌트는 중요한 정보와 선택지를 사용자에게 제공하는 용도로 사용됩니다. 이 컴포넌트는 화면 중앙(또는 하단)에 띄워지는 팝업 창으로, 사용자가 다른 작업을 진행하기 전에 확인 및 휘소를 요구할 수 있는 UI 요소입니다. 따라서 Esc키로 닫히지 않습니다.',
      },
    },
  },
} satisfies Meta<typeof ConfirmModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalStory = (args: Story['args']) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div>
      <div>
        <button onClick={handleOpenModal}>confirm 모달 버튼</button>
        <ConfirmModal
          {...args}
          isOpen={isOpen}
          onClose={handleCloseModal}
          onConfirm={() => {
            console.log('confirm 확인!');
          }}
          title={args.title}
          description={args.description}
        />
      </div>
    </div>
  );
};

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    onConfirm: () => {},
    title: '카드를 삭제하시겠습니까?',
    description: '삭제하면 복구하실 수 없습니다.',
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
    description: {
      control: {
        type: 'text',
      },
    },
  },
  render: (args) => <ModalStory {...args} />,
};
