import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from '@emotion/styled';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/VariousModal',
  component: Modal,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['alert', 'confirm', 'prompt'],
    },
    title: {
      control: { type: 'text' },
    },
    message: {
      control: { type: 'text' },
    },
    position: {
      control: { type: 'radio' },
      options: ['center', 'bottom'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => {
      setIsOpen(false);
    };
    return (
      <div>
        <Modal isOpen={isOpen} onClose={onClose} {...args} />
        <OpenModal onClick={() => setIsOpen(!isOpen)}>3 Type 모달 버튼</OpenModal>
      </div>
    );
  },
  args: {
    type: 'prompt',
    title: '아이디를 입력해 주세요.',
    onConfirm: () => {
      alert('확인 버튼 클릭');
    },
    onSubmit: (input) => {
      alert(`입력한 아이디: ${input}`);
    },
    message: '아이디는 필수로 입력해야 합니다.',
    position: 'center',
    size: 'large',
  },
};

const OpenModal = styled.button`
  width: 120px;
  height: 50px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  transition: background-color 0.1s ease;
  :hover {
    background-color: #0056b3;
  }
`;
