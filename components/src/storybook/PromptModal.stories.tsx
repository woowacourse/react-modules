import type { Meta, StoryObj } from '@storybook/react';

import { PromptModal } from '../lib';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal/PromptModal',
  component: PromptModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Prompt 모달 컴포넌트는 간단한 입력 창과 선택지를 사용자에게 제공하는 용도로 사용됩니다. 이 컴포넌트는 화면 중앙(또는 하단)에 띄워지는 팝업 창으로, 사용자가 중요한 정보를 입력하고 제출 및 휘소를 요구할 수 있는 UI 요소입니다. 따라서 Esc키로 닫히지 않습니다.',
      },
    },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

const ModalStory = (args: Story['args']) => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <div>
      <div>
        <button onClick={handleOpenModal}>prompt 모달 버튼</button>
        <PromptModal
          {...args}
          isOpen={isOpen}
          onClose={handleCloseModal}
          onConfirm={(value) => {
            alert(`prompt 확인!:${value}`);
          }}
          title={args.title}
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
    title: '쿠폰 번호를 입력해 주세요.',
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
  },
  render: (args) => <ModalStory {...args} />,
};
