import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../lib';
import { PromptModal } from '../lib/components/PromptModal';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal/Prompt',
  component: PromptModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'PromptModal 컴포넌트는 사용자에게 중요한 정보를 전달하거나, 특정 동작을 유도할 때 사용되는 팝업 창입니다. 화면 중앙 또는 하단에 표시되며, 사용자가 다른 작업을 수행하기 전에 취소나 확인 등의 조치를 취하도록 안내합니다.',
      },
    },
  },
} satisfies Meta<typeof PromptModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    content: '모달 내용',
    position: 'center',
    onClose: () => {},
    onSubmit: () => {},
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
    onClose: {
      control: false,
    },
    onSubmit: {
      control: false,
    },
    maxWidth: {
      control: false,
    },
    zIndex: {
      control: false,
    },
  },
  render: (args) => {
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();

    return (
      <div>
        <Button color="#3182F7" fontColor="white" onClick={handleOpenModal}>
          버튼
        </Button>
        <PromptModal {...args} isOpen={isOpen} onClose={handleCloseModal}>
          {args.content}
        </PromptModal>
      </div>
    );
  },
};
