import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../lib';
import { InputModal } from '../lib/components/InputModal';
import { useModal } from '../lib/hooks/useModal';

const meta = {
  title: 'Modal/Input',
  component: InputModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'InputModal 컴포넌트는 사용자의 입력을 받을 때 사용되는 UI 요소입니다. 이 컴포넌트는 화면 중앙 또는 하단에 표시되며, 사용자가 다른 작업을 진행하기 전에 입력, 확인, 취소 등의 상호작용을 유도합니다.',
      },
    },
  },
} satisfies Meta<typeof InputModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '모달 제목',
    placeholder: '입력 텍스트',
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
    maxWidth: {
      control: false,
    },
    zIndex: {
      control: false,
    },
  },
  render: (args) => {
    const { isOpen, handleOpenModal, handleCloseModal } = useModal();
    const [value, setValue] = useState(args.value);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return (
      <div>
        <Button variant="outlined" fontColor="#808080" color="#808080" onClick={handleOpenModal}>
          버튼
        </Button>
        <InputModal
          {...args}
          isOpen={isOpen}
          onClose={handleCloseModal}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  },
};
