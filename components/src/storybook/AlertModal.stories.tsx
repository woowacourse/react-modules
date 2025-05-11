import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../lib';
import { AlertModal } from '../lib/components/AlertModal';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal/Alert',
  component: AlertModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'AlertModal 컴포넌트는 사용자에게 중요한 정보를 알리거나, 특정 작업에 대한 확인을 요청할 때 사용됩니다. 화면 중앙 또는 하단에 표시되며, 사용자의 주의를 끌고 다음 행동을 유도하는 데 적합한 UI 요소입니다.',
      },
    },
  },
} satisfies Meta<typeof AlertModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    position: 'center',
    content: '모달 내용',
    onClose: () => {},
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
        <Button onClick={handleOpenModal}>버튼</Button>
        <AlertModal {...args} isOpen={isOpen} onClose={handleCloseModal}>
          {args.content}
        </AlertModal>
      </div>
    );
  },
};
