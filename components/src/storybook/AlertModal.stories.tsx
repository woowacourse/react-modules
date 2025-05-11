import type { Meta, StoryObj } from '@storybook/react';

import { AlertModal } from '../lib';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal/AlertModal',
  component: AlertModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Alert 모달 컴포넌트는 중요한 정보를 사용자에게 제공하는 용도로 사용됩니다. 이 컴포넌트는 화면 중앙(또는 하단)에 띄워지는 팝업 창으로, 사용자가 다른 작업을 진행하기 전에 확인을 요구할 수 있는 UI 요소입니다. 따라서 Esc키로 닫히지 않습니다.',
      },
    },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalStory = (args: Story['args']) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div>
      <div>
        <button onClick={handleOpenModal}>alert 모달 버튼</button>
        <AlertModal
          {...args}
          isOpen={isOpen}
          onClose={handleCloseModal}
          onConfirm={() => {
            console.log('alert 확인!');
            handleCloseModal();
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
    title: '아이디를 입력해 주세요.',
    description: '아이디는 필수로 입력해야 합니다.',
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
